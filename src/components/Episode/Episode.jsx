import React from "react";
import TvShow from "../TvShow/TvShow";
import Card from "../Card/Card";
import "./Episode.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { getEpisodeDetails } from "../../services/tvShowsAPI";
import "../../containers/TvShowDetails/TvShowDetails.scss";
import { MyVerticallyCenteredModal } from "../Modal/Modal";

async function getEpisode(tvShowId, seasonNr, episodeNr, setInfo) {
  console.log(seasonNr);
  if (tvShowId && seasonNr && episodeNr) {
    console.log(tvShowId, seasonNr, episodeNr);
    try {
      const tvShowInfo = await getEpisodeDetails(tvShowId, seasonNr, episodeNr);
      // console.log(tvShowInfo);
      setInfo(tvShowInfo);
      // this.setState({
      //   loading: false,
      //   tvShowInfo,
      //   error: false,
      // });
    } catch (err) {
      // this.setState({ loading: false, error: true });
    }
  }
}

export const Episode = ({ episode, seasonNr, tvShowId }) => {
  const [modalShow, setModalShow] = React.useState(false);
  const [tvShowInfo, setInfo] = React.useState();
  return (
    <div className="tvShow-list" style={{ position: "relative" }}>
      <Card
        key={episode.id}
        tvShowId={episode.id}
        className={"episode-card-component"}
        style={{ color: "black" }}
      >
        <TvShow
          title={episode.name}
          poster={episode.poster_path}
          released={episode.air_date}
          vote={episode.vote_average}
          className={"tvShowEpisode-component"}
        />
        <div>
          {seasonNr !== 0 && (
            <button
              type="button"
              class="btn btn-secondary"
              onClick={() => {
                getEpisode(
                  tvShowId,
                  seasonNr,
                  episode.episode_number,
                  setInfo
                ) && setModalShow(true);
              }}
            >
              More Details
            </button>
          )}
        </div>

        {tvShowInfo && (
          <MyVerticallyCenteredModal
            className="modal"
            show={modalShow}
            episode={tvShowInfo}
            onHide={() => setModalShow(false)}
          />
        )}
      </Card>
    </div>
  );
};

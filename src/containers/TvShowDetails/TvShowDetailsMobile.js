import React, { Component } from "react";
import { BASE_POSTER_PATH } from "../../constants/Constants";
import { StarSvg} from './TvShowDetails';
import "./TvShowDetailsMobile.scss";
import Season from "../Season/Season";

class TvShowDetailsMobile extends Component {
  render() {
    const { tvShowInfo } = this.props;
    const Stars = [];

    for (let i = 0; i < parseInt(tvShowInfo.vote_average); i++) {
      Stars.push(<StarSvg key={i}/>);
    }
    return (
      <>
        <img
          className="tvShow-details-backdrop"
          src={`${BASE_POSTER_PATH}/w500${tvShowInfo.poster_path}`}
          alt="tvShow background"
        />
        <div className="tvShow-details-info">
          <div className="tvShow-details-info__overview">
            <strong>TvShow Overview:</strong> {tvShowInfo.overview}
          </div>
          <div>
              <strong>Status:</strong> {tvShowInfo.status}
            </div>
            <div>
              <strong>Network:</strong> {tvShowInfo.networks[0].name}
            </div>
            <div>
              <strong>Genre:</strong>
              {tvShowInfo.genres.map((genre) => `#${genre.name} `)}
            </div>
            <div className="tvShow-details-average">
              <strong>Average Rating:</strong>
              {Stars}({tvShowInfo.vote_average})
            </div>
        </div>
        <div>
        {tvShowInfo.seasons.map((season) => (
          <Season
            className="season"
            season={season}
            tvShowId={tvShowInfo.id}
            seasonNr={season.season_number}
            key={season.id}
          ></Season>
        ))}
      </div>
      </>
    );
  }
}

export default TvShowDetailsMobile;

import React from "react";
import {
  BASE_BACKDROP_PATH,
  BASE_POSTER_PATH,
} from "../../constants/Constants";
import "./TvShowDetails.scss";
import Season from "../Season/Season";

export const StarSvg = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
  >
    <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.326 18.266l-4.326-2.314-4.326 2.313.863-4.829-3.537-3.399 4.86-.671 2.14-4.415 2.14 4.415 4.86.671-3.537 3.4.863 4.829z" />
  </svg>
);

const TvShowDetails = (props) => {
  const { tvShowInfo } = props;

  const Stars = [];

  for (let i = 0; i < parseInt(tvShowInfo.vote_average); i++) {
    Stars.push(<StarSvg key={i} />);
  }
  return (
    <>
      <img
        className="tvShow-details-backdrop"
        src={`${BASE_BACKDROP_PATH}${tvShowInfo.backdrop_path}`}
        alt="tvShow background"
      />
      <div className="tvShow-details-poster-wrapper">
        <img
          className="tvShow-details-poster"
          src={`${BASE_POSTER_PATH}/w500${tvShowInfo.poster_path}`}
          alt="tvShow poster"
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
};

export default TvShowDetails;

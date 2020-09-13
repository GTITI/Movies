import React from "react";
import { Breakpoint } from "react-socks";
import { BASE_POSTER_PATH } from "../../constants/Constants";
import "./TvShowList.scss";

const tvShow = (props) => (
  <>
    <Breakpoint medium up>
      <div className={props.className || "tvShow-component"}>
        {props.poster && (
          <img
            src={`${BASE_POSTER_PATH}/w300${props.poster}`}
            alt="tvShow poster"
            className="tvShow-poster"
          />
        )}
        <div className="tvShow-details">
          <h1 className="tvShow-title">{props.title}</h1>
          {props.overview && (
            <p className="tvShow-overview">
              <strong>Overview:</strong> {props.overview}
            </p>
          )}
          {props.released && (
            <p className="tvShow-released">
              <strong>Release Date:</strong> {props.released}
            </p>
          )}
          
          {props.vote && props.vote !== 0 && (
            <p className="tvShow-released">
              <strong>Average Rating: {props.vote}</strong>
            </p>
          )}
        </div>
      </div>
    </Breakpoint>
    <Breakpoint small down>
      <div className="tvShow-component-mobile">
        <h1 className="tvShow-title">{props.title}</h1>
        {props.poster && (
          <img
            src={`${BASE_POSTER_PATH}/w300${props.poster}`}
            alt="tvShow poster"
            className="tvShow-poster"
          />
        )}
        <div className="tvShow-details">
          {props.overview && (
            <p className="tvShow-overview">
              <strong>Overview:</strong> {props.overview}
            </p>
          )}
          {props.released && (
            <p className="tvShow-released">
              <strong>Release Date:</strong> {props.released}
            </p>
          )}
          {props.vote && props.vote !== 0  && (
            <p className="tvShow-released">
              <strong>Average Rating: {props.vote}</strong>
            </p>
          )}
        </div>
      </div>
    </Breakpoint>
  </>
);

export default tvShow;

import React from "react";
import { Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { BASE_POSTER_PATH } from "../../constants/Constants";
import "../../containers/TvShowDetails/TvShowDetails.scss";

function getDirector(episode) {
  return episode.crew.map((crewPersonel) => {
    if (crewPersonel.job === "Director") {
      return crewPersonel.name + ", ";
    }
    return '-';
  });
}

export const MyVerticallyCenteredModal = (props) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.episode.name}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {props.episode && (
          <div className="tvShow-details-poster-wrapper">
            <img
              className="tvShow-details-poster"
              src={`${BASE_POSTER_PATH}/w500${props.episode.still_path}`}
              alt="tvShow poster"
            />
            <div className="tvShow-details-info">
              <div>
                <strong>Director:</strong> {getDirector(props.episode)}
              </div>
              <div className="tvShow-details-info__overview">
                <strong>TvShow Overview:</strong> {props.episode.overview}
              </div>
            </div>
          </div>
        )}
      </Modal.Body>
      <Modal.Footer>
        <button type="button" class="btn btn-secondary" onClick={props.onHide}>
          Close
        </button>
      </Modal.Footer>
    </Modal>
  );
};

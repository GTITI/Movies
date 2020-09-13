import React from "react";
import "./Card.scss";

const Card = (props) => (
  <>
    <div
      className={props.className ||"card-component"}
      style={props.style || null}
      onClick={() =>
        props.goToTvShowDetails && props.goToTvShowDetails(props.tvShowId)
      }
    >
      {props.children}
    </div>
  </>
);

export default Card;

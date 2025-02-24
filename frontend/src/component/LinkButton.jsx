import React from "react";

const LinkButton = (props) => {
  return (
    <button className="btn btn-link text-decoration-none fs-5 ">
      {props.name}{" "}
      {props.name ? <i className="fa-solid fa-arrow-right-long"></i> : null}
    </button>
  );
};

export default LinkButton;

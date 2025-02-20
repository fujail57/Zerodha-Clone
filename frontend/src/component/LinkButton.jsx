import React from "react";

const LinkButton = (props) => {
  return (
    <button className="btn btn-link text-decoration-none fs-5 ">
      {props.name} <i class="fa-solid fa-arrow-right-long"></i>
    </button>
  );
};

export default LinkButton;

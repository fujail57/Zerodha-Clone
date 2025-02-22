import React from "react";

const SemplePage = (props) => {
  return (
    <div>
      <h2
        style={{ height: "400px", width: "100%" }}
        className="bg-primary text-light mt-5 text-center"
      >
        {props.name}
      </h2>
    </div>
  );
};

export default SemplePage;

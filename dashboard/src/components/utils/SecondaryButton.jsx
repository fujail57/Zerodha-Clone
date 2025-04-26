import React from "react";

const SecondaryButton = (props) => {
  return (
    <div>
      {/* <div className="btn btn-secondary">{props.btnName}</div> */}
      <button onClick={props.onClick} className="btn btn-secondary">
        {props.btnName}
      </button>
    </div>
  );
};

export default SecondaryButton;

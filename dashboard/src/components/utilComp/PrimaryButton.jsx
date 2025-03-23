import React from "react";

const PrimaryButton = (props) => {
  return (
    // <div className='btn btn-primary' >{props.btnName}</div>
    <button onClick={props.onClick} className="btn btn-primary">
      {props.btnName}
    </button>
  );
};

export default PrimaryButton;

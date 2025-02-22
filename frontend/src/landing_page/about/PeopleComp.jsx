import React, { useState } from "react";

const PeopleComp = (props) => {
  const [isToggled, setIsToggled] = useState(false);

  return (
    <div className="text-center col-4 my-5">
      <img
        style={{ width: "60%" }}
        className="rounded-circle "
        src={props.img}
        alt={props.alt}
      />
      <h2 className="my-2">{props.name}</h2>
      <p>{props.position}</p>
      <button onClick={() => setIsToggled(!isToggled)} className="btn ">
        Bio{" "}
        {isToggled ? (
          <i className="fa-solid fa-angle-up"></i>
        ) : (
          <i className="fa-solid fa-angle-down"></i>
        )}
      </button>
      <p className="text-start px-5 mt-3 ">
        {isToggled ? `${props.bio ? props.bio : ""}` : ""}
      </p>
    </div>
  );
};

export default PeopleComp;

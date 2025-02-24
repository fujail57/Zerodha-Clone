import React from "react";
import LinkButton from "../../component/LinkButton";

const RightImageSection = (props) => {
  return (
    <div className="row   align-items-center mx-5">
      <section
        style={{ fontSize: "1.15em", lineHeight: "1.6em" }}
        className="col p-5 "
      >
        <h2>{props.title}</h2>
        <p>{props.content}</p>
        <LinkButton name={props.btnName} />
      </section>
      <section className="col  ">
        <img src={props.img} alt={props.alt} />
      </section>
    </div>
  );
};

export default RightImageSection;

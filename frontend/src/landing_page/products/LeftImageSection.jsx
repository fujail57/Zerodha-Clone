import React from "react";
import LinkButton from "../../component/LinkButton";

const LeftImageSection = (props) => {
  return (
    <div className="row align-items-center mx-5 ">
      {/* Left section */}
      <section className="col">
        <img src={props.img} alt={props.alt} />
      </section>

      {/* Right section */}

      <section
        style={{ fontSize: "1.15em", lineHeight: "1.6em" }}
        className="col p-5"
      >
        <div>
          <h2>{props.title}</h2>
          <p>{props.content}</p>
        </div>
        <div>
          <LinkButton name={props.btnName1} />
          <LinkButton name={props.btnName2} />
        </div>
        <div className="mt-4">
          <img width={"30%"} src={props.img1} alt={props.alt1} />
          <img
            width={"30%"}
            className="mx-3"
            src={props.img2}
            alt={props.alt2}
          />
        </div>
      </section>
    </div>
  );
};

export default LeftImageSection;

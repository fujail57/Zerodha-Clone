import React from "react";
import PrimaryButtoon from "../../component/PrimaryButton";

const Universe = () => {
  return (
    <div className="container text-center text-muted">
      {/* Heading */}
      <section className="my-5 ">
        <h1>The Zerodha Universe</h1>
        <h4 className="fs-5 mt-4">
          Extend your trading and investment experience even further with our
          partner platforms
        </h4>
      </section>

      {/* Universe card */}
      <section className="row my-5">
        <UniverseComp
          img="images/zerodhaFundhouse.png"
          alt="zerodhaFundhouse"
          href="https://www.zerodhafundhouse.com/"
          content="Our asset management venture
            that is creating simple and transparent index
            funds to help you save for your goals."
        />
        <UniverseComp
          img="images/sensibullLogo.svg"
          alt="sensibullLogo"
          href="https://sensibull.com/"
          content="Options trading platform that lets you
            create strategies, analyze positions, and examine
            data points like open interest, FII/DII, and more."
        />
        <UniverseComp
          img="images/tijoriLogo.png"
          alt="zerodtijoriLogohaFundhouse"
          href="https://www.tijorifinance.com/ideas-dashboard/"
          content="Investment research platform
            that offers detailed insights on stocks,
            sectors, supply chains, and more."
        />
        <UniverseComp
          img="images/streakLogo.png"
          alt="streakLogo"
          href="https://www.streak.tech/home"
          content="Systematic trading platform
            that allows you to create and backtest
            strategies without coding."
        />
        <UniverseComp
          img="images/smallcaseLogo.png"
          alt="smallcaseLogo"
          href="https://smallcase.zerodha.com/"
          content="Thematic investing platform
             that helps you invest in diversified
            baskets of stocks on ETFs."
        />
        <UniverseComp
          img="images/dittoLogo.png"
          alt="dittoLogo"
          href="http://joinditto.in/"
          content="Personalized advice on life and health insurance. No spam
            and no mis-selling."
        />
      </section>

      {/* Signup Button */}
      <section className="mb-5">
        <PrimaryButtoon name="Sign up for free" />
      </section>
    </div>
  );
};

export default Universe;

// make a component like universe card to use it multiple time in ***UNIVERSE Component***
const UniverseComp = (props) => {
  return (
    <div className="col-4 text-center p-5">
      <a href={props.href} target="_blank">
        <img
          style={{ width: "50%" }}
          className="py-3"
          src={props.img}
          alt={props.alt}
        />
        <p className="px-3 text-muted">{props.content}</p>
      </a>
    </div>
  );
};

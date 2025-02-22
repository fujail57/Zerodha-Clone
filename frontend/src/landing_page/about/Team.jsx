import React from "react";
import PeopleComp from "./PeopleComp";

const Team = () => {
  return (
    <div className="container p-5">
      {/* top srction */}
      <section className="text-center">
        <h1>People</h1>
      </section>
      {/*  Left and right section */}
      <section className="row">
        <div className="col text-center p-5">
          <img
            className="rounded-circle my-4"
            width={"60%"}
            src="images/nithinKamath.jpg"
            alt="CEO Pic"
          />
          <h3>Nithin Kamath</h3>
          <p>Founder, CEO</p>
        </div>
        <div className="col p-5 fs-5 text-muted my-5">
          <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>
          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p>Playing basketball is his zen.</p>
          <p>Connect on Homepage / TradingQnA / Twitter</p>
        </div>
      </section>

      {/* team list */}
      <section className="row my-5">
        <PeopleComp
          img="images/nithinKamath.jpg"
          alt="Nikhil Kamath"
          name="Nikhil Kamath"
          position="Co-founder & CFO"
          bio="Nikhil is an astute and experienced investor, and he heads financial planning at Zerodha. An avid reader, he always appreciates a good game of chess."
        />
        <PeopleComp
          img="images/nithinKamath.jpg"
          alt="Dr. Kailash Nadh"
          name="Dr. Kailash Nadh"
          position="CTO"
          bio="Kailash has a PhD in Artificial Intelligence & Computational Linguistics, and is the brain behind all our technology and products. He has been a developer from his adolescence and continues to write code every day."
        />
        <PeopleComp
          img="images/nithinKamath.jpg"
          alt="Venu Madhav"
          name="Venu Madhav"
          position="COO"
          bio="Venu is the backbone of Zerodha taking care of operations and ensuring that we are compliant to rules and regulations. He has over a dozen certifications in financial markets and is also proficient in technical analysis. Workouts, cycling, and adventuring is what he does outside of Zerodha."
        />
        <PeopleComp
          img="images/nithinKamath.jpg"
          alt="Hanan Delvi"
          name="Hanan Delvi"
          position="CCO"
          bio="We take pride in the way we support our clients, and Hanan is responsible for this with his never ending flow of energy. He is the man behind many of our support initiatives that have helped us stay ahead of the game. A free thinker, Hanan can be seen posing as one in his free time."
        />
        <PeopleComp
          img="images/nithinKamath.jpg"
          alt="Seema Patil"
          name="Seema Patil"
          position="Director"
          bio="Seema who has lead the quality team since the beginning of Zerodha, is now a director. She is an extremely disciplined fitness enthusiast."
        />
        <PeopleComp
          img="images/nithinKamath.jpg"
          alt="Karthik Rangappa"
          name="Karthik Rangappa"
          position="Chief of Education"
          bio="Karthik Guru Rangappa single handledly wrote Varsity, Zerodha's massive educational program. He heads investor education initiatives at Zerodha and loves stock markets, classic rock, single malts, and photography."
        />
        <PeopleComp
          img="images/nithinKamath.jpg"
          alt="Austin Prakesh"
          name="Austin Prakesh"
          position="Director Strategy"
          bio="Austin is a successful self-made entrepreneur from Singapore. His area of specialty revolves around helping organisations including grow by optimizing revenue streams and creating growth strategies. He is a boxing enthusiast and loves collecting exquisite watches."
        />
      </section>
    </div>
  );
};

export default Team;

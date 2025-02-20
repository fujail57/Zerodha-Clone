import React from "react";
import LinkButton from "../../component/LinkButton";

const Awards = () => {
  return (
    <div className="container ">
      <div className="  row">
        <div className="col-6 mt-5 h-100  fs-5">
          <h2 className="my-5 fs-1 ">Trust with confidence</h2>
          <h3>Customer-first always</h3>
          <p className="text-muted">
            That's why 1.5+ crore customers trust Zerodha with ₹4.5+ lakh crores
            of equity investments and contribute to 15% of daily retail exchange
            volumes in India.
          </p>
          <h3 className="mt-5">No spam or gimmicks</h3>
          <p className="text-muted">
            No gimmicks, spam, "gamification", or annoying push notifications.
            High quality apps that you use at your pace, the way you like.
          </p>
          <h3 className="mt-5">The Zerodha universe</h3>
          <p className="text-muted">
            Not just an app, but a whole ecosystem. Our investments in 30+
            fintech startups offer you tailored services specific to your needs.
          </p>
          <h3 className="mt-5">Do better with money</h3>
          <p className="text-muted">
            With initiatives like Nudge and Kill Switch, we don't just
            facilitate transactions, but actively help you do better with your
            money.
          </p>
        </div>
        <div className="col-6 p-5">
          <img className="w-100" src="images/ecosystem.png" alt="Ecosystem" />
          <div className="mt-4 d-flex justify-content-center gap-3">
            
            <LinkButton name="Explore our products"/>
            <LinkButton name="Try Kite demo"/>
            
          </div>
        </div>
        <div className="w-50 mx-auto mt-3 ">
          <img src="images/pressLogos.png" alt="Press logo" />
        </div>
      </div>
    </div>
  );
};

export default Awards;

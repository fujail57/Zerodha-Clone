import React from "react";
import LeftImageSection from "./LeftImageSection";
import RightImageSection from "./RightImageSection";
import LinkButton from "../../component/LinkButton";

const ProductsLR = () => {
  return (
    <div className="container text-start my-5">
      <LeftImageSection
        img="images/kite.png"
        src="kiteImage"
        title="Kite"
        content="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        btnName1="Try demo"
        btnName2="Learn more"
        img1="images/googlePlayBadge.svg"
        alt1="googlePlayBadge"
        img2="images/appstoreBadge.svg"
        alt2="appstoreBadge"
      />
      <RightImageSection
        title="Console"
        content="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
        btnName="Learn more"
        img="images/console.png"
        alt="console Image"
      />

      <LeftImageSection
        img="images/coin.png"
        src="coinImage"
        title="Coin"
        content="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
        btnName1="Coin"
        img1="images/googlePlayBadge.svg"
        alt1="googlePlayBadge"
        img2="images/appstoreBadge.svg"
        alt2="appstoreBadge"
      />

      <RightImageSection
        title="Kite Connect API"
        content="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
        btnName="Kite connect"
        img="images/kiteconnect.png"
        alt="kiteConnect Image"
      />

      <LeftImageSection
        img="images/varsity.png"
        src="varsity"
        title="Varsity mobile"
        content="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
        img1="images/googlePlayBadge.svg"
        alt1="googlePlayBadge"
        img2="images/appstoreBadge.svg"
        alt2="appstoreBadge"
      />
    </div>
  );
};

export default ProductsLR;

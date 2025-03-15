import React from "react";
import BuyActionWindow from "./BuyActionWindow";

const Apps = () => {
  return (
    <div>
      Apps
      {/* This is only for testing purpose, later on it will be removed from Apps component */}
      <div className="position-fixed top-5 w-50 ">
        <BuyActionWindow />
      </div>
    </div>
  );
};

export default Apps;

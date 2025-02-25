import React, { useState } from "react";
import Equity from "./Equity";
import Currency from "./Currency";
import Commodity from "./Commodity";

const Brokerage = () => {
  const [SelectedComponent, setSelectedComponent] = useState(() => Equity);
  const brokerageComponent = {
    equity: Equity,
    currency: Currency,
    commodity: Commodity,
  };
  return (
    <div className="container px-5">
      <div className="d-flex gap-4">
        <h2
          style={{ cursor: "pointer" }}
          onClick={() => setSelectedComponent(() => brokerageComponent.equity)}
          className={
            SelectedComponent === brokerageComponent.equity && "text-primary"
          }
        >
          Equity
        </h2>
        <h2
          style={{ cursor: "pointer" }}
          onClick={() =>
            setSelectedComponent(() => brokerageComponent.currency)
          }
          className={
            SelectedComponent === brokerageComponent.currency && "text-primary"
          }
        >
          Currency
        </h2>
        <h2
          style={{ cursor: "pointer" }}
          onClick={() =>
            setSelectedComponent(() => brokerageComponent.commodity)
          }
          className={
            SelectedComponent === brokerageComponent.commodity && "text-primary"
          }
        >
          Commodity
        </h2>
      </div>
      <div style={{ lineHeight: "1.9em" }} >
        {SelectedComponent && <SelectedComponent />}
      </div>
      <div className="text-center p-4">
        <h3>Calculate your costs upfront using our brokerage calculator</h3>
      </div>
    </div>
  );
};

export default Brokerage;

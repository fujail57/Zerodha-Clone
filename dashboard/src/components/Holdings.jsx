import React, { useEffect, useState } from "react";
// import { holdings } from "../data/data";
import { axiosInstance } from "./utils/axiosInstance";

const Holdings = () => {
  // fetch holdings data from backend api
  const [allHoldings, setAllHoldings] = useState([]);

  useEffect(() => {
    axiosInstance
      .get("/allholdings")
      .then((res) => {
        console.log(res.data);
        setAllHoldings(res.data);
      })
      .catch((err) => {
        console.error("Error fetching holdings:", err);
      });
  }, []);

  return (
    <div className="m-5 ">
      {/* main heading */}
      <section className="my-5">
        <h2>Holdings ({allHoldings.length})</h2>
      </section>
      {/* Holdings list */}
      <section className="table">
        <table className="table">
          <thead>
            <tr className="table-light">
              <th>Instrument</th>
              <th>Qty.</th>
              <th>Avg. cost</th>
              <th>LTP</th>
              <th>Cur. val</th>
              <th>P&L</th>
              <th>Net chg.</th>
              <th>Day chg.</th>
            </tr>
          </thead>
          <tbody>
            {allHoldings.map((stock, index) => {
              const curValue = stock.price * stock.qty;
              const isProfit = curValue - stock.avg * stock.qty >= 0.0;
              const profClass = isProfit ? "profit" : "loss";
              const dayClass = stock.isLoss ? "loss" : "profit";

              return (
                <tr key={index}>
                  <td>{stock.name}</td>
                  <td>{stock.qty}</td>
                  <td>{stock.avg.toFixed(2)}</td>
                  <td>{stock.price.toFixed(2)}</td>
                  <td>{curValue.toFixed(2)}</td>
                  <td className={profClass}>
                    {(curValue - stock.avg * stock.qty).toFixed(2)}
                  </td>
                  <td className={profClass}>{stock.net}</td>
                  <td className={dayClass}>{stock.day}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </section>

      {/* total  sections */}
      <section className="row my-5">
        <div className="col">
          <h2>
            29,875.<span style={{ fontSize: "15px" }}>55</span>
          </h2>
          <p>Total Investment</p>
        </div>
        <div className="col">
          <h2>
            31,428.<span style={{ fontSize: "15px" }}>95</span>
          </h2>
          <p>Current value</p>
        </div>
      </section>
    </div>
  );
};

export default Holdings;

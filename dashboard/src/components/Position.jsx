import React, { useEffect, useState } from "react";
import axios from "axios";
import { dashboard_URL } from "./utilComp/dashboard_URL";
// import { positions } from "../data/data";

const Position = () => {
  // fetch positions data from backend api
  const [allPositions, setAllPositions] = useState([]);

  useEffect(() => {
    axios
      .get(`${dashboard_URL}/allPositions`)
      .then((res) => {
        console.log(res.data);
        setAllPositions(res.data);
      })
      .catch((err) => {
        console.error("Error fetching holdings:", err);
      });
  }, []);

  return (
    <div className="m-5">
      <section className="my-5">
        <h2>Positions (5)</h2>
      </section>
      <section>
        <table className="table table-striped">
          <tr>
            <th>Product</th>
            <th>Instrument </th>
            <th>QTY.</th>
            <th>AVG.</th>
            <th>LTP </th>
            <th>P&L </th>
            <th>Chg.</th>
          </tr>
          {/* logic */}

          {Array.isArray(allPositions) &&
            allPositions.map((stock, index) => {
              const curValue = stock.price * stock.qty;
              const isProfit = curValue - stock.avg * stock.qty >= 0.0;
              const profClass = isProfit ? "profit" : "loss";
              const dayClass = stock.isLoss ? "loss" : "profit";

              return (
                <tr>
                  <td>{stock.product}</td>
                  <td>{stock.name}</td>
                  <td>{stock.qty}</td>
                  <td>{stock.avg.toFixed(2)}</td>
                  <td>{stock.price.toFixed(2)}</td>
                  <td className={profClass}>
                    {(curValue - stock.avg * stock.qty).toFixed(2)}
                  </td>
                  <td className={dayClass}>{stock.day}</td>
                </tr>
              );
            })}
        </table>
      </section>
    </div>
  );
};

export default Position;

//     product: "CNC",
//     name: "EVEREADY",
//     qty: 2,
//     avg: 316.27,
//     price: 312.35,
//     net: "+0.58%",
//     day: "-1.24%",
//     isLoss: true,

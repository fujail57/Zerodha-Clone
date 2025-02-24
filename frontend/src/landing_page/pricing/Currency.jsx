import React from "react";

const Currency = () => {
  return (
    <div className="container mt-4">
      <div className="table-responsive">
        <table className="table table-bordered">
          <thead className="table-light">
            <tr>
              <th></th>
              <th>Currency Futures</th>
              <th>Currency Options</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <strong>Brokerage</strong>
              </td>
              <td>0.03% or ₹20/executed order whichever is lower</td>
              <td>₹20/executed order</td>
            </tr>
            <tr>
              <td>
                <strong>STT/CTT</strong>
              </td>
              <td>No STT</td>
              <td>No STT</td>
            </tr>
            <tr>
              <td>
                <strong>Transaction charges</strong>
              </td>
              <td>
                NSE: 0.00035% <br />
                BSE: 0.00045%
              </td>
              <td>
                NSE: 0.0311% <br />
                BSE: 0.001%
              </td>
            </tr>
            <tr>
              <td>
                <strong>GST</strong>
              </td>
              <td>18% on (brokerage + SEBI charges + transaction charges)</td>
              <td>18% on (brokerage + SEBI charges + transaction charges)</td>
            </tr>
            <tr>
              <td>
                <strong>SEBI charges</strong>
              </td>
              <td>₹10 / crore</td>
              <td>₹10 / crore</td>
            </tr>
            <tr>
              <td>
                <strong>Stamp charges</strong>
              </td>
              <td>0.0001% or ₹10 / crore on buy side</td>
              <td>0.0001% or ₹10 / crore on buy side</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Currency;

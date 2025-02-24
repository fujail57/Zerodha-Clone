import React from "react";

const Commodity = () => {
  return (
    <div className="container mt-4">
      <div className="table-responsive">
        <table className="table table-bordered">
          <thead className="table-light">
            <tr>
              <th></th>
              <th>Commodity Futures</th>
              <th>Commodity Options</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <strong>Brokerage</strong>
              </td>
              <td>0.03% or Rs. 20/executed order whichever is lower</td>
              <td>₹20/executed order</td>
            </tr>
            <tr>
              <td>
                <strong>STT/CTT</strong>
              </td>
              <td>0.01% on sell side (Non-Agri)</td>
              <td>0.05% on sell side</td>
            </tr>
            <tr>
              <td>
                <strong>Transaction charges</strong>
              </td>
              <td>
                MCX: 0.0021% <br />
                NSE: 0.0001%
              </td>
              <td>
                MCX: 0.0418% <br />
                NSE: 0.001%
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
              <td>
                <strong>Agri:</strong> ₹1 / crore <br />
                <strong>Non-agri:</strong> ₹10 / crore
              </td>
              <td>₹10 / crore</td>
            </tr>
            <tr>
              <td>
                <strong>Stamp charges</strong>
              </td>
              <td>0.002% or ₹200 / crore on buy side</td>
              <td>0.003% or ₹300 / crore on buy side</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Commodity;

import React, { useContext, useState } from "react";
import { watchlist } from "../data/data";
import { Tooltip, Grow } from "@mui/material";
import {
  BarChartOutlined,
  KeyboardArrowDown,
  KeyboardArrowUp,
  MoreHoriz,
  Spa,
} from "@mui/icons-material";
import { useGeneralContext } from "./GeneralContext";

// Main Function
const WatchList = () => {
  return (
    <div>
      {/* top sections */}
      <section className="bg-white">
        <div className="d-flex justify-content-between align-items-center">
          <input
            style={{ border: "none" }}
            type="text"
            name="search"
            placeholder="Search eg: infy, bse, nifty fut weekly, gold mcx"
            className="w-75 p-2"
          />
          <span className="">{watchlist.length} / 50</span>
        </div>
      </section>

      {/* lists */}
      <section>
        <ul style={{ listStyle: "none" }}>
          {watchlist.map((stock, index) => {
            return <WatchListItem stock={stock} key={index} />;
          })}
        </ul>
      </section>
    </div>
  );
};

export default WatchList;

//  ///
// component functions

const WatchListItem = ({ stock, index }) => {
  const [showWatchListActions, setShowWatchListActions] = useState(false);

  const handleMouseEnter = (e) => {
    setShowWatchListActions(true);
  };

  const handleMouseLeave = (e) => {
    setShowWatchListActions(false);
  };

  return (
    <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className="d-flex justify-content-between">
        <div className="">
          <p className={stock.isDown ? "down" : "up"}>{stock.name}</p>
        </div>
        <div className="d-flex gap-1">
          <span>{stock.percent}</span>
          {stock.isDown ? (
            <KeyboardArrowDown className="down" />
          ) : (
            <KeyboardArrowUp className="up" />
          )}
          <span>{stock.price}</span>
        </div>
      </div>
      {showWatchListActions && <WatchListActions uid={stock.name} />}
    </li>
  );
};

//  watch list action function

const WatchListActions = ({ uid }) => {
  // context
  const { isBuyWindowOpen, handleOpenBuyWindow } = useGeneralContext();
  // return
  return (
    <span className="">
      <span>
        <Tooltip title="Buy (B)" placement="top" arrow>
          <button onClick={() => handleOpenBuyWindow(uid)} className="buy">
            Buy
          </button>
        </Tooltip>
        <Tooltip title="Sell (S)" placement="top" arrow>
          <button className="sell">Sell</button>
        </Tooltip>
        <Tooltip title="Analytics (A)" placement="top" arrow>
          <button className="action">
            <BarChartOutlined className="icon" />
          </button>
        </Tooltip>
        <Tooltip title="More" placement="top" arrow>
          <button className="action">
            <MoreHoriz className="icon" />
          </button>
        </Tooltip>
      </span>
    </span>
  );
};

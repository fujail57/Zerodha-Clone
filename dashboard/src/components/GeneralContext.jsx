import React, { createContext, useContext, useState } from "react";
import BuyActionWindow from "./BuyActionWindow";
import SellActionWindow from "./sellActionWindow";

//  create context
const GeneralContext = createContext(null);

//  create hook to use context
export const useGeneralContext = () => useContext(GeneralContext);

//  Main Functions :::::::::
export const GeneralContextProvider = (props) => {
  // useState
  const [isBuyWindowOpen, setIsBuyWindowOpen] = useState(false);
  const [isSellWindowOpen, setIsSellWindowOpen] = useState(false);
  const [selectedStockUID, setSelectedStockUID] = useState("");

  //  handler
  const handleOpenBuyWindow = (uid) => {
    setIsBuyWindowOpen(true);
    setSelectedStockUID(uid);
  };
  const handleCloseBuyWindow = () => {
    setIsBuyWindowOpen(false);
    setSelectedStockUID("");
  };

  // sell handler
  const handleOpenSellWindow = (uid) => {
    setIsSellWindowOpen(true);
    setSelectedStockUID(uid);
  };
  const handleCloseSellWindow = () => {
    setIsSellWindowOpen(false);
    setSelectedStockUID("");
  };

  //  return
  return (
    <GeneralContext.Provider
      value={{
        isBuyWindowOpen,
        setIsBuyWindowOpen,
        handleOpenBuyWindow,
        handleCloseBuyWindow,
        selectedStockUID,
        setSelectedStockUID,
        handleOpenSellWindow,
        handleCloseSellWindow,
      }}
    >
      {props.children}
      <div className="buyActionWindow">
        <div>
          {isBuyWindowOpen && <BuyActionWindow uid={selectedStockUID} />}
        </div>
        <div>
          {isSellWindowOpen && <SellActionWindow uid={selectedStockUID} />}
        </div>
      </div>
    </GeneralContext.Provider>
  );
};

//  context provided in Home.jsx

// export default useGeneralContext;

// :::
// :::
// :::

// import React, { createContext, useState } from "react";

// import BuyActionWindow from "./BuyActionWindow";

// // create context
// const GeneralContext = createContext({
//   openBuyWindow: (uid) => {},
//   closeBuyWindow: () => {},
// });

// export const GeneralContextProvider = (props) => {
//   const [isBuyWindowOpen, setIsBuyWindowOpen] = useState(false);
//   const [selectedStockUID, setSelectedStockUID] = useState("");

//   const handleOpenBuyWindow = (uid) => {
//     setIsBuyWindowOpen(true);
//     setSelectedStockUID(uid);
//   };

//   const handleCloseBuyWindow = () => {
//     setIsBuyWindowOpen(false);
//     setSelectedStockUID("");
//   };

//   return (
//     <GeneralContext.Provider
//       value={{
//         openBuyWindow: handleOpenBuyWindow,
//         closeBuyWindow: handleCloseBuyWindow,
//       }}
//     >
//       {props.children}
//       {isBuyWindowOpen && <BuyActionWindow uid={selectedStockUID} />}
//     </GeneralContext.Provider>
//   );
// };

// export default GeneralContext;

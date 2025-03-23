import React, { createContext, useContext, useState } from "react";
import BuyActionWindow from "./BuyActionWindow";

//  create context
const GeneralContext = createContext(null);

//  create hook to use context
export const useGeneralContext = () => useContext(GeneralContext);

//  Main Functions :::::::::
export const GeneralContextProvider = (props) => {
  // useState
  const [isBuyWindowOpen, setIsBuyWindowOpen] = useState(false);
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
      }}
    >
      {props.children}
      <div className="buyActionWindow">
        {isBuyWindowOpen && <BuyActionWindow uid={selectedStockUID} />}
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

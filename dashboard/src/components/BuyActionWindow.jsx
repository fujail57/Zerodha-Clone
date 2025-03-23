import { Box, TextField } from "@mui/material";
import React, { useState } from "react";
import PrimaryButton from "./utilComp/PrimaryButton";
import SecondaryButton from "./utilComp/SecondaryButton";
import { useGeneralContext } from "./GeneralContext";
import axios, { Axios } from "axios";

// connecting api from backend

// Main function
const BuyActionWindow = ({ uid }) => {
  // useGeneralContext
  const { isBuyWindowOpen, handleCloseBuyWindow } = useGeneralContext();

  //  fetch data from backend
  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0.0);

  // connecting api from backend
  const handleBuyClick = () => {
    axios.post("http://localhost:3002/neworder", {
      name: uid,
      qty: stockQuantity,
      price: stockPrice,
      mode: "BUY",
    });
    handleCloseBuyWindow();
  };

  return (
    <div>
      <section className="card p-3">
        <span className="bg-dark p-2 rounded text-center text-white">
          {uid}
        </span>
        <div className="mt-5">
          <Box className="d-flex gap-4">
            <TextField
              name="qty"
              type="number"
              id="qty"
              label="Qty."
              variant="outlined"
              onChange={(e) => setStockQuantity(e.target.value)}
              value={stockQuantity}
            />

            <TextField
              id="price"
              name="price"
              label="Price"
              type="number"
              slotProps={{
                inputLabel: {
                  shrink: true,
                },
              }}
              onChange={(e) => setStockPrice(e.target.value)}
              value={stockPrice}
            />
          </Box>
        </div>
        {/* Buttons */}
        <div className="d-flex gap-3 my-5">
          <span>Margin required ₹140.65</span>
          <PrimaryButton onClick={handleBuyClick} btnName="Buy" />
          <SecondaryButton
            onClick={() => handleCloseBuyWindow()}
            btnName="Cancel"
          />
        </div>
      </section>
    </div>
  );
};

export default BuyActionWindow;

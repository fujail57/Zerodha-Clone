import { Box, TextField } from "@mui/material";
import React from "react";
import PrimaryButton from "./utilComp/PrimaryButton";
import SecondaryButton from "./utilComp/SecondaryButton";
import { useGeneralContext } from "./GeneralContext";

// Main function
const BuyActionWindow = () => {
  // useGeneralContext
  const { isBuyWindowOpen, handleCloseBuyWindow } = useGeneralContext();
  return (
    <div>
      <section className="card p-3">
        <div className="mt-5">
          <Box className="d-flex gap-4">
            <TextField id="qty" label="Qty." variant="outlined" />
            <TextField
              id="price"
              label="Price"
              type="number"
              slotProps={{
                inputLabel: {
                  shrink: true,
                },
              }}
            />
          </Box>
        </div>
        {/* Buttons */}
        <div className="d-flex gap-3 my-5">
          <span>Margin required ₹140.65</span>
          <PrimaryButton btnName="Buy" />
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

import { Box, TextField } from "@mui/material";
import React from "react";
import PrimaryButton from "./utilComp/PrimaryButton";
import SecondaryButton from "./utilComp/SecondaryButton";

// Main function
const BuyActionWindow = () => {
  return (
    <div>
      <h2>Randor it in Apps.jsx for testing</h2>
      <section className="card w-50 ">
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
          <SecondaryButton btnName="Cancel" />
        </div>
      </section>
    </div>
  );
};

export default BuyActionWindow;

// Components

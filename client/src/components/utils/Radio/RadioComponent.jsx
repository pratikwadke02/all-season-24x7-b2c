import React, { useState } from "react";
import {
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  Typography,
} from "@mui/material";
import { theme } from "../../../theme";

const RadioComponent = (props) => {
  return (
    <FormControl sx={{ m: 1, width: 300 }}>
      <FormLabel id="demo-radio-buttons-group-label">
        <Typography
          variant="h5"
          sx={{
            color: theme.palette.text.primary,
            fontWeight: theme.typography.fontWeightBold,
          }}
        >
          {props.formLabel}
        </Typography>
      </FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="none"
        name="radio-buttons-group"
      >
        <FormControlLabel
          value={props.optionA}
          control={<Radio />}
          label={<Typography variant="h5">{props.optionA}</Typography>}
        />
        <FormControlLabel
          value={props.optionB}
          control={<Radio />}
          label={<Typography variant="h5">{props.optionB}</Typography>}
        />
        <FormControlLabel
          value={PaymentResponse.optionC}
          control={<Radio />}
          label={<Typography variant="h5">{props.optionC}</Typography>}
        />
      </RadioGroup>
    </FormControl>
  );
};

export default RadioComponent;

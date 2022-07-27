import {
  Container,
  Box,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormLabel,
  FormControl,
  Button,
  Typography,
  TextField,
  Select,
  InputLabel,
  MenuItem,
} from "@mui/material";
import React, { useState } from "react";
import { theme } from "../../../theme";
import SelectComponent from "../../utils/Dropdown/SelectComponent";
import MultilineTextfield from "../../utils/Textfield/MultilineTextfield";
import TextfieldComponent from "../../utils/Textfield/TextfieldComponent";

const Info = () => {
  const items = [
    {
      value: "en",
      name: "English",
    },
    { 
      value: "es", 
      name: "Spanish" 
    },
    { 
      value: "fr", 
      name: "French" 
    },
  ];
  const [language, setLanguage] = useState("en");

  const handleChange = (event) => {
    setLanguage(event.target.value);
  };

  return (
    <>
      <Container sx={{ display: "flex", flexDirection: "column", maxWidth:{xs:'100%', lg:'inherit'} }}>
        <Box sx={{ display: "flex", width:'100%' }}>
        <MultilineTextfield label='Bio' />
        </Box>
        <Box sx={{ display: "flex", flexDirection: "row", mt: 2, mb: 2 }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              mt: 2,
              mb: 2,
              mr: 2,
              width: "100%",
            }}
          >
            <TextfieldComponent label="Birth Date" />
            <Box sx={{ p: 2 }} />
            <TextfieldComponent label="Website" />
            <Box sx={{ p: 2 }} />
            <SelectComponent label="Languages" items={items} />
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              mt: 2,
              mb: 1,
              ml: 2,
              width: "100%",
            }}
          >
            <TextfieldComponent label="Phone" />
            <Box sx={{ p: 2 }} />
            <TextfieldComponent label="Country" />
            <Box sx={{ p: 2 }} />
            <FormControl sx={{}}>
              <FormLabel
                id="demo-row-radio-buttons-group-label"
                color="secondary"
                sx={{
                  fontSize: theme.typography.h5,
                  fontWeight: theme.typography.fontWeightMedium,
                }}
              >
                Gender
              </FormLabel>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
              >
                <FormControlLabel
                  value="female"
                  control={<Radio color="secondary" />}
                  label="Female"
                />
                <FormControlLabel
                  value="male"
                  control={<Radio color="secondary" />}
                  label="Male"
                />
                <FormControlLabel
                  value="other"
                  control={<Radio color="secondary" />}
                  label="Other"
                />
              </RadioGroup>
            </FormControl>
          </Box>
        </Box>
        <Box sx={{ mt: 1 }}>
          <Button
            variant="contained"
            color="info"
            sx={{
              width: "100%",
              maxWidth: "200px",
              backgroundColor: theme.palette.secondary.main,
            }}
          >
            <Typography variant="h5" sx={{fontWeight: theme.typography.fontWeightBold}}>SAVE CHANGES</Typography>
          </Button>
          <Button
            color="inherit"
            variant="outlined"
            sx={{
              ml: 2,
              color: theme.palette.cancel.main,
              border: "1px solid lightgrey",
            }}
          >
            <Typography variant="h5" sx={{fontWeight: theme.typography.fontWeightBold}}>CANCEL</Typography>
          </Button>
        </Box>
      </Container>
    </>
  );
};

export default Info;

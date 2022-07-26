import { Box, Typography } from "@mui/material";
import React from "react";
import { Button } from "@mui/material";
import CheckboxComponent from "../utils/Checkbox/CheckboxComponent";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import RadioComponent from "../utils/Radio/RadioComponent";
import SearchWithIcon from "../utils/Search/SearchWithIcon";
import { theme } from "../../theme";

const HomeSidebar = () => {
  const searchIcon = <SearchOutlinedIcon />;                              //Icons for the search bar
  const locationIcon = <LocationOnIcon />;                                          

  return (
    <>
      <Box flex={3} p={1} sx={{ display: { xs: "none", sm: "block" } }}>
        <Box sx={{ p: 1 }}>
          <SearchWithIcon                                        //Search bar with icons and label components
            label="Search by title"
            id="search_by_title"
            icon={searchIcon}
            position="start"
            adornment="true"
          />
        </Box>
        <Box sx={{ p: 1 }}>
          <SearchWithIcon
            label="Location"
            id="location"
            icon={locationIcon}
            position="end"
            adornment="endAdornment"
          />
        </Box>
        <Box sx={{ p: 1 }}>
          <Button
            variant="contained"
            color="info"
            sx={{
              minWidth: 320,
              width: "100%",
              color: "#ffffff",
              backgroundColor: "#2196f3",
            }}
          >
            <Typography variant="h5" sx={{fontWeight:theme.typogra}}>Search</Typography>
          </Button>
        </Box>
        <Box sx={{ p: 1 }}>
          <RadioComponent
            formLabel="Status"
            optionA="Label"
            optionB="Open"
            optionC="Archived"
          />
        </Box>
        <Box sx={{ p: 1 }}>
          <CheckboxComponent
            formLabel="Contract Type"
            optionA="Freelance"
            optionB="Full-time"
            optionC="Internship"
            optionD="Part-time"
          />
        </Box>
        <Box sx={{ p: 1 }}>
          <CheckboxComponent
            formLabel="Level"
            optionA="Any"
            optionB="Director"
            optionC="Entry-level"
            optionD="Lead"
          />
        </Box>
      </Box>
    </>
  );
};

export default HomeSidebar;

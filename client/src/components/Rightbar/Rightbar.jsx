import React from "react";
import { Button, Typography, Box, Toolbar, IconButton } from "@mui/material";
import CheckboxComponent from "../utils/Checkbox/CheckboxComponent";
import RadioComponent from "../utils/Radio/RadioComponent";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { theme } from "../../theme";
import SearchWithIcon from "../utils/Search/SearchWithIcon";
import CloseIcon from "@mui/icons-material/Close";

const Rightbar = ({ mobileOpen, handleDrawerToggle }) => {
  const searchIcon = <SearchOutlinedIcon />;
  const locationIcon = <LocationOnIcon />;

  return (
    <>
      <Toolbar />
      <Box
        flex={3}
        sx={{
          ml: 1,
          backgroundColor: theme.palette.background.default,
          height: "100%",
          maxWidth: 300,
          zIndex: 2,
          backdropFilter: "blur(3px)",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
        <Box sx={{ p: 1, width: "100%" }}>
          <Box sx={{ mt: 3, mb: 2 }}>
            <IconButton onClick={handleDrawerToggle}>
              <CloseIcon color="primary" fontSize="large" sx={{ mr: 1 }} />
              <Typography variant="h5" color="primary">
                CLOSE
              </Typography>
            </IconButton>
          </Box>
          <SearchWithIcon
            label="Search by title"
            id="search_by_title"
            icon={searchIcon}
            position="start"
            adornment="true"
          />
        </Box>
        <Box sx={{ p: 1, width: "100%" }}>
          <SearchWithIcon
            label="Location"
            id="location"
            icon={locationIcon}
            position="end"
            adornment="endAdornment"
          />
        </Box>
        <Box sx={{ p: 1, width: "100%" }}>
          <Button
            variant="contained"
            color="info"
            sx={{
              width: "100%",
              minHeight: 42,
              color: "#ffffff",
              backgroundColor: "#2196f3",
            }}
          >
            <Typography variant="h5">Search</Typography>
          </Button>
        </Box>
        <Box sx={{ p: 1, ml: 1 }}>
          <RadioComponent
            formLabel="Status"
            optionA="Label"
            optionB="Open"
            optionC="Archived"
          />
        </Box>
        <Box sx={{ p: 1, ml: 1 }}>
          <CheckboxComponent
            formLabel="Contract Type"
            optionA="Freelance"
            optionB="Full-time"
            optionC="Internship"
            optionD="Part-time"
          />
        </Box>
        <Box sx={{ p: 1, ml: 1 }}>
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

export default Rightbar;

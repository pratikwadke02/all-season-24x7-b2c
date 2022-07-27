import { Box, Container, Paper, Typography } from "@mui/material";
import React from "react";
import { theme } from "../../theme";
import Date from "../utils/Date/Date";
import SelectComponent from "../utils/Dropdown/SelectComponent";

const BookmarkHeader = () => {
  const jobProfileItems = [
    { name: "Software Engineer", value: "software-engineer" },
    { name: "Software Engineer II", value: "software-engineer-ii" },
    { name: "Software Engineer III", value: "software-engineer-iii" },
  ];
  return (
    <>
      <Container sx={{ backgroundColor: theme.palette.background.default, width:'100%', boxShadow: 1, borderRadius:'4px', mt:4, p:3, mb:2}}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              mb: 1,
            }}
          >
            <Typography
              variant="h1"
              sx={{ fontWeight: theme.typography.fontWeightBold }}
            >
              Search Bookmark
            </Typography>
          </Box>
          <Box
            sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}
          >
            <Box sx={{width:'100%'}}>
            <SelectComponent label="Job Profile" items={jobProfileItems} />
            </Box>
            <Box sx={{p:1.25}}/>
            <Box sx={{width:'100%'}}>
            <Date label="Select Date" />
            </Box>
            <Box sx={{p:1.25}}/>
            <Box sx={{width:'100%'}}>
            <SelectComponent label="Select Status" items={jobProfileItems} />
            </Box>
          </Box>
        </Box>
      </Container>
    </>
  );
}

export default BookmarkHeader
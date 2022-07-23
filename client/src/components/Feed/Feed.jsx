import { Box } from "@mui/system";
import React from "react";
import Card from "../utils/Card/Card";
import PaginationComponent from "../utils/Pagination/PaginationComponent";

const Feed = () => {
  return (
    <>
      <Box                       // This is the main container for the feed component
        flex={7}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          position: "relative",
          minHeight: "75vh",
          paddingBottom: "60px",
        }}
      >
        <div>                      
          <Card />                        
        </div>
        <div>
          <Card />
        </div>
        <div>
          <Card />
        </div>
        <Box
          flex={1}
          sx={{ alignItems: "center", position: "absolute", bottom: 0 }}
        >
          <PaginationComponent />                  
        </Box>
      </Box>
    </>
  );
};

export default Feed;

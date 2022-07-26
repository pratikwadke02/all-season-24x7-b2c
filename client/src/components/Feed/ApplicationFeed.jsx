import { Box } from "@mui/system";
import React from "react";
import ApplicationCard from "../utils/Card/ApplicationCard";
import PaginationComponent from "../utils/Pagination/PaginationComponent";

const Feed = () => {
  return (
    <>
      <Box                       // This is the main container for the feed component
        // flex={7}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          position: "relative",
          minHeight: "75vh",
          paddingBottom: "60px",
        }}
      >
        <Box sx={{display:'flex', flexDirection:{xs:'column', sm:'row'}, justifyContent:'space-between', alignItems:'center'}}>
            <ApplicationCard />
            <Box sx={{m:2}} />
            <ApplicationCard />
        </Box>
        <Box sx={{display:'flex', flexDirection:{xs:'column', sm:'row'}, justifyContent:'space-between', alignItems:'center'}}>
            <ApplicationCard />
            <Box sx={{m:2}} />
            <ApplicationCard />
        </Box>
        <Box sx={{display:'flex', flexDirection:{xs:'column', sm:'row'}, justifyContent:'space-between', alignItems:'center'}}>
            <ApplicationCard />
            <Box sx={{m:2}} />
            <ApplicationCard />
        </Box>
        <Box
          sx={{margin:'auto', alignItems: "center", position: "relative", bottom: 0 }}
        >
          <PaginationComponent />                  
        </Box>
      </Box>
    </>
  );
};

export default Feed;

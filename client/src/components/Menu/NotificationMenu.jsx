import { Divider, Typography,Box, Avatar, Button } from "@mui/material";
import React from "react";
import {images} from '../../constants/index';

const NotificationMenu = () => {
  return (
    <>
      <Box>
        <Box sx={{ display: "flex", justifyContent: "space-between" ,alignItems:'center', p:1}}>
          <Typography variant="h6" color="inherit">
            Notifications
          </Typography>
          <Typography
            variant="h7"
            color="inherit"
            sx={{  
              color: "#9155fd",
              backgroundColor: "#f2ebff",
              width: "51px",
              height: "20px",
              borderRadius: "40px",
              textAlign: "center",
            }}
          >
            8 new
          </Typography>
        </Box>
        <Divider />
        <Box sx={{p:1, display: "flex", justifyContent: "space-between" }}>
          <Box sx={{display:'flex', alignItems:'center'}}>
            <Avatar alt="John Doe" src={images.Userpic} />
            <Box
              sx={{
                m: 1,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "flex-start",
              }}
            >
              <Typography variant="h5" noWrap>
                Congratulation flora!
              </Typography>
              <Typography variant="caption" noWrap>
                Won the monthly best seller badge
              </Typography>
            </Box>
          </Box>
          <Box sx={{display:'flex', alignItems:'center'}}>
            <Typography variant="caption" color="inherit">
              Today
            </Typography>
          </Box>
        </Box>
        <Divider />
        <Box sx={{p:1, display: "flex", justifyContent: "space-between" }}>
          <Box sx={{display:'flex', alignItems:'center'}}>
            <Avatar alt="John Doe" src={images.Userpic} />
            <Box
              sx={{
                m: 1,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "flex-start",
              }}
            >
              <Typography variant="h6" noWrap>
              New user registered
              </Typography>
              <Typography variant="caption" noWrap>
                5 hours ago
              </Typography>
            </Box>
          </Box>
          <Box sx={{display:'flex', alignItems:'center'}}>
            <Typography variant="caption" color="inherit">
              Yesterday
            </Typography>
          </Box>
        </Box>
        <Divider />
        <Box sx={{p:1, display: "flex", justifyContent: "space-between" }}>
          <Box sx={{display:'flex', alignItems:'center'}}>
            <Avatar alt="John Doe" src={images.Userpic} />
            <Box
              sx={{
                m: 1,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "flex-start",
              }}
            >
              <Typography variant="h6" noWrap>
                New message received
              </Typography>
              <Typography variant="caption" noWrap>
                You have 10 unread messages
              </Typography>
            </Box>
          </Box>
          <Box sx={{display:'flex', alignItems:'center'}}>
            <Typography variant="caption" color="inherit">
              11 Aug
            </Typography>
          </Box>
        </Box>
        <Divider />
        <Box sx={{p:1 }}>
            <Button variant="contained" sx={{backgroundColor:"#9155fd", color:'#fff',width:'100%'}}>
                <Typography variant="h6" color="inherit">
                CONNECT NOW
                </Typography>
            </Button>
        </Box>    
      </Box>
    </>
  );
};

export default NotificationMenu;

import React from "react";
import { styled } from "@mui/material/styles";
import Badge from "@mui/material/Badge";
import { Divider } from "@mui/material";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import { MenuItem, IconButton, Typography, Avatar, Box } from "@mui/material";
import { images } from "../../constants";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}));

const ProfileMenu = () => {
  return (
    <>
      <MenuItem>
        <IconButton>
          <StyledBadge
            overlap="circular"
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            variant="dot"
          >
            <Avatar alt="John Doe" src={images.Userpic} />
          </StyledBadge>
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
              John Doe
            </Typography>
            <Typography variant="caption" noWrap>
              Admin
            </Typography>
          </Box>
        </IconButton>
      </MenuItem>
      <Divider />
      <MenuItem>
        <IconButton>
          <PermIdentityOutlinedIcon fontSize="large" />
          <Typography variant="h6" noWrap sx={{pl:2}}>
            Profile
          </Typography>
        </IconButton>
      </MenuItem>
      <MenuItem>
        <IconButton>
          <HelpOutlineOutlinedIcon fontSize="large" />
          <Typography variant="h6" noWrap sx={{pl:2}} >
            FAQ
          </Typography>
        </IconButton>
      </MenuItem>
      <Divider />
      <MenuItem>
        <IconButton>
          <LogoutOutlinedIcon fontSize="large" />
          <Typography variant="h6" noWrap sx={{pl:2}}>
            Logout
          </Typography>
        </IconButton>
      </MenuItem>
    </>
  );
};

export default ProfileMenu;

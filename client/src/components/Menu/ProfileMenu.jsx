import React from "react";
import Badge from "@mui/material/Badge";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import {
  MenuItem,
  IconButton,
  Typography,
  Avatar,
  Box,
  MenuList,
  styled,
} from "@mui/material";
import { theme } from "../../theme";
import { images } from "../../constants";
import { Link } from "react-router-dom";

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
    <MenuList sx={{ pt: 0, pb: 0 }}>
      <MenuItem
        sx={{
          maxHeight: "60px",
          borderBottom: "1px solid" + theme.palette.background.border,
        }}
      >
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
            <Typography
              variant="h5"
              noWrap
              sx={{ fontWeight: theme.typography.fontWeightBold }}
            >
              John Doe
            </Typography>
            <Typography variant="h6" noWrap>
              Admin
            </Typography>
          </Box>
        </IconButton>
      </MenuItem>
      {/* <Divider /> */}
      <Link to ="/profile" style={{textDecoration:'none'}}>
      <MenuItem sx={{ maxHeight: "40px" }}>
        <IconButton>
          <PermIdentityOutlinedIcon fontSize="medium" />
          <Typography variant="h5" noWrap sx={{ pl: 1 }}>
            Profile
          </Typography>
        </IconButton>
      </MenuItem>
      </Link>
      <Link to="/application" style={{textDecoration:'none'}}>
      <MenuItem sx={{ maxHeight: "40px" }}>
        <IconButton>
          <PermIdentityOutlinedIcon fontSize="medium" />
          <Typography variant="h5" noWrap sx={{ pl: 1 }}>
            Applications
          </Typography>
        </IconButton>
      </MenuItem>
      </Link>
      <Link to="/favorites" style={{textDecoration:'none'}}>
      <MenuItem sx={{ maxHeight: "40px" }}>
        <IconButton>
          <PermIdentityOutlinedIcon fontSize="medium" />
          <Typography variant="h5" noWrap sx={{ pl: 1 }}>
            Favourites
          </Typography>
        </IconButton>
      </MenuItem>
      </Link>
      <MenuItem>
        <IconButton>
          <HelpOutlineOutlinedIcon fontSize="medium" />
          <Typography variant="h5" noWrap sx={{ pl: 1 }}>
            FAQ
          </Typography>
        </IconButton>
      </MenuItem>
      <MenuItem sx={{ maxHeight: "40px" }}>
        <IconButton>
          <PermIdentityOutlinedIcon fontSize="medium" />
          <Typography variant="h5" noWrap sx={{ pl: 1 }}>
            Help & Support
          </Typography>
        </IconButton>
      </MenuItem>
      {/* <Divider /> */}
      <Link to="/login" style={{textDecoration:'none'}}>
      <MenuItem
        sx={{
          maxHeight: "40px",
          borderTop: "1px solid" + theme.palette.background.border,
        }}
        dense="true"
      >
      
        <IconButton>
          <LogoutOutlinedIcon fontSize="medium" />
          <Typography variant="h5" noWrap sx={{ pl: 1 }}>
            Logout
          </Typography>
        </IconButton>
        
      </MenuItem>
      </Link>
    </MenuList>
  );
};

export default ProfileMenu;

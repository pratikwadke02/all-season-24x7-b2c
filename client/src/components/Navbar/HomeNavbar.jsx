import { images } from "../../constants";
import React from "react";
import {AppBar, Box, Toolbar, Container, Typography, Button, Tooltip, IconButton,Menu, Avatar, MenuItem, styled, Badge} from "@mui/material";
import NotificationsNoneRoundedIcon from "@mui/icons-material/NotificationsNoneRounded";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import { theme } from "../../theme";
import ProfileMenu from "../Menu/ProfileMenu";
import NotificationMenu from "../Menu/NotificationMenu";

const pages = ["Home", "Updates", "Services", "Features", "About"];

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    backgroundColor: '#44b700',
    color: '#44b700',
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      animation: 'ripple 1.2s infinite ease-in-out',
      border: '1px solid currentColor',
      content: '""',
    },
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(.8)',
      opacity: 1,
    },
    '100%': {
      transform: 'scale(2.4)',
      opacity: 0,
    },
  },
}));

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [anchorElNotifications, setAnchorElNotifications] = useState(null);

  const handleOpenNotificationsMenu = (event) => {
    setAnchorElNotifications(event.currentTarget);
  }

  const handleCloseNotificationMenu = (event) => {
    setAnchorElNotifications(null);
  }

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <img src={images.HomeLogo} alt="" />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          ></Typography>
          <Box
            sx={{
              flexGrow: 1,
              justifyContent: "space-evenly",
              marginLeft: 20,
              marginRight: 20,
              display: { xs: "none", md: "flex" },
            }}
          >
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ 
                  my: 2,
                  color:theme.palette.text.primary ,
                  fontSize: "14px", 
                  display: "block",
                  fontWeight: theme.typography.fontWeightBold, 
                }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0, display: "flex" }}>
            <Tooltip title="Open Notifications">
            <IconButton onClick={handleOpenNotificationsMenu} sx={{mr:1}}>
              <NotificationsNoneRoundedIcon fontSize="large"  />
            </IconButton>
            </Tooltip>
            <Menu
            PaperProps={{ sx: { width: "100%" , maxWidth:'380px' } }}
            sx={{ mt: "45px", width:'380px' }}
            id="notification-appbar"
            anchorEl={anchorElNotifications}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(anchorElNotifications)}
            onClose={handleCloseNotificationMenu}
          >
            <NotificationMenu />
            </Menu>
            <Tooltip title="Open settings">
              <IconButton
                onClick={handleOpenUserMenu}
                sx={{ p: 0, display: { xs: "none", sm: "block" } }}
              >
              <StyledBadge
              overlap="circular"
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              variant="dot"
                >
                <Avatar alt="John Doe" src={images.Userpic} />
                </StyledBadge>
              </IconButton>
            </Tooltip>
            <Menu
              PaperProps={{ sx: { width: "100%" , maxWidth:'230px',height:'100%',maxHeight:'200px' } }}
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <ProfileMenu />
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 0, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column", ml: 2 }}>
            <Typography
              variant="h6"
              noWrap
              component="a"
              // href="/"
              sx={{
                mr: 1,
                display: { xs: "none", lg: "flex" },
                fontSize: "1rem",
                fontWeight: 700,
                color:theme.palette.text.primary ,
                textDecoration: "none",
              }}
            >
              Justin Hemphrey
            </Typography>
            <Typography
              variant="h6"
              noWrap
              component="a"
              // href="/"
              sx={{
                mr: 1,
                display: { xs: "none", lg: "flex" },
                fontSize: "0.75rem",
                fontWeight: 200,
                color:theme.palette.text.disabled ,
                textDecoration: "none",
              }}
            >
              Product Designer
            </Typography>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;

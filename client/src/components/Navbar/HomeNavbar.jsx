import { images } from "../../constants";
import React from "react";
import {AppBar, Box, Toolbar, Container, Typography, Button, Tooltip, IconButton,Menu, Avatar, MenuItem, styled, Badge, CssBaseline} from "@mui/material";
import NotificationsNoneRoundedIcon from "@mui/icons-material/NotificationsNoneRounded";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import { theme } from "../../theme";
import ProfileMenu from "../Menu/ProfileMenu";
import NotificationMenu from "../Menu/NotificationMenu";
import {Link} from "react-router-dom";

const pages = [
  // "Home", "Updates", "Services", "Features", "About"
  {
    name: "Home",
    link: "/all-season-24x7-b2c",
  },
  {
    name: "Updates",
    link: "/all-season-24x7-b2c",
  },
  {
    name: "Services",
    link: "/all-season-24x7-b2c",
  },
  {
    name: "Features",
    link: "/all-season-24x7-b2c",
  },
  {
    name: "About",
    link: "/all-season-24x7-b2c",
  },
];              // pages to be displayed in the navbar menu

const StyledBadge = styled(Badge)(({ theme }) => ({                               // StyledBadge component to display the number of unread notifications in the navbar
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
  const [anchorElNav, setAnchorElNav] = useState(null);                   // anchorElNav is the anchor element for the navbar menu
  const [anchorElUser, setAnchorElUser] = useState(null);                        // anchorElUser is the anchor element for the user menu
  const [anchorElNotifications, setAnchorElNotifications] = useState(null);          // anchorElNotifications is the anchor element for the notifications menu 

  const handleOpenNotificationsMenu = (event) => {                              // handleOpenNotificationsMenu is used to open the notifications menu
    setAnchorElNotifications(event.currentTarget);
  }

  const handleCloseNotificationMenu = (event) => {                       // handleCloseNotificationMenu is used to close the notifications menu
    setAnchorElNotifications(null);
  }

  const handleOpenNavMenu = (event) => {                              // handleOpenNavMenu is used to open the navbar menu
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {                            // handleOpenUserMenu is used to open the user menu
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {                               // handleCloseNavMenu is used to close the navbar menu
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {                                  // handleCloseUserMenu is used to close the user menu
    setAnchorElUser(null);
  };

  return (
    <>
    <CssBaseline />
    <AppBar elevation={0} position="static" sx={{position:'relative' ,zIndex:(theme) => theme.zIndex.drawer + 1, borderBottom:'1px solid'+theme.palette.text.secondary }}>  
      <Container maxWidth="xl">                                     
        <Toolbar disableGutters>
          <Box sx={{display: 'flex',flexDirection:'row', alignItems:'center'}}>
          <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
              sx={{m:0,p:0,mr:2, display:{xs:'block', sm:'none'} , height:'24px'}}
            >
              <MenuIcon color="primary" fontSize="large"/>                       
            </IconButton>
            <Menu  
              PaperProps={{ sx:{
                backgroundColor:theme.palette.background.paper,
              }}}                                                    // Menu component is used to display the navbar menu in the navbar when the menu button is clicked in mobile view
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
                display: { xs: "block", lg: "none" },
              }}
            >
              {pages.map((page) => (
                <Link to={page.link} key={page.name} style={{textDecoration:'none', color:theme.palette.text.primary}}>
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography variant="h5" textAlign="center">{page.name}</Typography>
                </MenuItem>
                </Link>
              ))}
            </Menu>
            <img src={images.HomeLogo} alt="" />
          </Box>
            
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", lg: "none" },
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
              // marginLeft: 30,
              // marginRight: 30,
              pl:30,
              pr:30,
              display: { xs: "none", lg: "flex" },
            }}
          >
            {pages.map((page) => (
              <Link to={page.link} key={page.name} style={{textDecoration:'none'}}>
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ 
                  my: 2,
                  color:theme.palette.text.primary , 
                }}
              >
                <Typography variant="h5" sx={{fontWeight:theme.typography.fontWeightBold}}>{page.name}</Typography>
              </Button>
              </Link>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0, display: "flex" }}>
            <Tooltip title="Open Notifications">
            <IconButton onClick={handleOpenNotificationsMenu} sx={{mr:.5}}>
              <NotificationsNoneRoundedIcon fontSize="large"  />
            </IconButton>
            </Tooltip>
            <Menu
            PaperProps={{ sx: { width: "100%" , maxWidth:'380px', backgroundColor:theme.palette.background.paper } }}
            sx={{ mt: "45px", width:{xs:'300px' , sm:'380px'} }}
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
            <NotificationMenu fontSize="large"/>                         
            </Menu>
            <Tooltip title="Open settings">
              <IconButton
                onClick={handleOpenUserMenu}
                sx={{ p: 0, display: { xs: "block", lg: "block" }, ml:.5, mr:{xs:0, sm:.5} }}
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
              PaperProps={{ sx: { width: "100%" , maxWidth:'180px',height:'100%',maxHeight:'360px', p:0, m: 0, backgroundColor:theme.palette.background.paper} }}
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
          <Box sx={{ flexGrow: 0, display: { xs: "flex", lg: "none" } }}>
            
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column", ml: 2 }}>
            <Typography
              variant="h5"
              noWrap
              component="a"
              // href="/"
              sx={{
                mr: 1,
                display: { xs: "none", lg: "flex" },
                fontWeight: theme.typography.fontWeightBold,
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
    </>
  );
};
export default Navbar;

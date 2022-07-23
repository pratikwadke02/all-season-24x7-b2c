import { Box, Container, IconButton, Stack, Typography,styled } from "@mui/material";
import React from "react";
import ViewModuleIcon from "@mui/icons-material/ViewModule";
import TableRowsIcon from "@mui/icons-material/TableRows";
import FilterListOutlinedIcon from "@mui/icons-material/FilterListOutlined";
import DropdownComponent from "../utils/Dropdown/DropdownComponent";
import Rightbar from "../Rightbar/Rightbar";
import Drawer from "@mui/material/Drawer";
import { theme } from "../../theme";

const drawerWidth = 340;





const Header = () => {
  
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  // const container = window !== undefined ? () => window().document.body : undefined;

  const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  }));

  return (
    <>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          // container={container}
          PaperProps = {{
            sx : {
              display: 'flex',
              flexDirection: 'column',
              backgroundColor: "#fff",
              border: 'none'
              }
          }}
          anchor="right"
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {/* <DrawerHeader>
          </DrawerHeader> */}
          <Rightbar mobileOpen={mobileOpen} handleDrawerToggle={handleDrawerToggle}/>
        </Drawer>
      </Box>
      {/* {filter && (
        <Rightbar  />
      )} */}
      <Container
        sx={{
          p: 3,
          borderBottom: "1px solid lightgrey",
          display: "flex",
          alignItems: {xs:"flex-start", sm:"center"},
          flexDirection: { xs: "column", sm: "row" },
          // justifyContent: {xs: 'flex-start', sm:'none'},
        }}
      >
        <Typography
          flex={1}
          variant="h1"
          sx={{ fontWeight: theme.typography.fontWeightBold }}
        >
          Latest Jobs
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Box
            sx={{
              display: "flex",
              border: "1px solid" + theme.palette.text.secondary,
              borderRadius: "3px",
            }}
          >
            <Box
              sx={{
                borderRight: "1px solid" + theme.palette.text.secondary,
                backgroundColor: theme.palette.background.default,
              }}
            >
              <IconButton>
                <ViewModuleIcon fontSize="large" />
              </IconButton>
            </Box>
            <Box sx={{ backgroundColor: theme.palette.background.disabled }}>
              <IconButton>
                <TableRowsIcon fontSize="large" />
              </IconButton>
            </Box>
          </Box>
          <Box flex={0}>
            <DropdownComponent />
          </Box>
          <IconButton
            sx={{ alignItems: "center", display: { xs: "flex", sm: "none" } }}
            onClick={handleDrawerToggle}
          >
            <FilterListOutlinedIcon color="primary" fontSize="large" />
            <label style={{ color: theme.palette.primary.main }}>FILTERS</label>
          </IconButton>
        </Box>
      </Container>
    </>
  );
};

export default Header;

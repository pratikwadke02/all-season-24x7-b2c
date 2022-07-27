import React from "react";
import TabComponent from "../utils/Tabs/TabComponent";
import { Container } from "@mui/material";
import { theme } from "../../theme";
import Account from "./Account/Account";
import Security from "./Security/Security";
import Info from "./Info/Info";
import Billing from "./Billing/Billing";
import Notification from "./Notification/Notification";
import SearchIcon from "@mui/icons-material/Search";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";

const ProfileMain = () => {
  const data = [
    {
      name: "Account",
      icon: <SearchIcon fontSize="large"/>,
      component: <Account />,
    },
    {
      name: "Security",
      icon: <LockOpenOutlinedIcon fontSize="large"/>,
      component: <Security />,
    },
    {
      name: "Info",
      icon: <InfoOutlinedIcon fontSize="large"/>,
      component: <Info />,
    },
    {
      name: "Billing",
      icon: <BookmarkBorderOutlinedIcon fontSize="large"/>,
      component: <Billing />,
    },
    {
      name: "Notification",
      icon: <NotificationsNoneOutlinedIcon fontSize="large"/>,
      component: <Notification />,
    },
  ];

  return (
    <Container
      sx={{
        display:'flex',
        backgroundColor: theme.palette.background.default,
        borderRadius: "5px",
        // width: '',
        maxWidth: {lg: 'inherit'},
        height: '100%',
        alignItems: "center",
        boxShadow: 1,
        pt: 1,
        pl:2,
        pr:2,
        pb: 2,
      }}
    >
      <TabComponent data={data} />
    </Container>
  );
}

export default ProfileMain
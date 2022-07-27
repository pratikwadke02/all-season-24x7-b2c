import { ThemeProvider } from "@mui/material";
import Home from "./views/Home/Home";
import Auth from "./views/Auth/Auth";
import { theme } from "./theme";
import Application from "./views/Application/Application";
import Bookmark from "./views/Bookmark/Bookmark";
import Profile from "./views/Profile/Profile";

function App() {
  return (
    <>
    <ThemeProvider theme = {theme}>
      {/* <Home /> */}
      {/* <Auth /> */}
      {/* <Application /> */}
      {/* <Bookmark /> */}
      <Profile />
    </ThemeProvider>
    </>
  );
}

export default App;

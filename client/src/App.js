import { ThemeProvider } from "@mui/material";
import Home from "./views/Home/Home";
import Auth from "./views/Auth/Auth";
import { theme } from "./theme";
import Application from "./views/Application/Application";
import Bookmark from "./views/Bookmark/Bookmark";

function App() {
  return (
    <>
    <ThemeProvider theme = {theme}>
      {/* <Home /> */}
      {/* <Auth /> */}
      <Application />
      {/* <Bookmark /> */}
    </ThemeProvider>
    </>
  );
}

export default App;

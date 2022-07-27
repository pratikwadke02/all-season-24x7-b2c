import { ThemeProvider } from "@mui/material";
import Home from "./views/Home/Home";
import Auth from "./views/Auth/Auth";
import { theme } from "./theme";
import Application from "./views/Application/Application";

function App() {
  return (
    <>
    <ThemeProvider theme = {theme}>
      {/* <Home /> */}
      {/* <Auth /> */}
      <Application />
    </ThemeProvider>
    </>
  );
}

export default App;

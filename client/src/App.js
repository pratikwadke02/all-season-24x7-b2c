import { ThemeProvider } from "@mui/material";
import Home from "./views/Home/Home";
import Auth from "./views/Auth/Auth";
import { theme } from "./theme";

function App() {
  return (
    <>
    <ThemeProvider theme = {theme}>
      <Home />
      {/* <Auth /> */}
    </ThemeProvider>
    </>
  );
}

export default App;

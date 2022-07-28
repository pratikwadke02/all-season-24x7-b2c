import { ThemeProvider } from "@mui/material";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from "./views/Home/Home";
import Auth from "./views/Auth/Auth";
import { theme } from "./theme";
import Application from "./views/Application/Application";
import Bookmark from "./views/Bookmark/Bookmark";
import Profile from "./views/Profile/Profile";
import Login from "./views/Auth/Login";
import Signup from "./views/Auth/Signup";

function App() {
  return (
    <ThemeProvider theme = {theme}>
      <BrowserRouter>
      <Routes>
        <Route path="/all-season-24x7-b2c" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/application" element={<Application />} />
        <Route path="/favorites" element={<Bookmark />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>      
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;

      
      {/* <Home /> */}
      {/* <Auth /> */}
      {/* <Application /> */}
      {/* <Bookmark /> */}
      {/* <Profile /> */}
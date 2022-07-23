import { Container, IconButton, Typography, Box, Button, Checkbox } from "@mui/material";
import Divider from "@mui/material/Divider";
import React from "react";
import { theme } from "../../theme";
import CloseIcon from "@mui/icons-material/Close";
import GoogleIcon from "@mui/icons-material/Google";
import TextfieldComponent from "../utils/Textfield/TextfieldComponent";

const Signup = () => {

  const [checked, setChecked] = React.useState(false);

  const handleChecked = (event) => {
    setChecked(event.target.checked);
  }

  return (
    <>
    <Container
        sx={{
          maxWidth: {xs: '448px'},
          maxHeight: '472px',
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          backgroundColor: theme.palette.background.default,
          borderRadius: "5px",
          pt: 1,
          pb: 1,
          pl:{xs:'24px'},
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            mt:1,
            maxWidth: 400
          }}
        >
          <Typography
            variant="h1"
            color={theme.palette.text.primary}
            sx={{ fontSize: "30px" }}
            flex={1}
          >
            Sign up
          </Typography>
          <IconButton flex={0}>
            <CloseIcon
              fontSize="medium"
              sx={{ color: theme.palette.text.primary }}
            />
          </IconButton>
        </Box>
        <Box>
          <Box sx={{mt:3,mb:3,maxWidth: 400}}>
          <TextfieldComponent label="Full Name" type="string"/>
          </Box>
          <Box sx={{mt:2,maxWidth: 400}}>
          <TextfieldComponent label="Email" type="email"/>
          </Box>
          <Box sx={{display:'flex', flexDirection:'column', alignItems:'flex-start', justifyContent:'flex-start'}}>
          {/* <Typography variant="h7" color={theme.palette.cancel.dark}>
            Invalid Email id
          </Typography> */}
          <Box sx={{display:'flex', flexDirection:'row' ,mt:1, alignItems:'flex-start'}}>
          <Checkbox checked = {checked} onChange={handleChecked} inputProps={{ 'aria-label': 'contolled' }} sx={{m:-1}}/>
          <Box sx={{maxWidth: 400}}>
          <Typography variant="h7" color={theme.palette.text.primary}>
            I agree to All Season 24x7's <a style={{textDecoration:'none', color:theme.palette.login.main}} href="#">Terms of service Policy</a>  and <a style={{textDecoration:'none', color:theme.palette.login.main}} href="#">Content Policy</a>
          </Typography>
          </Box>
          </Box>
          </Box>
          <Button
            color="info"
            variant="contained"
            sx={{
              width: "100%",
              maxWidth: 400,
              backgroundColor: theme.palette.login.main,
              minHeight: 47,
              mb: 1,
              mt: 2,
            }}
          >
            <Typography variant="h6">Create account</Typography>
          </Button>
        </Box>
        <Divider
          textAlign="center"
          sx={{
            maxWidth: 400,
            width: "100%",
            mt: 1,
          }}
        >
          <Typography
            variant="h2"
            color={theme.palette.text.primary}
            sx={{ mb: "-.95rem" }}
          >
            or
          </Typography>
        </Divider>
        <Box sx={{ mt: 2,maxWidth: 400 }}>
          <Button
            variant="outlined"
            color="inherit"
            sx={{ width: "100%", minHeight: 47, mt: 2, mb: 1 }}
          >
            <Typography
              variant="h6"
              color={theme.palette.text.primary}
              sx={{ display: "flex", alignItems: "center" }}
            >
              <GoogleIcon
                fontSize="large"
                sx={{ color: theme.palette.text.primary,pr: 1 }}
              />
              Continue with Google
            </Typography>
          </Button>
          {/* <Divider sx={{ width: "100%", mt: 2, mb: 2 }} /> */}
          <Box sx={{ display: "flex" }}>
            <Typography
              variant="h6"
              color={theme.palette.text.disabled}
              sx={{ pr: 1 }}
            >
              Already have an account?
            </Typography>
            <Typography
              variant="h6"
              color={theme.palette.text.primary}
              sx={{ color: theme.palette.login.main }}
              >
              Login
            </Typography>
          </Box>
        </Box>
      </Container>
    </>
  )
}

export default Signup
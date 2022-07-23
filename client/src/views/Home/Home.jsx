import React from 'react'
import { Box, Container, Stack, Paper } from '@mui/material'
import Navbar from '../../components/Navbar/HomeNavbar'
import Sidebar from '../../components/Sidebar/HomeSidebar'
import Feed from '../../components/Feed/Feed'
import {theme} from '../../theme'
import Header from '../../components/Header/Header'

const Home = () => {
  return (
    <>
    <Box bgcolor={theme.palette.background.home}>
        <Navbar />
        <Header />
        <Container disableGutters>
            <Stack direction={"row"} spacing={1} justifyContent="space-between">
                <Sidebar/>
                <Feed />
            </Stack>
        </Container>
    </Box>
    </>
  )
}

export default Home
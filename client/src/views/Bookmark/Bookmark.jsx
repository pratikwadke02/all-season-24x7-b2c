import React from 'react'
import { Box, Container, Stack, Paper } from '@mui/material'
import Navbar from '../../components/Navbar/HomeNavbar'
import {theme} from '../../theme'
import ApplicationHeader from '../../components/Header/ApplicationHeader'
import ApplicationFeed from '../../components/Feed/ApplicationFeed'

const Bookmark = () => {
  return (
    <>
    <Box bgcolor={theme.palette.background.home}>
        <Navbar />
        <ApplicationHeader />
        <Container disableGutters>
            <Stack direction={"row"} justifyContent="space-between">
                <ApplicationFeed />
            </Stack>
        </Container>
    </Box>
    </>
  )
}

export default Bookmark
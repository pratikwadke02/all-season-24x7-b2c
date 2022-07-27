import React from 'react'
import { Box, Container, Stack, Paper } from '@mui/material'
import Navbar from '../../components/Navbar/HomeNavbar'
import {theme} from '../../theme'
import BookmarkHeader from '../../components/Header/BookmarkHeader'
import BookmarkFeed from '../../components/Feed/BookmarkFeed'

const Bookmark = () => {
  return (
    <>
    <Box bgcolor={theme.palette.background.home}>
        <Navbar />
        <BookmarkHeader />
        <Container disableGutters>
            <Stack direction={"row"} justifyContent="space-between">
                <BookmarkFeed />
            </Stack>
        </Container>
    </Box>
    </>
  )
}

export default Bookmark
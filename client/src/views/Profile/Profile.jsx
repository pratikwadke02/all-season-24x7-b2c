import React from 'react'
import { Container, Box } from '@mui/material'
import { theme } from '../../theme'
import Navbar from '../../components/Navbar/HomeNavbar'
import ProfileHeader from '../../components/Header/ProfileHeader'
import ProfileMain from '../../components/ProfileMain/ProfileMain'

const Profile = () => {
  return (
    <>
    <Box bgcolor={theme.palette.background.home} sx={{height:'100vh'}}>
        <Navbar />
        <ProfileHeader />
        <Container disableGutters>
            <ProfileMain />
        </Container>
    </Box>
    </>
  )
}

export default Profile
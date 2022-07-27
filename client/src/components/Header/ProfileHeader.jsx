import React from 'react'
import { Container, Box, Typography } from '@mui/material'
import { theme } from '../../theme'
import SelectComponent from '../utils/Dropdown/SelectComponent'
import Date from '../utils/Date/Date'

const ProfileHeader = () => {
  return (
    <>
      <Container sx={{ backgroundColor: theme.palette.background.default, width:'100%', boxShadow: 1, borderRadius:'4px', mt:4, p:2, mb:2}}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Box>
            <Typography
              variant="h1"
              sx={{ fontWeight: theme.typography.fontWeightBold }}
            >
              Your Profile
            </Typography>
          </Box>
          <Box>
            <Typography 
                variant="h4"
            >
                Last update on 13 july, 2022
            </Typography>
          </Box>
        </Box>
      </Container>
    </>
  )
}

export default ProfileHeader
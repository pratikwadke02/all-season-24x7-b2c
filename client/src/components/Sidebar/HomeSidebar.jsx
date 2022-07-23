import { Box } from '@mui/material'
import React from 'react';
import { Button } from '@mui/material'
import CheckboxComponent from '../utils/Checkbox/CheckboxComponent';
import RadioComponent from '../utils/Radio/RadioComponent';
import SearchComponent from '../utils/Search/SearchComponent';

const HomeSidebar = () => {
  return (
    <>
    <Box flex={3} p={1} sx={{display: {xs: "none", sm:"block"}}}>
    <Box sx={{p:1}}>
      <SearchComponent label="Search by title" placeholder="Enter to search"/>
    </Box >
    <Box sx={{p:1}}>
    <SearchComponent laabel="Location" placeholder="Enter location" />
    </Box>
    <Box sx={{p:1}}>
        <Button variant="contained" sx={{minWidth: 320, width:'100%', color:'#ffffff', backgroundColor:'#2196f3'}}>Search</Button>
    </Box>
    <Box sx={{p:1}}>
      <RadioComponent formLabel="Status" optionA = "Label" optionB = "Open" optionC = "Archived" />
    </Box>
    <Box sx={{p:1}}>
      <CheckboxComponent formLabel="Contract Type"optionA = "Freelance" optionB = "Full-time" optionC = "Internship" optionD = "Part-time" />
    </Box>
    <Box sx={{p:1}}>
      <CheckboxComponent formLabel = "Level" optionA = "Any" optionB = "Director" optionC = "Entry-level" optionD = "Lead"/>
    </Box>
    </Box>
    </>
  )
}

export default HomeSidebar;
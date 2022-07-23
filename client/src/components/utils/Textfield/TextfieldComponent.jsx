import React from 'react'
import { TextField } from '@mui/material'

const TextfieldComponent = (props) => {
  return (
    <>
    <TextField
    type={props.type} 
    id={props.id} 
    label={props.label} 
    variant="outlined" 
    fullWidth
    />
    </>
  )
}

export default TextfieldComponent
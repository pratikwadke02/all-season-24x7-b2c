import React from 'react'
import {Box, FormControl, Select, OutlinedInput, MenuItem, InputLabel} from '@mui/material'

const SelectComponent = (props) => {

    const [value, setValue] = React.useState('');

    const handleChange = (event) => {
        setValue(event.target.value);
    }

    const {items, label} = props;

  return (
    <>
    <Box>
    <FormControl sx={{width:'100%'}}>
        <InputLabel id='select-label'>{label}</InputLabel>
            <Select
              labelId = 'select-label'
              value={value}
              onChange={handleChange}
              input={<OutlinedInput id="select" label={label} />}
              inputProps={{ "aria-label": "Without label" }}
            >
                {items.map((item) => (
                    <MenuItem key={item.value} value={item.value}>{item.name}</MenuItem>
                ))}
            </Select>
          </FormControl>
    </Box>
    </>
  )
}

export default SelectComponent
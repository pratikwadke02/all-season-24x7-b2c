import React , {useState} from 'react';
import { Typography, FormControl,FormLabel,FormGroup, FormControlLabel,Checkbox  } from '@mui/material';
import { theme } from '../../../theme';


const CheckboxComponent = (props) => {

    const [state, setState] = useState({
        
    });

    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    }

  return (
    <>
    <FormControl sx={{ml:1 }} component="fieldset" variant="standard">
        <FormLabel component="legend">
          <Typography variant="h7" sx={{color:theme.palette.text.primary, fontWeight:theme.typography.fontWeightBold}}>{props.formLabel}</Typography>
          </FormLabel>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox 
            //   checked={gilad}
            //   onChange={handleChange} 
            //   name="gilad" 
              />
            }
            label={<Typography variant="h6" >{props.optionA}</Typography>}
          />
          <FormControlLabel
            control={
              <Checkbox 
            //   checked={jason} 
            //   onChange={handleChange} 
            //   name="jason" 
              />
            }
            label={<Typography variant="h6" >{props.optionB}</Typography>}
          />
          <FormControlLabel
            control={
              <Checkbox 
            //   checked={antoine} 
            //   onChange={handleChange} 
            //   name="antoine" 
              />
            }
            label={<Typography variant="h6" >{props.optionC}</Typography>}
          />
          <FormControlLabel
            control={
              <Checkbox 
            //   checked={antoine} 
            //   onChange={handleChange} 
            //   name="antoine" 
              />
            }
            label={<Typography variant="h6" >{props.optionD}</Typography>}
          />
        </FormGroup>
      </FormControl>
    </>
  )
}

export default CheckboxComponent;
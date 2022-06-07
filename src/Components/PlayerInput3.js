import React from 'react';
import { Button, ToggleButton, ToggleButtonGroup, TextField, Typography } from '@mui/material';

export default function PlayerInput3() {
  const [inputValue, setInputValue] = React.useState('');
  const [errorForInput, setErrorForInput] = React.useState(false);
  const [alignment, setAlignment] = React.useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  }

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  const handleSubmit = (event) => {
    if (inputValue === '') {
      setErrorForInput(true);
    } else {
      setErrorForInput(false);
    }

    if (alignment !== '') {
      
    }
  }

  return (
    <div className='flex my-20'>
      <form className="mx-auto">
        <TextField
          required
          id="standard-required"
          label="Name"
          fullWidth={true}
          variant="standard"
          error={errorForInput}
          margin="normal"
          onChange={handleInputChange}
        />
        <Typography variant='h4' align='center'>
          Going to the Game?
        </Typography>
        <ToggleButtonGroup 
          className='my-3' 
          value={alignment}
          exclusive
          fullWidth={true}
          onChange={handleChange}
        >
          <ToggleButton color='success' size="large" value="yes">Yes</ToggleButton>
          <ToggleButton color="error" size="large" value="no">No</ToggleButton>
        </ToggleButtonGroup>
        <div className='flex flex-col'>
          <Button variant="contained" size="large" onClick={handleSubmit}>Submit</Button>
        </div>
      </form>
    </div>
  )
}

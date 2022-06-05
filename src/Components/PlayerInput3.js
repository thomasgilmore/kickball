import React from 'react';
import { Button, ToggleButton, ToggleButtonGroup, Input, Typography } from '@mui/material';

export default function PlayerInput3() {
  const [alignment, setAlignment] = React.useState('');

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  return (
    <div className='flex my-20'>
      <form className="mx-auto">
        <div className='flex no-wrap'>
          <label className='mt-7 text-xl'>
            Name:
          </label>
          <Input name="Player Name" className='my-6' fullWidth={true} />
        </div>
        <Typography variant='h4' align='center'>
          Going to the Game?
        </Typography>
        <ToggleButtonGroup 
          className='my-6' 
          value={alignment}
          exclusive
          fullWidth={true}
          onChange={handleChange}
        >
          <ToggleButton color='success' size="large" value="yes">Yes</ToggleButton>
          <ToggleButton color="error" size="large" value="no">No</ToggleButton>
        </ToggleButtonGroup>
        <div className='flex flex-col'>
          <Button variant="contained" size="large">Submit</Button>
        </div>
      </form>
    </div>
  )
}

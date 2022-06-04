import React from 'react';
import { Button, ButtonGroup, Input, Typography } from '@mui/material';

export default function PlayerInput3() {
  return (
    <div>
      <form className="">
        <label htmlFor="playerName">
          Name:
          <Input name="Player Name" />
        </label>
        <Typography variant='h3' align='center'>
          Going to Game:
        </Typography>
        <ButtonGroup>
          <Button>Yes</Button>
          <Button color="secondary">No</Button>
        </ButtonGroup>
        <Button variant="contained">Submit</Button>
      </form>
    </div>
  )
}

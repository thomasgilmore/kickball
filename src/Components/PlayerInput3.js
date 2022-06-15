import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateInputValue, updateErrorForInput, updateAlignment, updateSubmitButtonDisabled } from '../Store/store';
import { Button, ToggleButton, ToggleButtonGroup, TextField, Typography } from '@mui/material';

export default function PlayerInput3() {

  const state = useSelector(state => state.kickball);
  const dispatch = useDispatch();

  const [inputValue, setInputValue] = React.useState('');
  const [errorForInput, setErrorForInput] = React.useState(false);
  const [alignment, setAlignment] = React.useState('');
  const [submitButtonDisabled, setSubmitButtonDisabled] = React.useState(true);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
    dispatch(updateInputValue(event.target.value));
  }

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
    dispatch(updateAlignment(newAlignment));
  };

  const handleSubmit = (event) => {
    if (inputValue === '') {
      setErrorForInput(true);
      dispatch(updateErrorForInput(true));
    } else {
      setErrorForInput(false);
      dispatch(updateErrorForInput(false));
    }
  }

  useEffect(() => {
    if (alignment !== '' && inputValue !== '') {
      setSubmitButtonDisabled(false);
      dispatch(updateSubmitButtonDisabled(false));
    } else {
      setSubmitButtonDisabled(true);
      dispatch(updateSubmitButtonDisabled(true));
    }
  },[alignment, inputValue])

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
          <Button variant="contained" size="large" disabled={submitButtonDisabled} onClick={handleSubmit}>Submit</Button>
        </div>
      </form>
    </div>
  )
}

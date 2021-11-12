import React, { useState } from 'react';
import './playerInput.css';

export default function PlayerInput2() {
  const [yesButton, setYesButton] = useState('100%');
  const [noButton, setNoButton] = useState('100%');
  const [whichButtonSelected, setWhichButtonSelected] = useState('None');
  const [messageAfterSubmit, setMessageAfterSubmit] = useState('');
  const [viewMessage, setViewMessage] = useState('No');
  const [buttonDisabled, setButtonDisabled] = useState(false);
  // let yesButton = '100%';
  // let noButton = '100%';

  const handleSubmit = (e) => {
    e.preventDefault();
    if (whichButtonSelected !== 'None') {
      setViewMessage('Yes');
      setButtonDisabled(true);
    }
    // console.log(whichButtonSelected);
    // console.log(e.target[0].value);
    // console.log(e.target[1].value);
  };

  const handleYesClick = (e) => {
    e.preventDefault();
    setYesButton('100%');
    setNoButton('50%');
    setWhichButtonSelected('Yes');
    setMessageAfterSubmit("We'll see you at the game!");
  };

  const handleNoClick = (e) => {
    e.preventDefault();
    setYesButton('50%');
    setNoButton('100%');
    setWhichButtonSelected('No');
    setMessageAfterSubmit("We'll miss you!");
  };

  return (
    <div className="divPlayerInputForm">
      <form className="playerInputForm" onSubmit={handleSubmit}>
        <label htmlFor="playerName" className="nameLabel">
          Name:
          <input type="text" name="Player Name" className="playerNameInput" required="yes" />
        </label>
        <h1>
          Going to Game:
        </h1>
        <input type="button" className="playerChoiceButtons Yes" disabled={buttonDisabled} style={{ opacity: yesButton }} value="Yes" onClick={handleYesClick} />
        <input type="button" className="playerChoiceButtons No" disabled={buttonDisabled} style={{ opacity: noButton }} value="No" onClick={handleNoClick} />
        <button type="submit" className="playerSubmitButton">Submit</button>
      </form>
      {viewMessage === 'Yes' ? <h2 className="messageAfterSubmit">{messageAfterSubmit}</h2> : <div />}
    </div>
  );
}

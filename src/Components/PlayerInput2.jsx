import React from 'react';
import './playerInput.css';

export default function PlayerInput2() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(e.target[0].value);
    // console.log(e.target[1].value);
  };

  const handleYesClick = (e) => {
    e.preventDefault();
  };

  const handleNoClick = (e) => {
    e.preventDefault();
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
        <input type="button" className="playerSubmitButton" value="Yes" onClick={handleYesClick} />
        <input type="button" className="playerSubmitButton" value="No" onClick={handleNoClick} />
        <button type="button" className="playerSubmitButton">Submit</button>
      </form>
    </div>
  );
}

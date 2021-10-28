import React from 'react';
import './createteam.css';

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
    <div>
      <form className="createTeamForm" onSubmit={handleSubmit}>
        <label htmlFor="playerName">
          Name:
          <input type="text" name="Player Name" />
        </label>
        <h1>
          Going to Game:
        </h1>
        <button type="button" className="createTeamButton" onClick={handleYesClick}>Yes</button>
        <button type="button" className="createTeamButton" onClick={handleNoClick}>No</button>
      </form>
    </div>
  );
}

import React from 'react';
import './createteam.css';

export default function CreateTeam() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(e.target[0].value);
    // console.log(e.target[1].value);
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
        <label htmlFor="yes">
          <input type="checkbox" id="yes" name="yes" value="yes" />
          Yes
        </label>
        <input type="checkbox" id="no" name="no" value="No" />
        <label htmlFor="no">
          <input type="checkbox" id="no" name="no" value="No" />
          No
        </label>
        <button type="button" className="createTeamButton">Submit</button>
      </form>
    </div>
  );
}

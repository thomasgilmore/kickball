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
        <label>
          Team Name:
          <input type="text" name="Team Name" />
        </label>
        <label>
          Team Color:
          <input type="text" name="Team Color" />
        </label>
        <button type="button" className="createTeamButton">Create Team</button>
      </form>
    </div>
  );
}

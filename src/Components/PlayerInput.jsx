import React from 'react';
import './playerInput.css';

export default function PlayerInput() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(e.target[0].value);
    // console.log(e.target[1].value);
  };
  return (
    <div>
      <form className="playerInputForm" onSubmit={handleSubmit}>
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
        <label htmlFor="no">
          <input type="checkbox" id="no" name="no" value="No" />
          No
        </label>
        <button type="button" className="playerSubmitButton">Submit</button>
      </form>
    </div>
  );
}

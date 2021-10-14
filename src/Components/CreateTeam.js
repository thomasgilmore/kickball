import React from 'react'

export default function CreateTeam() {
  const handleSubmit = e => {
    e.preventDefault()
    // console.log(e.target[0].value);
    // console.log(e.target[1].value);
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Team Name:
          <input type="text" name="Team Name" />
        </label>
        <label>
          Team Color:
          <input type="text" name="Team Color"></input>
        </label>
        <button>Create Team</button>
      </form>
    </div>
  )
}

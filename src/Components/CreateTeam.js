import React from 'react'

export default function CreateTeam() {
    return (
        <div>
            <form>
                <label>Team Name:
                <input type="text" name="Team Name" />
                </label>
                <label>Team Color:
                <input type="text" name="Team Color"></input>
                </label>
                <button>Create Team</button>
            </form>
        </div>
    )
}

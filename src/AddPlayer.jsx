import { useState } from "react"
import "./AddPlayer.css"

const AddPlayer = ({onCancel,onAddPlayer}) =>{

    const [newName,setNewName] = useState("");
    const [newAge,setNewAge] = useState("");
    const [newPosition,setNewPosition] = useState("");

    const handleUpdaterList = (e) => {
    e.preventDefault();
    const newPlayer = {
      id : Math.floor(Math.random()*100),
      name : newName,
      age : parseInt(newAge),
      position : newPosition
    }
    onAddPlayer(newPlayer);
    // after setting the player in the given data file then we need to clear the form data
    setNewName("");
    setNewAge("");
    setNewPosition("")
    }

    return(
    <>
        <form onSubmit={handleUpdaterList}>
          <h1>Add new player</h1>
          <div className="InputDetails">
            <label htmlFor='name'>Name</label>
            <input type='text' id='name' value={newName} onChange={(e) => setNewName(e.target.value)}></input>
          </div>
          <div className="InputDetails">
            <label htmlFor='age'>Age</label>
            <input type='text' id='age' value={newAge} onChange={(e) => setNewAge(e.target.value)}></input>
          </div>
          <div className="InputDetails">
            <label htmlFor='position'>Position</label>
            <input type='text' id='position' value={newPosition} onChange={(e) => setNewPosition(e.target.value)}></input>
          </div>
          <div className="Buttons">
            <button type='submit'>Submit</button>
            <button type= "button" onClick={onCancel}>cancel</button>
          </div>
        </form>
    </>)
}

export default AddPlayer;
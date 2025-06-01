import "./DeletePlayer.css";


const DeletePlayer = ({Players,playerID, onConfirmDelete, onCancel}) => {
    const getPlayerWhichIsGoingToBeDeleted = Players.find((player) => player.id === playerID);
    return(
        <>
            <div className="mainContainer">
                <h1>Player Details</h1>
                <div key={playerID} className="InsideDiv">
                    <h3>playerName: {getPlayerWhichIsGoingToBeDeleted.name}</h3>
                    <h3>playerAge: {getPlayerWhichIsGoingToBeDeleted.age}</h3>
                    <h3>playerPosition: {getPlayerWhichIsGoingToBeDeleted.position}</h3>
                    <div className="ButtonsDiv">
                        <button onClick={() => onConfirmDelete(playerID)}>Delete</button>
                        <button onClick={onCancel}>cancel</button>
                    </div>
                </div> 
            </div>
              
        </>
    )
}

export default DeletePlayer;
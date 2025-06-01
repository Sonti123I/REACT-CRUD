import "./PlayerDetails.css";


const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
}

const PlayerDetails = ({Players,onEdit,onDelete,addPlayer}) => {


    return(
        <div className="DetailsName">
            <h1>FOOTBALL PLAYERS TRACKING</h1>
            <button onClick={addPlayer} id="AddPlayer">Add player</button>
                {
                    Players.map((player) => (
                        <div key={player.id} className="detailsContainer">
                                <div className="DetailsDiv">
                                    <h1>Player ID: {player.id}</h1>
                                    <h1>Player Name: {player.name}</h1>
                                    <h1>Player Age: {player.age}</h1>
                                    <h1>Player Position: {player.position}</h1>
                                </div>
                                <div className="ButtonsInPlayer">
                                    <button onClick={() =>
                                    {
                                        scrollToTop();
                                        onEdit(player.id)
                                    } 
                                    }>Edit Player</button>
                                    <button onClick={() => {
                                        scrollToTop();
                                        onDelete(player.id)
                                    }
                                    }>Delete Player</button>
                                </div>
                        </div>
                    ))
                }
        </div>
    )
}

export default PlayerDetails;
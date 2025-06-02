import "./PlayerDetails.css";


const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
}

const PlayerDetails = ({Players,onEdit,onDelete,addPlayer,searchPlayer,searchPlayerId,clearSearch}) => {

    const getPlayer = () => {
        const foundPlayer = Players.find((player) => player.id === searchPlayerId);
        if(!foundPlayer){
            clearSearch();
        }
        return foundPlayer;
    }

    const gotPlayer = getPlayer();

    return(
        <>{
            parseInt(searchPlayerId) && gotPlayer? 
            (
                <div className="DetailsName">
                    <h1>FOOTBALL PLAYERS TRACKING</h1>
                    <div className="mainButtons">
                        <button onClick={searchPlayer} id="Search">Search</button>
                    </div>  
                    {
                        <div key={searchPlayer} className="detailsContainer">
                                <div className="DetailsDiv">
                                    <h1>Player ID: {gotPlayer.id}</h1>
                                    <h1>Player Name: {gotPlayer.name}</h1>
                                    <h1>Player Age: {gotPlayer.age}</h1>
                                    <h1>Player Position: {gotPlayer.position}</h1>
                                </div>
                                <div className="ButtonsInPlayer">
                                    <button onClick={() =>
                                    {
                                        onEdit(gotPlayer.id)
                                    } 
                                    }>Edit Player</button>
                                    <button onClick={() => {
                                        onDelete(gotPlayer.id)
                                        clearSearch();
                                    }
                                    }>Delete Player</button>
                                </div>
                        </div>
                    }
                </div>
                ):(
                <div className="DetailsName">
                    <h1>FOOTBALL PLAYERS TRACKING</h1>
                    <div className="mainButtons">
                        <button onClick={addPlayer} id="AddPlayer">Add player</button>
                        <button onClick={searchPlayer} id="Search">Search</button>
                    </div>  
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
        </>
    )
}

export default PlayerDetails;

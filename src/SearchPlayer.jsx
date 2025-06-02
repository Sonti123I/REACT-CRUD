import { useState } from "react";
import "./SearchPlayer.css";


const SearchPlayer = ({searchedPlayer}) => {

    const [playerId,setPlayerId] = useState("");

    const handleSearch = (e) => {
        e.preventDefault();
        console.log(playerId);
        searchedPlayer(playerId);
        setPlayerId("");
    }
    

    return(
        <>
        <form className="search-form" onSubmit={handleSearch}>
            <input type="search" value= {playerId} className="search-input" onChange={(e) => setPlayerId(e.target.value)} placeholder="Search with Id"></input>
            <button type="submit" className="search-button">
                <i className='bx  bx-search-alt'></i> 
            </button>
        </form>
        </>
    )
}

export default SearchPlayer;

import { useState } from 'react';
import './App.css';
import data from "./data.json";
import PlayerDetails from './PlayerDetails';
import EditDetails from './EditDetails';
import AddPlayer from './AddPlayer';
import DeletePlayer from './DeletePlayer';
import SearchPlayer from './SearchPlayer';



function App() {

  // These are for players getting created
  const [players,setNewplayer] = useState(data.players);
  const [showForm,setShowForm] = useState(false);
  // These are for players getting created

  // These are for players getting Editted
  const [editId,setEditId] = useState(null);
  const [showEditForm, setShowEditForm] = useState(false);
  // These are for players getting Edited

  // These are for player getting deleted
  const [deleteId,setDeleteId] = useState(null);
  const [showDeleteForm,setShowDeleteForm] = useState(false);
  // These are for player getting deleted

  // These are for player to search
  const [searchId,setSearchId] = useState(null);
  const [showSearchForm,setShowSearchForm] = useState(false);
  // These are for player to search

  // These function is to handle search player event bro 
  const handleSearchId = (id) => {
    setSearchId(id);
  }

  const handleSearchForm = () => {
    setShowSearchForm(true);
    setShowForm(false);
    setShowDeleteForm(false);
    setShowEditForm(false);
  }


  // These is to handle the addplayer component
  const handleShowForm = () => {
    setShowForm(true);
    setShowSearchForm(false);
    setShowDeleteForm(false);
    setShowEditForm(false);
  }
 
   const handleAddPlayer = (newPlayer) => {
    setNewplayer([...players, newPlayer]);
    setShowForm(false); 
  };
  // These is to handle the addPlayer component

  // here we will implement the edited details in the PlayerDetails
  const handleEditId = (id) => {
    setEditId(id);
    setShowEditForm(true);
    setShowSearchForm(false);
    setDeleteId(false);
    setShowForm(false);
  }
  // here we will implement the edited details in the PlayerDetails

  // These is to handle edit details
  const handleUpdateDetails = (updatedPlayer) => {
        setNewplayer(players.map((player) => player.id === updatedPlayer.id?updatedPlayer:player));
        setShowEditForm(false);
    };
  // These is to handle edit details  

  // These is to handle delete details
  const handleDelete = (id) => {
    setDeleteId(id);
    setShowDeleteForm(true);
    setShowEditForm(false);
    setShowSearchForm(false);
    setShowForm(false);
  }

  const handleDeleteDetails = (deleteId) => {
    setNewplayer(players.filter((player) => player.id !== deleteId));
    setShowDeleteForm(false);
  }

  const handleClearSearch = () => {
    setSearchId(null);
  }
  // These is to handle delete details

  return(
    <>
       <div className="MainLayout">
      
      {/* Left Side: Player Details */}
      <div className="LeftPanel">
        <PlayerDetails
          Players={players}
          addPlayer={handleShowForm}
          onEdit={handleEditId}
          onDelete={handleDelete}
          searchPlayer={handleSearchForm}
          searchPlayerId={searchId}
          clearSearch={handleClearSearch}
        />
      </div>

      {/* Right Side: Conditional Rendering of Forms */}
      <div className="RightPanel">
        {showForm && (
          <div className="FormWrapper">
            <AddPlayer
              onAddPlayer={handleAddPlayer}
              onCancel={() => setShowForm(false)}
            />
          </div>
        )}

        {showEditForm && editId !== null && (
          <div className="FormWrapper">
            <EditDetails
              Players={players}
              onUpdatePlayer={handleUpdateDetails}
              onCancel={() => setShowEditForm(false)}
              playerID={editId}
            />
          </div>
        )}

        {showDeleteForm && deleteId !== null && (
          <div className="FormWrapper">
            <DeletePlayer
              Players={players}
              onConfirmDelete={handleDeleteDetails}
              onCancel={() => setShowDeleteForm(false)}
              playerID={deleteId}
            />
          </div>
        )}

        {showSearchForm  && (
          <div className="FormWrapper">
            <SearchPlayer
              onSearch={handleSearchForm}
              searchedPlayer={handleSearchId}
            />
          </div>
        )}

      </div>
    </div>
    </>
  )
}

export default App;

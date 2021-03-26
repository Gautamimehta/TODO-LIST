import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [lists, setLists] = useState([]);

  function addNote(newList) {
    setLists((prevLists) => {
      return [...prevLists, newList];
    });
  }

  function deleteNote(id) {
    setLists((prevLists) => {
      return prevLists.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {lists.map((noteItem, index) => {
        return <Note id={index} item={noteItem.item} onDelete={deleteNote} />;
      })}

      <Footer />
    </div>
  );
}

export default App;

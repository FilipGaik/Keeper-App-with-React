import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);

  function clickHandler(note) {
    setNotes(prevValue => [...prevValue, note]);
  }

  function deleteNote(id) {
    setNotes(prevValue => prevValue.filter((note, index) => id !== index));
  }

  return (
    <div>
      <Header />
      <CreateArea clickHandler={clickHandler} />
      {notes.map((note, index) => <Note key={index} id={index} title={note.title} content={note.content} deleteNote={deleteNote} />)}
      <Footer />
    </div>
  );
}

export default App;
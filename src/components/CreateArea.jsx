import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';

function CreateArea(props) {
  const [note, setNote] = useState({title: "", content: ""});
  const [isPressed, setIsPressed] = useState(false);

  function changeHandler(event) {
    const {name, value} = event.target;

    setNote((prevValue) => ({...prevValue, [name]: value}));
  }

  return (
    <div>
      <form className="create-note">
        <input onChange={changeHandler} name="title" placeholder="Title" value={note.title} hidden={isPressed ? false : true} />
        <textarea onClick={() => setIsPressed(true)} onChange={changeHandler} name="content" placeholder="Take a note..." rows={isPressed ? 3 : 1} value={note.content} />
        <Zoom in={isPressed}>
          <Fab 
          onClick={(event) => {
            props.clickHandler(note); 
            setNote({title: "", content: ""});
            event.preventDefault();
          }}
          >
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;

import { useState } from "react";
import "/public/style.css";
// import notes from "../notes";
import CreateArea from "./CreateArea"

import Entry from "./Entry";

function Notes() {
  const [notes, setNote] = useState([]);

  function handleSubmit(event, item) {
    event.preventDefault();
    if (item.title.trim() !== "" && item.content.trim() !== "") {
      setNote((prevNotes) => [...prevNotes, item]);
    }
  }

  function handleDeleteItem(id) {
    setNote((prevNotes) => {
      return prevNotes.filter((item, index) => {
        return index !== id;
      })
    })
  }
  return (
    <div>
      <CreateArea onSub={handleSubmit} />
      {notes.map((note, index) => (
        <Entry
          key={index}
          id={index}
          noteTitle={note.title}
          noteContent={
            note.content.length > 50
              ? note.content.substring(0, 50) + "..."
              : note.content
          }
          onCheck={handleDeleteItem}
        />
      ))}
    </div>
  );
}

export default Notes;

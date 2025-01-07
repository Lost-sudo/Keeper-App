import React from "react";
import "/public/style.css";
import notes from "../notes";

import Entry from "./Entry";

function Notes() {
  return (
    <>
      {notes.map((note, index) => (
        <Entry 
          key={index}
          noteTitle={note.title}
          noteContent={note.content.length > 50 ? note.content.substring(0, 50) + "..." : note.content}
        />
      ))}
    </>
  )
}

export default Notes;

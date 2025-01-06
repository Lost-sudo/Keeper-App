import React from "react";
import "/public/style.css";

let noteTitle = "Hello";
let noteContent = "World!";

function Notes() {
  return (
    <div className="note">
      <h1>{noteTitle}</h1>
      <p>{noteContent}</p>
    </div>
  );
};

export default Notes;

import React from "react";

function Entry(props) {
  return (
    <div className="note">
      <h1>{props.noteTitle}</h1>
      <p>{props.noteContent}</p>
    </div>
  );
}

export default Entry;
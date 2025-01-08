import React from "react";

function Entry(props) {

  function handleDelete() {
    props.onCheck(props.id)
  }
  return (
    <div className="note">
      <h1>{props.noteTitle}</h1>
      <p>{props.noteContent}</p>
      <button onClick={handleDelete}>DELETE</button>
    </div>
  );
}

export default Entry;
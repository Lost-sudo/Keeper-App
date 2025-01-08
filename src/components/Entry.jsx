import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";

function Entry(props) {

  function handleDelete() {
    props.onCheck(props.id)
  }
  return (
    <div className="note">
      <h1>{props.noteTitle}</h1>
      <p>{props.noteContent}</p>
      <button onClick={handleDelete}><DeleteIcon /></button>
    </div>
  );
}

export default Entry;
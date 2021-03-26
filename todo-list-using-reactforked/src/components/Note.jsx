import React from "react";

function Note(props) {
  function handleClick() {
    props.onDelete(props.id);
  }
  return (
    <div className="note">
      <h1>{props.item}</h1>
      <button onClick={handleClick}>Drop</button>
    </div>
  );
}

export default Note;

import React, { useState } from "react";

function CreateArea(props) {
  const [list, addList] = useState({
    item: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    addList((prevList) => {
      return {
        ...prevList,
        [name]: value
      };
    });
  }

  function addItem(event) {
    props.onAdd(list);
    addList({
      item: ""
    });
    event.preventDefault();
  }
  return (
    <div>
      <form>
        <input
          type="text"
          name="item"
          value={list.item}
          onChange={handleChange}
          placeholder="Add an item"
        />
        <button onClick={addItem}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;

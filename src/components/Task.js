import React from "react";

// || Show the task's text and category.
// || When the delete button is clicked, the task should be removed from the list.
function Task({ text, category, onDelete }) {
  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={() => onDelete(text)}>
        X
      </button>
    </div>
  );
}

export default Task;
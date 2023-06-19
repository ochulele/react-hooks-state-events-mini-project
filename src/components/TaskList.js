import React from "react";
import Task from "./Task";

// || Get the task data from App as a prop.
// || Display each task using the task component. (.map)
// || Use a key prop for each task rendered within the list.
function TaskList({ tasks, onDelete }) {
  return (
    <div className="tasks">
      {tasks?.map((task, i) => (
        <Task
          key={i}
          text={task.text}
          category={task.category}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}

export default TaskList;
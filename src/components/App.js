import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data"; // Pass these down as props to the components that need it.
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [tasks, setTasks] = useState(TASKS);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filterTaskList = () => {
    const newList =
      selectedCategory === "All"
        ? tasks
        : tasks.filter((task) => task.category === selectedCategory);

    return newList;
  };

  function onTaskFormSubmit(task) {
    setTasks([...tasks, task]);
  }

  function handleDelete(text) {
    const updatedTaskList = tasks.filter((task) => task.text !== text);
    setTasks(updatedTaskList);
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter
        categories={CATEGORIES}
        setCategory={setSelectedCategory}
        selectedCategory={selectedCategory}
      />
      <NewTaskForm
        categories={CATEGORIES}
        onTaskFormSubmit={onTaskFormSubmit}
      />
      <TaskList tasks={filterTaskList()} onDelete={handleDelete} />
    </div>
  );
}

export default () => (
  //<AppProvider>
    <App />
  //</AppProvider>
);
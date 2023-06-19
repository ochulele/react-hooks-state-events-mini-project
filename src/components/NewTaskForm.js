import React, { useState } from "react";

// || Get the list of categories from app as a prop.
// || Display <option> elements for each category.
//  || Don't use the 'All' category.
// || Capture all form inputs into a state.
//  || Details input as state.
//  || Category select as state.
// || Add a new task to the list when the form is submitted. Use a callback prop named 'onTaskFormSubmit' that takes a task object as an argument.
function NewTaskForm({ categories, onTaskFormSubmit }) {
  const categoryList = categories.filter((category) => category !== "All");
  const [details, setDetails] = useState("");
  const [category, setCategory] = useState(categoryList[0]);

  function handleCreateTask(event) {
    event.preventDefault();

    const task = {
      text: details,
      category: category
    };

    onTaskFormSubmit(task);
  }

  function handleDetailsChange(event) {
    setDetails(event.target.value);
  }

  function handleCategoryChange(event) {
    setCategory(event.target.value);
  }

  return (
    <form className="new-task-form" onSubmit={handleCreateTask}>
      <label>
        Details
        <input type="text" name="text" value={details} onChange={handleDetailsChange} />
      </label>
      <label>
        Category
        <select name="category" value={category} onChange={handleCategoryChange}>
          {categoryList.map((category) => (
            <option key={category} value={category}>{category}</option>
          ))}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
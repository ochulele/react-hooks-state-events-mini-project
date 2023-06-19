// || Get the category data from App as a prop.
// || Update the component to display <button> elements for each category.
// || The buttons' key prop should be equal to the category.
// || When a button is clicked:
//  || Add 'selected' class.
//  || Only display tasks that match the clicked category.
//  || 'All' should display all tasks.
function CategoryFilter({ categories, setCategory, selectedCategory }) {
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map((category) => (
        <button
          className={selectedCategory === category ? "selected" : ""}
          onClick={(e) => setCategory(e.target.value)}
          value={category}
          key={category}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;
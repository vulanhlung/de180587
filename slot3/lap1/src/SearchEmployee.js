import React from "react";

function SearchEmployee() {
  const employees = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 28 },
    { name: "David", age: 35 },
    { name: "Eva", age: 22 },
  ];

  function handleSearch(event) {
    event.preventDefault();
    const input = event.target.elements.searchName.value;
    const results = employees.filter((e) =>
      e.name.toLowerCase().includes(input.toLowerCase())
    );

    
    console.log("Search results:", results);
    alert(
      results.length > 0
        ? results.map((e) => `${e.name} (${e.age})`).join(", ")
        : "No match found"
    );
  }

  return (
    <div>
      <h2>Search Employee</h2>
      <form onSubmit={handleSearch}>
        <input type="text" name="searchName" placeholder="Enter name..." />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}

export default SearchEmployee;

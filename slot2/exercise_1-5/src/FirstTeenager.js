import React from "react";

function FirstTeenager() {
  const people = [
    { name: "Alice", age: 12 },
    { name: "Bob", age: 17 },
    { name: "Charlie", age: 22 },
    { name: "David", age: 15 },
  ];

  const firstTeenager = people.find(person => person.age >= 13 && person.age <= 19);

  return (
    <div>
      <h2>First Teenager</h2>
      {firstTeenager ? (
        <p>{firstTeenager.name} - {firstTeenager.age} years old</p>
      ) : (
        <p>No teenager found</p>
      )}
    </div>
  );
}

export default FirstTeenager;

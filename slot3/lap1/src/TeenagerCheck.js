import React from "react";

function TeenagerCheck() {
  const employees = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 17 },
    { name: "Charlie", age: 30 },
    { name: "David", age: 19 },
    { name: "Eva", age: 22 },
  ];

  const isTeenager = employees.some((e) => e.age >= 10 && e.age <= 20);

  return (
    <div>
      <h2>Check if any employee is a teenager</h2>
      <p>Is there any teenager? {isTeenager.toString()}</p>
    </div>
  );
}

export default TeenagerCheck;

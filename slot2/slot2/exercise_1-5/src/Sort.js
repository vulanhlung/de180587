import React from "react";

function SortPeople() {
  const people = [
    { name: "Alice", age: 25, occupation: "Engineer" },
    { name: "Bob", age: 22, occupation: "Doctor" },
    { name: "Charlie", age: 30, occupation: "Engineer" },
    { name: "David", age: 28, occupation: "Doctor" },
    { name: "Eva", age: 35, occupation: "Artist" },
  ];
  const sortedByName = [...people].sort((a, b) => a.name.localeCompare(b.name));
  const sortedByAge = [...people].sort((a, b) => a.age - b.age);
  return (
    <div>
      <h2>Danh sách theo TÊN</h2>
      <ul>
        {sortedByName.map((person, index) => (
          <li key={`name-${index}`}>
            {person.name} - {person.age} - {person.occupation}
          </li>
        ))}
      </ul>

      <h2>Danh sách theo TUỔI</h2>
      <ul>
        {sortedByAge.map((person, index) => (
          <li key={`age-${index}`}>
            {person.name} - {person.age} - {person.occupation}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default SortPeople;

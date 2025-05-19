import React from "react";

function FindOldestYoungest() {
  const people = [
    { name: "Alice", age: 25, occupation: "Engineer" },
    { name: "Bob", age: 22, occupation: "Doctor" },
    { name: "Charlie", age: 30, occupation: "Engineer" },
    { name: "David", age: 28, occupation: "Doctor" },
    { name: "Eva", age: 35, occupation: "Artist" },
  ];

  // Tìm người lớn tuổi nhất và nhỏ tuổi nhất
  const oldestPerson = people.reduce((max, person) =>
    person.age > max.age ? person : max
  );

  const youngestPerson = people.reduce((min, person) =>
    person.age < min.age ? person : min
  );

  return (
    <div>
      <h2>Người lớn tuổi nhất</h2>
      <p>
        {oldestPerson.name} - {oldestPerson.age} tuổi - {oldestPerson.occupation}
      </p>

      <h2>Người nhỏ tuổi nhất</h2>
      <p>
        {youngestPerson.name} - {youngestPerson.age} tuổi - {youngestPerson.occupation}
      </p>
    </div>
  );
}

export default FindOldestYoungest;

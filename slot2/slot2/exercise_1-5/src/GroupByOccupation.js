import React from "react";

function GroupPeople() {
  const people = [
    { name: "Alice", age: 25, occupation: "Engineer" },
    { name: "Bob", age: 22, occupation: "Doctor" },
    { name: "Charlie", age: 30, occupation: "Engineer" },
    { name: "David", age: 28, occupation: "Doctor" },
    { name: "Eva", age: 35, occupation: "Artist" },
  ];

  // Nhóm theo nghề nghiệp
  const groupByOccupation = (list) => {
    return list.reduce((acc, person) => {
      const { occupation } = person;
      if (!acc[occupation]) {
        acc[occupation] = [];
      }
      acc[occupation].push(person);
      return acc;
    }, {});
  };

  const groupedPeople = groupByOccupation(people);

  return (
    <div>
      <h2>Danh sách theo NGHỀ NGHIỆP</h2>
      {Object.entries(groupedPeople).map(([occupation, group], index) => (
        <div key={index}>
          <h3>{occupation}</h3>
          <ul>
            {group.map((person, idx) => (
              <li key={`${occupation}-${idx}`}>
                {person.name} - {person.age} - {person.occupation}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default GroupPeople;

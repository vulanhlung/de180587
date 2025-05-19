import React from "react";

function AverageAgeByOccupation() {
  const people = [
    { name: "Alice", age: 25, occupation: "Engineer" },
    { name: "Bob", age: 22, occupation: "Doctor" },
    { name: "Charlie", age: 30, occupation: "Engineer" },
    { name: "David", age: 28, occupation: "Doctor" },
    { name: "Eva", age: 35, occupation: "Artist" },
  ];

  // Nhóm người theo nghề và tính độ tuổi trung bình
  const getAverageAges = (list) => {
    const occupationGroups = {};

    list.forEach(({ age, occupation }) => {
      if (!occupationGroups[occupation]) {
        occupationGroups[occupation] = { totalAge: 0, count: 0 };
      }
      occupationGroups[occupation].totalAge += age;
      occupationGroups[occupation].count += 1;
    });

    // Tính trung bình
    const averageByOccupation = {};
    for (const [occupation, { totalAge, count }] of Object.entries(occupationGroups)) {
      averageByOccupation[occupation] = (totalAge / count).toFixed(2); // giữ 2 chữ số thập phân
    }

    return averageByOccupation;
  };

  const averages = getAverageAges(people);

  return (
    <div>
      <h2>Tuổi trung bình theo nghề nghiệp</h2>
      <ul>
        {Object.entries(averages).map(([occupation, avgAge]) => (
          <li key={occupation}>
            {occupation}: {avgAge} tuổi
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AverageAgeByOccupation;

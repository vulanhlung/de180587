import React from "react";
function AreAllTeenagers() {
  const people = [
    { name: "Alice", age: 12 },
    { name: "Bob", age: 17 },
    { name: "Charlie", age: 22 },
    { name: "David", age: 15 },
  ];

  const allTeenagers = people.every(
    (person) => person.age >= 13 && person.age <= 19
  );
  let message;
  if (allTeenagers) {
    message= <h2>all Teenagers</h2>;
  }else{
    message= <h2>not all teenagers</h2>;
  }
  return <>
  <h1>Are all teenagers</h1>
  {message}
  </>;
}
export default AreAllTeenagers;

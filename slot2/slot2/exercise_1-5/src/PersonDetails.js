function PersonDetails() {
  const person = {
    name: "John Doe",
    age: 30,
    occupation: "Engineer"
  };

  return (
    <div>
      <h2>people detail</h2>
      <p>Name: {person.name}</p>
      <p>Age: {person.age}</p>
      <p>Occupation: {person.occupation}</p>
    </div>
  );
}

export default PersonDetails;

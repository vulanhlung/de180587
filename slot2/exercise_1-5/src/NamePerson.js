function NamePerson() {
  const names = ["Alice", "Bob", "Charlie"];
  return (
    <div>
      <h2>name person</h2>
      <ul>
        {names.map((name, index) => (
          <li key={index}> {name}</li>
        ))}
      </ul>
    </div>
  );
}
export default NamePerson;

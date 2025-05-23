function SortEmployees() {
  const people = [
    { name: "Alice", age: 25, department: "Engineer" },
    { name: "Bob", age: 22, department: "Doctor" },
    { name: "Charlie", age: 30, department: "Engineer" },
    { name: "David", age: 28, department: "Doctor" },
    { name: "Eva", age: 35, department: "Artist" },
  ];

  const sortByDepartment = [...people].sort((a, b) =>
    a.department.localeCompare(b.department)
  );

  return (
    <>
      <h2>sort employees</h2>
      <ul>
        {sortByDepartment.map(({ name, department}, index ) => (
          <li key={index}>
            {name}-{department}
          </li>
        ))}
      </ul>
    </>
  );
}
export default SortEmployees;

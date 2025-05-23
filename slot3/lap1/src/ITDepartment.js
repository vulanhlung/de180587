function ITDepartment() {
  const employees = [
    { name: "Alice", department: "IT" },
    { name: "Bob", department: "HR" },
    { name: "Charlie", department: "IT" },
    { name: "David", department: "Finance" },
    { name: "Emma", department: "IT" },
  ];
  const itEmployees = employees.filter((emp) => emp.department === "IT");

  return (
    <>
      <h2>IT Department Employees</h2>
      <ul>
        {itEmployees.map((emp, index) => (
          <li key={index}>{emp.name}</li>
        ))}
      </ul>
    </>
  );
}
export default ITDepartment;

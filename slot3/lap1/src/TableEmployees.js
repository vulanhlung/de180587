function TableEmployees() {
  const employees = [
    { id: 1, name: "Anna", department: "HR", age: 50 },
    { id: 2, name: "Brian", department: "IT", age: 40 },
    { id: 3, name: "Clara", department: "Finance", age: 19 },
    { name: "Ann", department: "Finance", age: 22 },
    { name: "Elisabeth", department: "HR", age: 16 },
  ];

  return (
    <>
      <h2>Table Employees</h2>
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>department</th>
          </tr>
        </thead>
        <tbody>
          {employees.map(({id, name, department}) => (
            <tr key={id}>
              <td>{id}</td>
              <td>{name}</td>
              <td>{department}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
export default TableEmployees;

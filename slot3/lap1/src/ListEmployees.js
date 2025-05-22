import React from "react";

function ListEmployees() {
  const employees = [
    { id: 1, name: "Anna", department: "HR", age: 50 },
    { id: 2, name: "Brian", department: "IT", age: 40 },
    { id: 3, name: "Clara", department: "Finance", age: 19 },
    { name: "Ann", department: "Finance", age: 22 },
    { name: "Elisabeth", department: "HR", age: 16 },
  ];
  return (
    <>
      <h2>List Employees</h2>
      <ul>
        {employees.map(({name, department, id}) => (
          <li key={id}>
            {name} : {department}
          </li>
        ))}
      </ul>
    </>
  );
}
export default ListEmployees;

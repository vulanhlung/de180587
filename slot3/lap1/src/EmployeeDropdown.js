import React from "react";

function EmployeeDropdown() {
  const employees = ["Alice", "Bob", "Charlie", "David", "Emma"];

  return (
    <div>
      <label>Select Employee: </label>
      <select>
        <option>-- Choose an employee --</option>
        {employees.map((name, index) => (
          <option key={index} value={name}>
            {name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default EmployeeDropdown;


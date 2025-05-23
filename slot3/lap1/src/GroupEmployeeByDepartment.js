function GroupDepartment(){
    const employees = [
    { name: "Alice", department: "HR" },
    { name: "Bob", department: "IT" },
    { name: "Charlie", department: "HR" },
    { name: "David", department: "Finance" },
    { name: "Eva", department: "IT" },
  ];

  const group = employees.reduce((acc, emp) => {
    const dept = emp.department;
    if(!acc[dept]){
        acc[dept]=[];
    }
    acc[dept].push(emp.name);
    return acc;
  }, {});

  return (
    <div>
      <h2>Grouped Employees by Department</h2>
      {Object.entries(group).map(([dept, names]) => (
        <div key={dept}>
          <h3>{dept}</h3>
          <ul>
            {names.map((name, index) => (
              <li key={index}>{name}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default GroupDepartment;
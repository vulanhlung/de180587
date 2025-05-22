
import './App.css';

function App() {
  const employee = { name: "John Doe", age: 30, department: "IT" };
  return (
    <div className="App">
      <h2>employee information</h2>
      <p>Name:{employee.name}</p>
      <p>Age: {employee.age}</p>
      <p>Department:{employee.department}</p>
    </div>
  );
}

export default App;

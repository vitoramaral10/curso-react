import { useState } from "react";
import Banner from "./components/Banner";
import Form from "./components/Form";

function App() {
  const [employees, setEmployees] = useState([]);

  const onAddedNewEmployee = (employee) => {
    setEmployees([...employees, employee]);
    console.log("Colaborador adicionado => ", employee);
  };

  return (
    <div className="App">
      <Banner />
      <Form onAddedEmployee={onAddedNewEmployee} />
    </div>
  );
}

export default App;

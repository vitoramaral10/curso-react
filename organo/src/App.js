import { useState } from "react";
import Banner from "./components/Banner";
import Form from "./components/Form";
import Team from "./components/Team";

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
      <Team name="Programação" />
      <Team name="Frontennd" />
      <Team name="Data Science" />
    </div>
  );
}

export default App;

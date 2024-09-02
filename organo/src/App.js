import { useState } from "react";
import Banner from "./components/Banner";
import Form from "./components/Form";
import Team from "./components/Team";
import Footer from "./components/Footer";

function App() {
  const [teams, setTeams] = useState([
    {
      name: "Programação",
      color: "#57c278",
    },
    {
      name: "Front-End",
      color: "#82CFFA",
    },
    {
      name: "Data Science",
      color: "#A6D157",
    },
    {
      name: "DevOps",
      color: "#E06B69",
    },
    {
      name: "Ux e Design",
      color: "#DB6EBF",
    },
    {
      name: "Mobile",
      color: "#FFBA05",
    },
    {
      name: "Inovação e Gestão",
      color: "#FF8A29",
    },
  ]);

  const [employees, setEmployees] = useState([]);

  const onAddedNewEmployee = (employee) => {
    setEmployees([...employees, employee]);
  };

  const onDeletedEmployee = (employee) => {
    setEmployees(employees.filter((e) => e !== employee));
  };

  const onChangeTeamColor = (team, color) => {
    setTeams(
      teams.map((time) =>
        time.name === team ? { ...time, color: color } : time
      )
    );
  };

  return (
    <div className="App">
      <Banner />
      <Form
        onAddedEmployee={onAddedNewEmployee}
        teams={teams.map((team) => team.name)}
      />
      {teams.map((team) => (
        <Team
          team={team}
          key={team.name}
          employees={employees.filter(
            (employee) => employee.team === team.name
          )}
          onDelete={onDeletedEmployee}
          onChangeColor={onChangeTeamColor}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;

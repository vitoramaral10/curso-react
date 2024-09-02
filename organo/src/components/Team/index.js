import hexToRgbA from "hex-to-rgba";
import Employee from "../Employee";
import "./Team.css";

const Team = (props) => {
  const css = {
    backgroundImage: "url(/imagens/fundo.png)",
    backgroundColor: hexToRgbA(props.team.color, 0.6),
  };

  return (
    props.employees.length > 0 && (
      <section className="team" style={css}>
        <input
          type="color"
          className="input-color"
          value={props.team.color}
          onChange={(e) => props.onChangeColor(props.team.name, e.target.value)}
        />
        <h3 style={{ borderBottom: `4px solid ${props.team.color}` }}>
          {props.team.name}
        </h3>
        <div className="employees">
          {props.employees.map((employee, index) => {
            return (
              <Employee
                employee={employee}
                key={employee.name}
                backgroundColor={props.team.color}
                onDelete={props.onDelete}
              />
            );
          })}
        </div>
      </section>
    )
  );
};

export default Team;

import Employee from "../Employee";
import "./Team.css";

const Team = (props) => {
  const css = {
    backgroundColor: props.team.secondaryColor,
  };

  return (
    props.employees.length > 0 && (
      <section className="team" style={css}>
        <h3 style={{ borderBottom: `4px solid ${props.team.primaryColor}` }}>
          {props.team.name}
        </h3>
        <div className="employees">
          {props.employees.map((employee, index) => {
            return (
              <Employee
                employee={employee}
                key={employee.name}
                backgroundColor={props.team.primaryColor}
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

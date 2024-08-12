import "./Employee.css";

const Employee = (props) => {
  return (
    <div className="employee">
      <div className="header">
        <img src={props.employee.image} alt={props.employee.name} />
      </div>
      <div className="footer">
        <h4>{props.employee.name}</h4>
        <h5>{props.employee.role}</h5>
      </div>
    </div>
  );
};

export default Employee;

import { AiFillCloseCircle } from "react-icons/ai";
import "./Employee.css";

const Employee = (props) => {
  return (
    <div className="employee">
      <AiFillCloseCircle
        size={25}
        className="delete-employee"
        onClick={() => props.onDelete(props.employee)}
      />
      <div
        className="employee-image"
        style={{ backgroundColor: props.backgroundColor }}
      >
        <img src={props.employee.image} alt={props.employee.name} />
      </div>
      <div className="employee-info">
        <h4>{props.employee.name}</h4>
        <h5>{props.employee.role}</h5>
      </div>
    </div>
  );
};

export default Employee;

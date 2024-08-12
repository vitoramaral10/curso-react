import "./Employee.css";

const Employee = (props) => {
  return (
    <div className="employee">
      <div className="header">
        <img src="https://github.com/vitoramaral10.png" alt="Vitor Amaral" />
      </div>
      <div className="footer">
        <h4>Vitor Melo</h4>
        <h5>Analista</h5>
      </div>
    </div>
  );
};

export default Employee;

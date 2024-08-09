import "./SelectField.css";

const SelectField = (props) => {
  return (
    <div className="campo-select">
      <label>{props.label}</label>
      <select
        value={props.value}
        onChange={(event) => props.onSelect(event.target.value)}
      >
        {props.items.map((item) => (
          <option key={item}>{item}</option>
        ))}
      </select>
    </div>
  );
};

export default SelectField;

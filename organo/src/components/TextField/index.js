import "./TextField.css";

const TextField = (props) => {
  return (
    <div className="campo-texto">
      <label>{props.label}</label>
      <input
        placeholder={props.placeholder}
        required={props.required}
        value={props.value}
        onChange={props.onChange}
      />
    </div>
  );
};

export default TextField;

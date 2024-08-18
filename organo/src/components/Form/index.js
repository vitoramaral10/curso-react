import { useState } from "react";
import PrimaryButton from "../PrimaryButton";
import SelectField from "../SelectField";
import TextField from "../TextField";
import "./Form.css";

const Form = (props) => {
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [image, setImage] = useState("");
  const [team, setTeam] = useState("");

  const onSave = (event) => {
    event.preventDefault();

    props.onAddedEmployee({ name, role, image, team });

    setName("");
    setRole("");
    setImage("");
    setTeam("");
  };

  return (
    <section className="form">
      <form onSubmit={onSave}>
        <h2>Preencha os dados para crirar o card do colaborador.</h2>
        <TextField
          required={true}
          label="Nome"
          placeholder="Digite seu nome"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <TextField
          required={true}
          label="Cargo"
          placeholder="Digite seu cargo"
          value={role}
          onChange={(event) => setRole(event.target.value)}
        />
        <TextField
          label="Imagem"
          placeholder="Informe o endereço da imagem"
          value={image}
          onChange={(event) => setImage(event.target.value)}
        />
        <SelectField
          label="Time"
          items={props.teams}
          value={team}
          onSelect={setTeam}
        />
        <PrimaryButton>Criar Card</PrimaryButton>
      </form>
    </section>
  );
};

export default Form;

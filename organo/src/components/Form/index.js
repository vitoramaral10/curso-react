import PrimaryButton from "../PrimaryButton";
import SelectField from "../SelectField";
import TextField from "../TextField";
import "./Form.css";

const Form = () => {
  const times = [
    "Programação",
    "Front-End",
    "Data Science",
    "DevOps",
    "Ux e Design",
    "Mobile",
    "Inovação e Gestão",
  ];

  const aoSalvar = (event) => {
    event.preventDefault();
    console.log("Form foi submetido");
  };

  return (
    <section className="form">
      <form onSubmit={aoSalvar}>
        <h2>Preencha os dados para crirar o card do colaborador.</h2>
        <TextField required={true} label="Nome" placeholder="Digite seu nome" />
        <TextField
          required={true}
          label="Cargo"
          placeholder="Digite seu cargo"
        />
        <TextField label="Imagem" placeholder="Informe o endereço da imagem" />
        <SelectField label="Time" items={times} />
        <PrimaryButton>Criar Card</PrimaryButton>
      </form>
    </section>
  );
};

export default Form;

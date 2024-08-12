import "./Team.css";

const Team = (props) => {
  const css = {
    backgroundColor: props.team.secondaryColor,
  };
  

  return (
    <section className="team" style={css}>
      <h3 style={{ borderBottom: `4px solid ${props.team.primaryColor}` }}>
        {props.team.name}
      </h3>
    </section>
  );
};

export default Team;

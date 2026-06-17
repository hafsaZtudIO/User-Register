function ChildCards(props) {
  return (
    <div className="child-card">
      <h3>{props.title}</h3>

      <label>
        Name:
        <input
          type="text"
          value={props.name}
          onChange={(event) => props.onNameChange(event.target.value)}
        />
      </label>

      <label>
        DOB:
        <input
          type="date"
          value={props.dob}
          onChange={(event) => props.onDobChange(event.target.value)}
        />
      </label>
    </div>
  );
}

export default ChildCards;

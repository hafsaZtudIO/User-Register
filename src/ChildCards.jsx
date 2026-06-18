function ChildCards({ title, name, dob, onNameChange, onDobChange }) {
  return (
    <div className="child-card">
      <h3>{title}</h3>

      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={(event) => onNameChange(event.target.value)}
        />
      </label>

      <label>
        DOB:
        <input
          type="date"
          value={dob}
          onChange={(event) => onDobChange(event.target.value)}
        />
      </label>
    </div>
  );
}

export default ChildCards;

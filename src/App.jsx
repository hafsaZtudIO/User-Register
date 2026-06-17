import { useState } from "react";
import ChildCards from "./ChildCards.jsx";

function App() {
  const [user, setUser] = useState({
    name: "",
    dob: "",
    address: "",
    fee: "",
    childrenNumber: 0,
  });
  const [children, setChildren] = useState([]);
  const [submitted, setSubmitted] = useState(null);

  function changeUser(event) {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  }

  function changeChildrenNumber(event) {
    const value = event.target.value;
    const number = value === "" ? 0 : Math.max(0, Number(value));
    const newChildren = [];

    for (let i = 0; i < number; i++) {
      newChildren.push(children[i] || { name: "", dob: "" });
    }

    setUser({ ...user, childrenNumber: value === "" ? "" : number });
    setChildren(newChildren);
  }

  function changeChild(index, field, value) {
    const newChildren = [...children];
    newChildren[index] = { ...newChildren[index], [field]: value };
    setChildren(newChildren);
  }

  function submitForm() {
    setSubmitted({
      user,
      children,
    });
  }

  return (
    <div className="page">
      <main className="register-box">
        <h1>User Register</h1>

        <div className="register-area">
          {!submitted ? (
            <>
            <section className="user-info">
              <label>
                Name:
                <input
                  type="text"
                  name="name"
                  value={user.name}
                  onChange={changeUser}
                  placeholder="Enter name"
                />
              </label>

              <label>
                DOB:
                <input
                  type="date"
                  name="dob"
                  value={user.dob}
                  onChange={changeUser}
                />
              </label>

              <label>
                Address:
                <textarea
                  name="address"
                  value={user.address}
                  onChange={changeUser}
                  placeholder="Enter address"
                ></textarea>
              </label>
            </section>

            <section className="side-info">
              <label>
                Fee:
                <div className="money-input">
                  <span>$</span>
                  <input
                    type="number"
                    name="fee"
                    value={user.fee}
                    onChange={changeUser}
                    placeholder="0"
                    min="0"
                  />
                </div>
              </label>

              <label>
                Children:
                <input
                  type="number"
                  name="childrenNumber"
                  value={user.childrenNumber}
                  onChange={changeChildrenNumber}
                  min="0"
                />
              </label>
            </section>

            <section className="children-area">
              {children.map((child, index) => (
                <ChildCards
                  key={index}
                  title={`c${index + 1}`}
                  name={child.name}
                  dob={child.dob}
                  onNameChange={(value) => changeChild(index, "name", value)}
                  onDobChange={(value) => changeChild(index, "dob", value)}
                />
              ))}
            </section>

            <button type="button" onClick={submitForm}>
              Submit
            </button>
            </>
          ) : (
            <section className="display-info">
              <h2>User Info entered</h2>
              <p>Name: {submitted.user.name}</p>
              <p>DOB: {submitted.user.dob}</p>
              <p>Address: {submitted.user.address}</p>
              <p>Fee: ${submitted.user.fee}</p>

              <h2>Child Info entered</h2>
              <p>Children: {submitted.children.length}</p>
              {submitted.children.map((child, index) => (
                <p key={index}>
                  Child {index + 1}: {child.name} - {child.dob}
                </p>
              ))}

              <h2>Cards Components</h2>
              <div className="submitted-cards">
                {submitted.children.map((child, index) => (
                  <div className="result-card" key={index}>
                    <h3>c{index + 1}</h3>
                    <p>Name: {child.name}</p>
                    <p>DOB: {child.dob}</p>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>
      </main>
    </div>
  );
}

export default App;

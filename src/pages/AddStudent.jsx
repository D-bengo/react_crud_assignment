import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddStudent() {
  const [student, setStudent] = useState({
    name: "",
    email: "",
    course: ""
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setStudent({
      ...student,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("http://localhost:3001/students", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(student)
    }).then(() => navigate("/"));
  };

  return (
    <div>
      <h2>Add Student</h2>

      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Name" onChange={handleChange} required />
        <br /><br />

        <input name="email" placeholder="Email" onChange={handleChange} required />
        <br /><br />

        <input name="course" placeholder="Course" onChange={handleChange} required />
        <br /><br />

        <button type="submit">Add Student</button>
      </form>
    </div>
  );
}

export default AddStudent;

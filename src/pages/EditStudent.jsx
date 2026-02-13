import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function EditStudent() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [student, setStudent] = useState({
    name: "",
    email: "",
    course: ""
  });

  useEffect(() => {
    fetch(`http://localhost:3001/students/${id}`)
      .then(res => res.json())
      .then(data => setStudent(data));
  }, [id]);

  const handleChange = (e) => {
    setStudent({
      ...student,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(`http://localhost:3001/students/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(student)
    }).then(() => navigate("/"));
  };

  return (
    <div>
      <h2>Edit Student</h2>

      <form onSubmit={handleSubmit}>
        <input name="name" value={student.name} onChange={handleChange} required />
        <br /><br />

        <input name="email" value={student.email} onChange={handleChange} required />
        <br /><br />

        <input name="course" value={student.course} onChange={handleChange} required />
        <br /><br />

        <button type="submit">Update Student</button>
      </form>
    </div>
  );
}

export default EditStudent;

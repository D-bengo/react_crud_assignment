import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Home() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/students")
      .then(res => res.json())
      .then(data => setStudents(data));
  }, []);

  const handleDelete = (id) => {
    const confirmDelete = window.confirm("Are you sure?");
    if (confirmDelete) {
      fetch(`http://localhost:3001/students/${id}`, {
        method: "DELETE"
      }).then(() => {
        setStudents(students.filter(student => student.id !== id));
      });
    }
  };

  return (
    <div>
      <h2>All Students</h2>

      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Course</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map(student => (
            <tr key={student.id}>
              <td>{student.name}</td>
              <td>{student.email}</td>
              <td>{student.course}</td>
              <td>
                <Link to={`/view/${student.id}`}>View</Link> |{" "}
                <Link to={`/edit/${student.id}`}>Edit</Link> |{" "}
                <button onClick={() => handleDelete(student.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Home;

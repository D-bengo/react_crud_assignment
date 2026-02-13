import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ViewStudent() {
  const { id } = useParams();
  const [student, setStudent] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3001/students/${id}`)
      .then(res => res.json())
      .then(data => setStudent(data));
  }, [id]);

  if (!student) return <p>Loading...</p>;

  return (
    <div>
      <h2>Student Details</h2>
      <p><strong>Name:</strong> {student.name}</p>
      <p><strong>Email:</strong> {student.email}</p>
      <p><strong>Course:</strong> {student.course}</p>
    </div>
  );
}

export default ViewStudent;

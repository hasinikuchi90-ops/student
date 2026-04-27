import { useEffect, useState } from "react";

function App() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/students")
      .then(res => res.json())
      .then(data => setStudents(data));
  }, []);

  return (
    <div>
      <h1>Students</h1>
      {students.map(s => (
        <p key={s._id}>{s.name} - {s.course}</p>
      ))}
    </div>
  );
}

export default App;
import React, { useState } from "react";

function ScholarshipType() {
  const [type, setType] = useState("");
  const [filtered, setFiltered] = useState([]);

  const scholarships = [
    { name: "Merit Scholarship", type: "Merit", amount: 50000 },
    { name: "Need-Based Aid", type: "Need", amount: 30000 },
    { name: "Sports Scholarship", type: "Sports", amount: 40000 },
    { name: "SC/ST Scholarship", type: "Category", amount: 35000 }
  ];

  const filterScholarships = (selectedType) => {
    setType(selectedType);
    const result = scholarships.filter(
      (s) => s.type === selectedType
    );
    setFiltered(result);
  };

  const apply = (scholarship) => {
    alert(`Applied for ${scholarship.name}`);
  };

  return (
    <div className="scholarship-page">

      <h2>Select Scholarship Type</h2>

      <div className="type-buttons">
        <button onClick={() => filterScholarships("Merit")}>Merit</button>
        <button onClick={() => filterScholarships("Need")}>Need</button>
        <button onClick={() => filterScholarships("Sports")}>Sports</button>
        <button onClick={() => filterScholarships("Category")}>Category</button>
      </div>

      <div className="results">
        {filtered.map((s, i) => (
          <div className="sch-card" key={i}>
            <h3>{s.name}</h3>
            <p>Type: {s.type}</p>
            <p>Amount: ₹{s.amount}</p>

            <button onClick={() => apply(s)}>Apply</button>
          </div>
        ))}
      </div>

    </div>
  );
}

export default ScholarshipType;
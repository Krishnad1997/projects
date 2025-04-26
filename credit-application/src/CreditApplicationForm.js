import React, { useState } from "react";

const CreditApplicationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    income: "",
    creditScore: "",
    employmentStatus: "employed",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Basic approval logic
    const isApproved = formData.creditScore >= 650 && formData.income >= 30000;
    alert(
      isApproved ? "Credit Application Approved" : "Credit Application Rejected"
    );
  };

  return (
    <div>
      <h1>Credit Application</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Age:</label>
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Income:</label>
          <input
            type="number"
            name="income"
            value={formData.income}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Credit Score:</label>
          <input
            type="number"
            name="creditScore"
            value={formData.creditScore}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Employment Status:</label>
          <select
            name="employmentStatus"
            value={formData.employmentStatus}
            onChange={handleChange}
          >
            <option value="employed">Employed</option>
            <option value="unemployed">Unemployed</option>
            <option value="self-employed">Self-employed</option>
          </select>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CreditApplicationForm;

import React, { useState } from "react";

function FormComponent() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form>
      <label htmlFor="firstName">First Name:</label>
      <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} />
      <label htmlFor="lastName">Last Name:</label>
      <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} />
      <p>
        Hello, {formData.firstName} {formData.lastName}!
      </p>
    </form>
  );
}

export default FormComponent;

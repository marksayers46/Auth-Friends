import React, { useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const AddForm = () => {
  const [formValue, setFormValue] = useState({ name: "", age: "", email: "" });

  const handleSubmit = e => {
    e.preventDefault();
    axiosWithAuth()
      .post("/api/friends", formValue) // post the value of formValue to /api/friends
      .then(res => console.log(res))
      .catch(error => console.error(error));
    setFormValue("");
  };
  const handleChanges = e => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formValue.name}
          onChange={handleChanges}
        />
        <input
          type="text"
          name="age"
          placeholder="Age"
          value={formValue.age}
          onChange={handleChanges}
        />
        <input
          type="text"
          name="email"
          placeholder="Email"
          value={formValue.email}
          onChange={handleChanges}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default AddForm;
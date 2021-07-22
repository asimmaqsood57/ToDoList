// import React from "react";
import React, { useState } from "react";

export const AddTodo = (props) => {
  const [Title, setTitle] = useState("");
  const [desc, setdesc] = useState("");
  const submit = (e) => {
    e.preventDefault();
    if (!Title || !desc) {
      alert("Title or Description cannot be blanked!");
    } else {
      props.addTodo(Title, desc);
    }
  };
  return (
    <div className="container">
      <h3 className="mt-3">Add a todo</h3>
      <form onSubmit={submit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Todo Title
          </label>
          <input
            type="text"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            value={Title}
            className="form-control"
            id="title"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="desc" className="form-label">
            Todo Description
          </label>
          <input
            type="text"
            onChange={(e) => {
              setdesc(e.target.value);
            }}
            value={desc}
            className="form-control"
            id="desc"
          />
        </div>

        <button type="submit" className="btn btn-success">
          Add Todo
        </button>
      </form>
    </div>
  );
};

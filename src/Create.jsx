import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { addTask } from "./TaskReducer";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const Create = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addTask({ id: tasks[tasks.length - 1].id + 1, name, description })
    );
    navigate("/");
    // setName("");
    // setDescription("");
  };
  return (
    <div className="d-flex w-100 vh-100 justify-content-center align-items-center">
      <div className="w-50 border bg-secondary text-white p-5">
        <h3>Add New Task</h3>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Name</label>
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="Task Name"
              // value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label>Description</label>
            <input
              type="text"
              name="description"
              className="form-control"
              placeholder="Task Description"
              // value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <Button variant="info" className="mt-3" type="submit">
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Create;

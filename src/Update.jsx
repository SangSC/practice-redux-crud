import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import { updateTask } from "./TaskReducer";

const Update = () => {
  const { id } = useParams();
  const tasks = useSelector((state) => state.tasks);
  const existingTask = tasks.filter((f) => f.id == id);
  const { name, description } = existingTask[0];
  const [uname, setName] = useState(name);
  const [udescription, setDescription] = useState(description);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch(
      updateTask({
        id: id,
        name: uname,
        description: udescription,
      })
    );
    navigate("/");
  };

  return (
    <div className="d-flex w-100 vh-100 justify-content-center align-items-center">
      <div className="w-50 border bg-secondary text-white p-5">
        <h3>Update Task</h3>
        <form onSubmit={handleUpdate}>
          <div>
            <label>Name</label>
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="Task Name"
              value={uname}
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
              value={udescription}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <Button variant="info" className="mt-3" type="submit">
            Update
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Update;

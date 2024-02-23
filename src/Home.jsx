import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { deleteTask } from "./TaskReducer";

const Home = () => {
  const tasks = useSelector((state) => state.tasks);
  // console.log(tasks);

  const dispatch = useDispatch();
  const handleDelete = (id) => {
    dispatch(deleteTask({ id: id }));
  };

  return (
    <div className="container">
      <h2>CRUD App</h2>
      <Link to="/create">
        <Button variant="success" className="my-3">
          Add Task +
        </Button>
      </Link>

      <table className="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Description</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <tr key={task.id}>
              <th scope="row">{task.id}</th>
              <td>{task.name}</td>
              <td>{task.description}</td>
              <td className="d-flex">
                <Link to={`/edit/${task.id}`}>
                  <Button variant="primary me-2">Edit</Button>
                </Link>
                <Button variant="danger" onClick={() => handleDelete(task.id)}>
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Home;

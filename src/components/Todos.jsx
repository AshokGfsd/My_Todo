import React, { useState } from "react";
import "./Todos.css";
const Todos = ({ name, desc, status, id, onStatus, onDelete, onEdit }) => {
  const [status1, setStatus] = useState(status);
  const Status = (e) => {
    if (e.target.value == "true") {
      setStatus(true);
      onStatus(true, id);
    } else {
      setStatus(false);
      onStatus(false, id);
    }
  };
  const Delete = () => {
    onDelete(id);
  };
  const Edit = () => {
    onEdit(id);
  };
  return (
    <div className="task" id="child" key={id + "1"}>
      <div key={id + "2"}>
        <h3> Name:{name}</h3>
        <p className="unset">Description:</p>
        <p>{desc}</p>
        <label htmlFor="status">Status:</label>
        <select
          name="status"
          id="status"
          className={status1 ? "complete" : "notcomplete"}
          onInput={Status}
          defaultValue={status1}
        >
          <option  value="false">
            Not Complete
          </option>
          <option  value="true">
            Complete
          </option>
        </select>
      </div>
      <div className="buttons">
        <button className="edit" onClick={Edit}>
          Edit
        </button>
        <button className="delete" onClick={Delete}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default Todos;

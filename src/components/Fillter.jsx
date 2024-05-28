import { useState } from "react";
import React from "react";

const Fillter = ({ status, onFillter }) => {
  const [status1, setStatus] = useState(status);
  const [class1, setClass1] = useState(false);

  const Status = (e) => {
    setStatus(e.target.value);
    onFillter(e.target.value);
    if (e.target.value == "All") {
      setClass1(false);
    } else if (e.target.value == "Not Complete") {
      setClass1(false);
    } else if (e.target.value == "Complete") {
      setClass1(true);
    }
  };
  return (
    <div className="fillter">
      <span>My Todo</span>
      <div>
        <label htmlFor="status">Status Fillter:</label>
        <select
          name="status"
          id="status"
          className={class1 ? "complete" : "notcomplete"}
          onInput={Status}
        >
          <option  value="All">
            All
          </option>
          <option value="Not Complete">Not Complete</option>
          <option value="Complete">Complete</option>
        </select>
      </div>
    </div>
  );
};

export default Fillter;

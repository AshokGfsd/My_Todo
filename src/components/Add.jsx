import React, { useEffect } from "react";
import { useState } from "react";

const Add = ({ onChange, name, desc, state, ind }) => {
  const [Name, setName] = useState(name);
  const [Desc, setDesc] = useState(desc);

  const Add = () => {
    onChange([Name, Desc, false]);
  };
  const Edit = () => {
    onChange([Name, Desc, false], ind);
  };
  useEffect(() => {
    setName(name);
    setDesc(desc);
  }, [name]);
  return (
    <div className="addcontainer">
      <input
        type="text"
        value={Name}
        onInput={(e) => setName(e.target.value)}
        placeholder="Todo name"
      />
      <input
        type="text"
        value={Desc}
        onInput={(e) => setDesc(e.target.value)}
        placeholder="Todo description"
      />
      <button id="add-btn" onClick={state ? Edit : Add}>
        {state ? "Update Todo" : "Add Todo"}
      </button>
    </div>
  );
};

export default Add;

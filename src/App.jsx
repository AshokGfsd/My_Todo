import React, { useEffect, useState } from "react";
import "./App.css";
import Add from "./components/Add";
import Todos from "./components/Todos";
import Fillter from "./components/Fillter";

const App = () => {
  const [Arr1, setArr1] = useState([
    ["Office Task-1", "this is the description for My first Task", false],
    ["Office Task-2", "this is the description for My second Task", true],
    ["Office Task-3", "this is the description for My Third Task", false],
  ]);
  const [Fillter1, setFilter] = useState("All");
  const [EditState, setEditState] = useState(false);
  const [Edit, setEdit] = useState(["", "", false]);
  const onFillter = (val) => {
    setFilter(val);
  };
  const onStatus = (val, ind) => {
    const temp = Arr1[ind];
    temp[2] = val;
    Arr1.splice(ind, 1, temp);
  };
  const onChange = (val) => {
    Arr1.push(val);
    const temp = [...Arr1];
    setArr1(temp);
  };
  const onEdit1 = (val, ind) => {
    Arr1[ind] = [...val];
    const temp = [...Arr1];
    setArr1(temp);
    setEditState(false);
  };
  const onEdit = (val) => {
    setEditState(true);
    const temp = Arr1[val];
    setEdit([[...temp], val]);
  };

  const onDelete = (ind) => {
    Arr1.splice(ind, 1);
    const temp = [...Arr1];
    setArr1(temp);
  };
  return (
    <>
      <h1 className="title">My Todo</h1>
      {EditState == true ? (
        <Add
          onChange={onEdit1}
          name={Edit[0][0]}
          desc={Edit[0][1]}
          state={EditState}
          ind={Edit[1]}
        />
      ) : (
        <Add onChange={onChange} name={""} desc={""} state={EditState} />
      )}
      <Fillter status={Fillter1} onFillter={onFillter} />
      {Fillter1 == "All" ? (
        <div className="container">
          {Arr1.map((todo, ind) => (
            <Todos
              onEdit={onEdit}
              name={todo[0]}
              desc={todo[1]}
              status={todo[2]}
              key={ind}
              id={ind}
              onStatus={onStatus}
              onDelete={onDelete}
            />
          ))}
        </div>
      ) : (
        ""
      )}
      {Fillter1 == "Complete" ? (
        <div className="container">
          {Arr1.map(
            (todo, ind) =>
              todo[2] && (
                <Todos
                  onEdit={onEdit}
                  name={todo[0]}
                  desc={todo[1]}
                  status={todo[2]}
                  key={ind}
              id={ind}
                  onStatus={onStatus}
                  onDelete={onDelete}
                />
              )
          )}
        </div>
      ) : (
        ""
      )}
      {Fillter1 == "Not Complete" ? (
        <div className="container">
          {Arr1.map(
            (todo, ind) =>
              !todo[2] && (
                <Todos
                  onEdit={onEdit}
                  name={todo[0]}
                  desc={todo[1]}
                  status={todo[2]}
                  key={ind}
              id={ind}
                  onStatus={onStatus}
                  onDelete={onDelete}
                />
              )
          )}
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default App;

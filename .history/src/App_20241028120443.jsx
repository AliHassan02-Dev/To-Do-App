import React, { useState } from "react";
import TaskList from "./Components/TaskList";

const App = () => {
  const [taskValue, setTaskValue] = useState("");
  const [TaskItems, setTaskItems] = useState([]);

  const handleEvent = (e) => {
    setTaskValue(e.target.value);
  };

  const addTaskItem = () => {
    setTaskItems((prevItem) => {
      return [...prevItem, TaskItems];
    });
  };

  return (
    <div className="mainWrapper">
      <div className="container">
        <div className="topBar">
          <h2>To-Do List</h2>

          <div className="addTask">
            <div className="wrapper">
              <input
                type="text"
                placeholder="Enter Your Task"
                onChange={handleEvent}
                value={taskValue}
              />
              <span className="fa-solid fa-plus" onClick={addTaskItem}></span>
            </div>
          </div>
        </div>
        <div className="bottomBar">
          <ol>
            {TaskItems.map((elem, idx) => {
              <TaskList id={idx} key={idx} data={elem} />;
            })}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default App;

import React from "react";
import TaskList from "./Components/TaskList";

const App = () => {
  return (
    <div className="mainWrapper">
      <div className="container">
        <div className="topBar">
          <h2>To-Do List</h2>

          <div className="addTask">
            <input type="text" placeholder="Enter Your Task" />
            <span className="fa-solid fa-plus"></span>
          </div>
        </div>
        <div className="bottomBar">
          <ol>
            <TaskList />
          </ol>
        </div>
      </div>
    </div>
  );
};

export default App;

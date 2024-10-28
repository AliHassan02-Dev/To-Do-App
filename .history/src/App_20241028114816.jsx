import React from "react";
import TaskList from "./Components/TaskList";

const App = () => {
  return (
    <div className="mainWrapper">
      <div className="container">
        <div className="topBar">
          <h2>To-Do List</h2>
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

import React from "react";

const App = () => {
  return (
    <div className="mainWrapper">
      <div className="container">
        <div className="topBar">
          <h2>To-Do List</h2>
        </div>
        <div className="bottomBar">
          <ol>
            <div className="taskList">
              <li>This is todo task</li>
              <i class="fa-solid fa-xmark"></i>
            </div>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default App;

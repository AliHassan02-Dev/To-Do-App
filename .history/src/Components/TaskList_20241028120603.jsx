import React from "react";

const TaskList = ({ data }) => {
  console.log(data);
  return (
    <div className="taskList">
      <li>This is todo task</li>
      <span class="fa-solid fa-trash"></span>
    </div>
  );
};

export default TaskList;

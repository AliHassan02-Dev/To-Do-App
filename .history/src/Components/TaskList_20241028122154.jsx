import React from "react";

const TaskList = ({ data, id, onRemove }) => {
  return (
    <div className="taskList">
      <li>{data}</li>
      <span
        className="fa-solid fa-trash"
        onClick={() => {
          onRemove(id);
        }}
      ></span>
    </div>
  );
};

export default TaskList;

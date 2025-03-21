import React from "react";

const TaskList = ({ data, id, onRemove, onEdit }) => {
  return (
    <div className="taskList">
      <li>{data}</li>
      <span
        className="fa-solid fa-trash"
        onClick={() => {
          onRemove(id);
        }}
      ></span>
      <span className="fa-solid fa-edit" onClick={() => onEdit(id)}></span>
    </div>
  );
};

export default TaskList;

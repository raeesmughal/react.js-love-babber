import React from 'react';

function TaskItem({ task, onRemoveTask }) {
  return (
    <li className="task-item">
      <span>{task.text}</span>
      <button onClick={() => onRemoveTask(task.id)} className="btn-clear">
        ✕
      </button>
    </li>
  );
}

export default TaskItem;
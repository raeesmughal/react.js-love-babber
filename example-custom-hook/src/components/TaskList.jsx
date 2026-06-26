import React from 'react';
import TaskItem from './TaskItem';

function TaskList({ tasks, onRemoveTask }) {
  if (tasks.length === 0) return <p className="empty-msg">No current active directives.</p>;

  return (
    <ul className="task-list">
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} onRemoveTask={onRemoveTask} />
      ))}
    </ul>
  );
}

export default TaskList;
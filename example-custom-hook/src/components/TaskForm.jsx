import React, { useState } from 'react';

function TaskForm({ onAddTask }) {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    onAddTask(input); // Executing the lifted state modifier function
    setInput('');
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <input
        type="text"
        placeholder="Input system objective..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="submit" className="btn-success">Deploy</button>
    </form>
  );
}

export default TaskForm;
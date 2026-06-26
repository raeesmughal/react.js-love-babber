import React, { useState } from 'react';
import TaskForm from '../components/TaskForm';
import TaskList from '../components/TaskList';
import ProfileCard from '../components/ProfileCard';

function Dashboard() {
  // --- STATE LIFTING ---
  // This state is lifted up to Dashboard because both TaskForm (writer) 
  // and TaskList (reader) need concurrent access to it.
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Learn Custom Hooks base concepts' },
  ]);

  const handleAddTask = (text) => {
    const newTask = { id: Date.now(), text };
    setTasks([...tasks, newTask]);
  };

  const handleRemoveTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="dashboard">
      <h2>Operational Dashboard</h2>
      <div className="dashboard-grid">
        <div className="left-panel">
          <ProfileCard />
        </div>
        <div className="right-panel">
          <h3>Team Directives</h3>
          <TaskForm onAddTask={handleAddTask} />
          <TaskList tasks={tasks} onRemoveTask={handleRemoveTask} />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
import React, { useState } from 'react';
import TaskList from './TaskList';
import AddTask from './CreateStack';

const App = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (task, priority, deadline) => {
    setTasks([...tasks, { id: Date.now(), task, priority, deadline, completed: false }]);
  };

  const toggleTask = (taskId) => {
    setTasks(tasks.map(task => task.id === taskId ? { ...task, completed: !task.completed } : task));
  };

  return (
    <div className="App">
      <h1>Personal Task Manager</h1>
      <AddTask addTask={addTask} />
      <TaskList tasks={tasks} toggleTask={toggleTask} />
    </div>
  );
}

export default App;

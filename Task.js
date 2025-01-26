import React from 'react';

const Task = ({ task, toggleTask }) => {
  const priorityClass = task.priority === 'High' ? 'high-priority' :
                        task.priority === 'Medium' ? 'medium-priority' :
                        'low-priority';
  const priorityTagClass = task.priority === 'High' ? 'high' :
                           task.priority === 'Medium' ? 'medium' : 'low';

  return (
    <div className={`task ${priorityClass}`}>
      <input 
        type="checkbox" 
        checked={task.completed} 
        onChange={() => toggleTask(task.id)} 
      />
      <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
        {task.task}
      </span>
      <span className={`priority-tag ${priorityTagClass}`}>{task.priority} Priority</span>
      <span> - Due: {task.deadline}</span>
    </div>
  );
}

export default Task;

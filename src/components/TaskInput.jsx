import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/tasksSlice';

const TaskInput = () => {
  const [taskText, setTaskText] = useState('');
  const dispatch = useDispatch();

  // Handle saving a new task
  const handleSaveTask = () => {
    if (taskText.trim()) {
      dispatch(addTask(taskText.trim()));
      setTaskText(''); // Clear input after saving
    }
  };
  
  // Handle key press to save on Enter
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSaveTask();
    }
  };

  return (
    <div className="p-4 bg-gray-700 rounded-lg shadow-inner flex items-center gap-4 mb-8">
      <input
        type="text"
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
        onKeyPress={handleKeyPress}
        placeholder="Enter a new task..."
        className="flex-grow p-3 bg-gray-600 text-white border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
      />
      <button
        onClick={handleSaveTask}
        className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors transform hover:scale-105 duration-300"
      >
        Add Task
      </button>
    </div>
  );
};

export default TaskInput;

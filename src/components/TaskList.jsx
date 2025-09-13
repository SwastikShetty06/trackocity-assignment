import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTask } from '../redux/tasksSlice';

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks.tasks);
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState('');

  // Filter tasks based on search term
  const filteredTasks = tasks.filter(task =>
    task.text.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="mt-6">
      {/* Search Bar */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search tasks..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full p-3 bg-gray-700 text-white border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
        />
      </div>
      
      {/* Task List */}
      <div className="space-y-4">
        {filteredTasks.length > 0 ? (
          filteredTasks.map((task) => (
            <div
              key={task.id}
              className="p-4 bg-gray-700 rounded-lg shadow-md flex justify-between items-center transform hover:scale-105 transition-transform duration-300"
            >
              <p className="text-lg text-white">{task.text}</p>
              <button
                onClick={() => dispatch(deleteTask(task.id))}
                className="px-4 py-2 bg-red-600 text-white font-semibold rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 transition-colors transform hover:scale-110 duration-300"
              >
                Delete
              </button>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-400">No tasks found. Add one above!</p>
        )}
      </div>
    </div>
  );
};

export default TaskList;

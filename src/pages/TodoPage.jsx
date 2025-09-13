import React from 'react';
import TaskInput from '../components/TaskInput';
import TaskList from '../components/TaskList';

const TodoPage = () => {
  return (
    <div className="container mx-auto p-4 md:p-8 max-w-3xl">
      <div className="bg-gray-800 p-8 rounded-2xl shadow-2xl">
        <h1 className="text-4xl font-bold text-center mb-8 text-white">My To-Do List</h1>
        
        {/* Component to add new tasks */}
        <TaskInput />
        
        {/* Component to display the list of tasks */}
        <TaskList />
      </div>
    </div>
  );
};

export default TodoPage;


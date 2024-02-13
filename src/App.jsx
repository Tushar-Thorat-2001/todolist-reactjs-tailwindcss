import React, { useState } from 'react';

const App = () => {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const submitHandler = () => {
    if (task.trim() !== '') {
      setTasks([...tasks, task]);
      setTask('');
    }
  };

  const deleteHandler = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  const updateHandler = (index, updatedTask) => {
    const updatedTasks = [...tasks];
    updatedTasks[index] = updatedTask;
    setTasks(updatedTasks);
  };

  return (
    <div className='w-full h-full m-auto'>
      <div className='flex flex-col justify-center gap-5 items-center '>
        <h1 className='font-semibold text-bold text-2xl'>Todo List</h1>
        <div className='mt-5 flex gap-5 '>
          <input
            type='text'
            placeholder='Enter the task'
            value={task}
            className='text-xl border-2 p-5 rounded-lg'
            onChange={(e) => setTask(e.target.value)}
          />
          <button className='p-5 bg-blue-500 rounded-lg' onClick={submitHandler}>
            ADD
          </button>
        </div>

        <div className='p-5 text-xl flex flex-col gap-5'>
          {tasks.map((task, index) => (
            <div key={index} className='flex justify-between items-center rounded-lg'>
              <input
                type='text'
                value={task}
                className='text-xl border-2 p-5 rounded-lg'
                onChange={(e) => updateHandler(index, e.target.value)}
              />
              <button className='ml-2 p-2 bg-red-500 rounded-lg' onClick={() => deleteHandler(index)}>
                Delete
              </button>
              <button className='ml-2 p-2 bg-green-500 rounded-lg' onClick={() => updateHandler(index, task)}>
                Update
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;

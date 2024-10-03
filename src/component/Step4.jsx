import React, { useState, useEffect } from "react";
import { IoMdClose } from "react-icons/io";

const Step4 = ({ handleChange, formData }) => {
  const [tasks, setTasks] = useState([
    { text: "Marketing Website Design", completed: false },
    { text: "Branding Design", completed: false },
    { text: "UI/UX Fundamentals", completed: true },
    { text: "Wireframe and Prototyping", completed: false },
    { text: "Style Guide", completed: false },
    { text: "UX Research and Flows", completed: false },
    { text: "Layout design", completed: false },
  ]);
  const [newTask, setNewTask] = useState("");
  useEffect(() => {
    handleChange({ target: { name: "tasks", value: tasks } });
  }, [tasks]);

  const handleAddTask = (e) => {
    setTasks([...tasks, { text: newTask, completed: false }]);
    setNewTask("");
  };
  const handleToggleCompletion = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };
  const handleRemoveTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };
  return (
    <div className="w-full flex flex-col gap-5 items-center justify-center mb-4">
      <h1 className="text-center  text-2xl font-semibold">Tasks</h1>

      <div className="w-full flex flex-col gap-2">
        <div className="flex flex-col gap-1">
          <label className="font-[500]">Add a task</label>
          <div className="flex items-center justify-between">
            <input
              type="text"
              className="w-[80%] h-9 border ring-1 p-3 ring-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-100 rounded-md"
              placeholder="Enter a task and press Enter"
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
            />
            <button
              className="px-6 py-2 bg-blue-500 text-white rounded-md"
              onClick={handleAddTask}
            >
              Add
            </button>
          </div>
        </div>
        <div className="mt-3">
          <ul className="h-[400px] list-none space-y-2 overflow-y-auto ">
            {tasks.map((task, index) => (
              <li
                key={index}
                className="flex justify-between items-center border p-2 rounded-md"
              >
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    checked={task.completed}
                    onChange={() => handleToggleCompletion(index)}
                    className="mr-2"
                  />
                  <span className={"text-normal text-[14px]"}>{task.text}</span>
                </div>

                {/* Remove Task */}
                <button onClick={() => handleRemoveTask(index)} className="">
                  <IoMdClose size={20} />
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Step4;

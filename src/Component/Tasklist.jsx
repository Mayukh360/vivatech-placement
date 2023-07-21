import React, { useState } from "react";
import TaskItem from "./TaskItem";

export default function Tasklist() {
  const [taskData, setTaskData] = useState("");
  const [submittedTasks, setSubmittedTasks] = useState([]);
  const [updateButton, setUpdateButton] = useState(false);

  const submitHandler = (event) => {
    event.preventDefault();
    if (taskData.trim() !== "") {
      if (updateButton) {
        const updatedTasks = [...submittedTasks];
        updatedTasks.push(taskData);
        setSubmittedTasks(updatedTasks);
      } else {
        setSubmittedTasks([...submittedTasks, taskData]);
      }
      setTaskData("");
      setUpdateButton(false);
    }
  };

  const dltHandler = (id) => {
    const updatedTasks = [...submittedTasks];
    updatedTasks.splice(id, 1);
    setSubmittedTasks(updatedTasks);
  };

  const editHandler = (id) => {
    setUpdateButton(true);
    setTaskData(submittedTasks[id]);
    dltHandler(id);
  };

  const downloadHandler = () => {
    const csvData = submittedTasks.map((task) => `${task}\n`).join("");
    const blob = new Blob([csvData], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "tasklist.csv";
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="p-4 bg-gray-900 min-h-screen">
    <div className="max-w-md mx-auto bg-gradient-to-b from-blue-500 via-teal-500 to-green-500 p-8 rounded shadow">
      <button
        className="bg-purple-800 text-white px-4 py-2 rounded mb-4 "
        onClick={downloadHandler}
      >
        Download
      </button>
      <form onSubmit={submitHandler} className="mb-4">
        <label className="mr-2">Task Name</label>
        <div className="flex">
          <input
            type="text"
            placeholder="Enter Task Name Here"
            value={taskData}
            onChange={(e) => {
              setTaskData(e.target.value);
            }}
            className="border rounded px-2 py-1 flex-1 border-black"
            required
          />
          <button
            className={`bg-gray-800 text-white px-4 py-2 rounded ml-2`}
          >
            {updateButton ? 'Update Task' : 'Add Task'}
          </button>
        </div>
      </form>

      <div>
        <h3 className="text-xl font-bold mb-2">Submitted Tasks:</h3>
        <ul>
          {submittedTasks.map((task, index) => (
            <TaskItem
              key={task}
              task={task}
              onDelete={() => dltHandler(index)}
              onEdit={() => editHandler(index)}
            />
          ))}
        </ul>
      </div>
    </div>
  </div>
  );
}

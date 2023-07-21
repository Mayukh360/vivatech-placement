import React, { useState } from "react";

export default function Tasklist() {
  const [taskData, setTaskData] = useState("");
  const [submittedTasks, setSubmittedTasks] = useState([]);

  const submitHandler = (event) => {
    event.preventDefault();
    if (taskData.trim() !== "") {
      setSubmittedTasks([...submittedTasks, taskData]);
      setTaskData("");
    }
  };
  const dltHandler = (id) => {
    console.log(id);
  };
  const editHandler = (id) => {
    console.log(id);
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <label>Task Name</label>
        <input
          type="text"
          placeholder="Enter Task Name Here"
          value={taskData}
          onChange={(e) => {
            setTaskData(e.target.value);
          }}
          required
        />
        <button>Add Task</button>
      </form>

      <div>
        <h3>Submitted Tasks:</h3>
        <ul>
          {submittedTasks.map((task, index) => (
            <>
              <li key={index}>{task}</li>
              <button
                onClick={() => {
                  dltHandler(index);
                }}
              >
                Edit
              </button>
              <button
                onClick={() => {
                  editHandler(index);
                }}
              >
                Delete
              </button>
            </>
          ))}
        </ul>
      </div>
    </div>
  );
}

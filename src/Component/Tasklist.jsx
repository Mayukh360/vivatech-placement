import React, { useState } from "react";

export default function Tasklist() {
  const [taskData, setTaskData] = useState("");
  const [submittedTasks, setSubmittedTasks] = useState([]);
  const [updateButton,setUpdateButton]=useState(false);

  const submitHandler = (event) => {
    event.preventDefault();
    if (taskData.trim() !== "") {
      setSubmittedTasks([...submittedTasks, taskData]);
      setTaskData("");
    }
    setUpdateButton(false);
  };
  const dltHandler = (id) => {
    // console.log(id);
    const updatedTasks = [...submittedTasks];
    updatedTasks.splice(id, 1);
    setSubmittedTasks(updatedTasks);
  };
  const editHandler = (id) => {
    // console.log(id);
    setUpdateButton(true);
    setTaskData(submittedTasks[id]);
    dltHandler(id);
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
        <button>{updateButton ? "Update Task" : "Add Task"}</button>
      </form>

      <div>
        <h3>Submitted Tasks:</h3>
        <ul>
          {submittedTasks.map((task, index) => (
            <div key={task}>
              <li>{task}</li>
              <button
                onClick={() => {
                  dltHandler(index);
                }}
              >
                Delete
              </button>
              <button
                onClick={() => {
                  editHandler(index);
                }}
              >
                Edit
              </button>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
}

import React from "react";

export default function TaskItem({ task, onDelete, onEdit }) {
  return (
    <div className="border rounded-lg px-4 py-2 mb-2 flex justify-between items-center bg-green-100">
    <div className="flex items-center">
      <span className="text-lg font-medium mr-4">{task}</span>
    </div>
    <div>
      <button
        className="bg-red-500 text-white px-3 py-1 rounded mr-2"
        onClick={onDelete}
      >
        Delete
      </button>
      <button
        className="bg-yellow-500 text-white px-3 py-1 rounded"
        onClick={onEdit}
      >
        Edit
      </button>
    </div>
  </div>
  );
}

import React from "react";

const SelectedTask = ({ task, handleCompletedTask }) => {
  const handleSelectedTask = () => {
    handleCompletedTask(task.id);
  };

  return (
    <div>
      <div className="flex flex-col mb-4">
        <div className="bg-white rounded-md shadow-sm p-4">
          <p className="text-lg font-medium text-[#001931] mb-2">
            {task.title}
          </p>
          <button
            onClick={handleSelectedTask}
            className="btn bg-[#02A53B] text-sm text-white w-full"
          >
            Complete
          </button>
        </div>
      </div>
    </div>
  );
};

export default SelectedTask;

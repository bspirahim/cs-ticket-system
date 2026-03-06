import React from "react";

const ResolvedTask = ({task}) => {
    console.log(task)
  return (
    <div>
      <div className="flex flex-col gap-6">
        <div className="rounded-md shadow-sm p-4 bg-[#E0E7FF] mb-4">
          <p className="text-lg font-medium text-[#001931]">
           {task.title}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ResolvedTask;

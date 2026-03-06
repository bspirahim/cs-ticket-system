import React, { use } from "react";
import TicketCard from "./TicketCard";
import SelectedTask from "./SelectedTask";
import ResolvedTask from "./ResolvedTask";

const TicketsDashboard = ({
  ticketPromise,
  handleAddedTask,
  handleCompletedTask,
  selectedTasks,
  resolvedTasks,
}) => {
  const tickets = use(ticketPromise);

  return (
    <>
      <div className="">
        <div className="grid lg:grid-cols-3 gap-4">
          {/* Left Section: Main Feed */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl text-[#34485A] font-semibold mb-2">
              Customer Tickets
            </h2>

            <div className="grid md:grid-cols-2 gap-4">
              {/* Example Ticket 1: Open */}

              {tickets.map((ticket) => (
                <TicketCard
                  handleAddedTask={handleAddedTask}
                  ticket={ticket}
                ></TicketCard>
              ))}
            </div>
          </div>

          {/* Right Sidebar: Status/Filter */}
          {/* Right Sidebar */}

          <div className=" p-4 rounded-lg h-fit flex flex-col gap-6">
            <div>
              <h2 className="text-2xl text-[#34485A] font-semibold mb-2">
                Task Status
              </h2>

              {selectedTasks.length === 0 ? (
                <p>Select a ticket to add to Task Status</p>
              ) : (
                selectedTasks.map((task) => (
                  <SelectedTask
                    task={task}
                    handleCompletedTask={handleCompletedTask}
                  ></SelectedTask>
                ))
              )}
            </div>

            {/* Resolved Task */}
            <div>
              <h2 className="text-2xl text-[#34485A] font-semibold mb-2">
                Resolved Task
              </h2>
              {resolvedTasks.length === 0 ? (
                <p>No resolved tasks yet.</p>
              ) : (
                resolvedTasks.map((task) => (
                  <ResolvedTask task={task}></ResolvedTask>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TicketsDashboard;

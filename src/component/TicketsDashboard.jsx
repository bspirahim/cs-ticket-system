import React, { use } from "react";
import TicketCard from "./TicketCard";

const TicketsDashboard = ({ ticketPromise }) => {
  const tickets = use(ticketPromise);
  console.log(tickets);
  return (
    <>
      <div className="">
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Left Section: Main Feed */}
          <div className="lg:col-span-2">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">
              Customer Tickets
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Example Ticket 1: Open */}

              {tickets.map((ticket) => (
                <TicketCard ticket={ticket}></TicketCard>
              ))}
            </div>
          </div>

          {/* Right Sidebar: Status/Filter */}
          {/* Right Sidebar */}

          <div className=" p-4 rounded-lg h-fit">
            <h2 className="text-lg font-semibold mb-2">Task Status</h2>

            <p className="text-sm text-gray-500 mb-6">
              Select a ticket to add to Task Status
            </p>

            <h3 className="font-semibold text-gray-700">Resolved Task</h3>

            <p className="text-sm text-gray-400 mt-1">No resolved tasks yet.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default TicketsDashboard;

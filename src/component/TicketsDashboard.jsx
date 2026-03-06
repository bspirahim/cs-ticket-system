import React, { use } from "react";
import TicketCard from "./TicketCard";

const TicketsDashboard = ({
  ticketPromise,
  handleAddedTask,
  selectedTickets,
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

              {selectedTickets.length === 0 ? (
                <p>Select a ticket to add to Task Status</p>
              ) : (
                selectedTickets.map((st) => (
                  <div className="flex flex-col mb-4">
                    <div className="bg-white rounded-md shadow-sm p-4">
                      <p className="text-lg font-medium text-[#001931] mb-2">
                        {st.title}
                      </p>
                      <button className="btn bg-[#02A53B] text-sm text-white w-full">
                        Complete
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Resolved Task */}
            <div>
              <h2 className="text-2xl text-[#34485A] font-semibold mb-2">
                Resolved Task
              </h2>
              <div className="flex flex-col gap-6">
                <div className="rounded-md shadow-sm p-4 bg-[#E0E7FF]">
                  <p className="text-lg font-medium text-[#001931]">
                    Payment Failed - Card Declined
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TicketsDashboard;

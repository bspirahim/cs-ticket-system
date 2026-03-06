import React from "react";

const TicketCard = ({ ticket }) => {
  const {id, title, description, status, priority, date, assigned_to } = ticket;

  return (
    <div>
      <div className="bg-white rounded-md shadow-sm p-4">
        <div className="flex justify-between items-center">
          <h3 className="font-medium text-gray-700 text-lg">{title}</h3>
          <span
            className={`flex items-center gap-2 px-3 py-1 rounded-full text-base font-medium border-green-100 ${
              status === "Open"
                ? "bg-[#B9F8CF] text-[#0B5E06]"
                : "bg-[#F8F3B9] text-[#9C7700]"
            }`}
          >
            <span
              className={`w-4 h-4 rounded-full animate-pulse ${status === "Open" ? "bg-[#02A53B]" : "bg-[#FEBB0C]"}`}
            ></span>
            {status}
          </span>
        </div>
        <p className="text-[#627382] text-base mt-2">{description}</p>
        <div className="flex justify-between items-center mt-4 text-xs text-gray-500">
          <div>
            <span className="text-[#627382] text-sm font-medium">#{id}</span>
            <span className={`ml-2 font-medium ${priority === "HIGH PRIORITY"? "text-[#F83044]": priority === "MEDIUM PRIORITY"? "text-[#FEBB0C]": "text-[#02A53B]"}`}>
              {priority}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[#627382] text-sm ">{assigned_to}</span>
            <span>{date}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketCard;

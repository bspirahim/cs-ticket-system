import React, { use } from "react";

const TicketsDashboard = ({ ticketPromise }) => {
  const tickets = use(ticketPromise);
  console.log(tickets);
  return (
    <>
      
    </>
  );
};

export default TicketsDashboard;

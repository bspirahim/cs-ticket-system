import { Suspense, useState } from "react";
import "./App.css";
import Banner from "./component/Banner";
import Navbar from "./component/Navbar";
import TicketsDashboard from "./component/TicketsDashboard";

const fetchTickets = async () => {
  const res = await fetch("/tickets.json");
  return res.json();
};

const ticketPromise = fetchTickets();

function App() {
  const [selectedTickets, setSelectedTickets] = useState([]);
  const handleAddedTask = (ticket) => {
    setSelectedTickets((prev) => [...prev, ticket]);
  };

  return (
    <div className="">
      <Navbar></Navbar>
      <main className="max-w-[1440px] mx-auto">
        <Banner selectedTickets={selectedTickets}></Banner>
        <Suspense fallback={<p>tickets data...</p>}>
          <TicketsDashboard handleAddedTask={handleAddedTask} selectedTickets={selectedTickets} ticketPromise={ticketPromise}></TicketsDashboard>
        </Suspense>
      </main>
    </div>
  );
}

export default App;

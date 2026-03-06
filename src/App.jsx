import { Suspense } from "react";
import "./App.css";
import Banner from "./component/Banner";
import Navbar from "./component/Navbar";
import TicketsDashboard from "./component/TicketsDashboard";

const fetchTickets = async () => {
  const res = await fetch("/tickets.json");
  console.log(res);
  return res.json();
};

const ticketPromise = fetchTickets();
console.log(ticketPromise);

function App() {
  return (
    <div className="">
      <Navbar></Navbar>
      <main className="max-w-[1280px] mx-auto">
        <Banner></Banner>
        <Suspense fallback={<p>tickets data...</p>}>
          <TicketsDashboard ticketPromise={ticketPromise}></TicketsDashboard>
        </Suspense>
      </main>
    </div>
  );
}

export default App;

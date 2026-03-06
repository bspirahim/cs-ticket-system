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
  const [selectedTasks, setSelectedTasks] = useState([]);
  const [resolvedTasks, setResolvedTasks] = useState([]);

  // for task status
  const handleAddedTask = (ticket) => {
    const exitsTicket = selectedTasks.find((t) => t.id === ticket.id);
    if (exitsTicket) {
      alert("This ticket already added on the task list");
    } else {
      setSelectedTasks((prev) => [...prev, ticket]);
    }
  };

  const handleCompletedTask = (taskId) => {
    const completedTask = selectedTasks.find((task) => task.id === taskId);
    setSelectedTasks((prev) => prev.filter((task) => task.id !== taskId));
    setResolvedTasks((prev) => [...prev, completedTask]);
    console.log("resolve task", taskId);
  };

  console.log(resolvedTasks)

  return (
    <div className="">
      <Navbar></Navbar>
      <main className="max-w-[1440px] mx-auto">
        <Banner selectedTasks={selectedTasks} resolvedTasks={resolvedTasks}></Banner>
        <Suspense fallback={<p>tickets data...</p>}>
          <TicketsDashboard
            handleAddedTask={handleAddedTask}
            handleCompletedTask={handleCompletedTask}
            selectedTasks={selectedTasks}
            resolvedTasks={resolvedTasks}
            ticketPromise={ticketPromise}
          ></TicketsDashboard>
        </Suspense>
      </main>
    </div>
  );
}

export default App;

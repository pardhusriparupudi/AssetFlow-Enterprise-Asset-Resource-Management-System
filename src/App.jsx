import { useState } from "react";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Assets from "./pages/Assets";
import Bookings from "./pages/Bookings";
import Maintenance from "./pages/Maintenance";
import Notifications from "./pages/Notifications";

function App() {

  const [loggedIn, setLoggedIn] = useState(false);
  const [page, setPage] = useState("dashboard");

  // Show login first
  if (!loggedIn) {
    return <Login setLoggedIn={setLoggedIn} />;
  }

  // After login, show pages
  if (page === "dashboard") {
    return <Dashboard setPage={setPage} />;
  }

  if (page === "assets") {
    return <Assets setPage={setPage} />;
  }

  if (page === "bookings") {
    return <Bookings setPage={setPage} />;
  }

  if (page === "maintenance") {
    return <Maintenance setPage={setPage} />;
  }

  if (page === "notifications") {
    return <Notifications setPage={setPage} />;
  }

  return <Dashboard setPage={setPage} />;
}

export default App;
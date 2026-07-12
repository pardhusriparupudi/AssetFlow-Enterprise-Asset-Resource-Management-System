import "./Dashboard.css";
import Sidebar from "../components/Sidebar";

function Notifications({ setPage }) {

  return (

    <div className="dashboard">

      <Sidebar setPage={setPage} />

      <div className="content">

        <h1>Notifications</h1>

        <div className="cards">

          <div className="card">
            <h2>🔔</h2>
            <p><strong>Laptop Booking Approved</strong></p>
            <small>Today - 10:30 AM</small>
          </div>

          <div className="card">
            <h2>⚠</h2>
            <p><strong>Projector Maintenance Tomorrow</strong></p>
            <small>Today - 9:00 AM</small>
          </div>

          <div className="card">
            <h2>📢</h2>
            <p><strong>New Asset Added Successfully</strong></p>
            <small>Yesterday</small>
          </div>

          <div className="card">
            <h2>✅</h2>
            <p><strong>Printer Maintenance Completed</strong></p>
            <small>Yesterday</small>
          </div>

          <div className="card">
            <h2>💻</h2>
            <p><strong>New Dell Laptop Assigned</strong></p>
            <small>2 Days Ago</small>
          </div>

          <div className="card">
            <h2>📦</h2>
            <p><strong>10 New Monitors Added</strong></p>
            <small>3 Days Ago</small>
          </div>

        </div>

      </div>

    </div>

  );
}

export default Notifications;
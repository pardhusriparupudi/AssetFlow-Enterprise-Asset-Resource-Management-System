import "./Dashboard.css";
import Sidebar from "../components/Sidebar";

function Dashboard({ setPage }) {
  return (
    <div className="dashboard">

      <Sidebar setPage={setPage} />

      <div className="content">

        <h1>Welcome Admin 👋</h1>
        <p>Enterprise Asset Management Dashboard</p>

        {/* Dashboard Cards */}

        <div className="cards">

          <div className="card">
            <h2>150</h2>
            <p>Total Assets</p>
          </div>

          <div className="card">
            <h2>95</h2>
            <p>Available</p>
          </div>

          <div className="card">
            <h2>25</h2>
            <p>Booked</p>
          </div>

          <div className="card">
            <h2>12</h2>
            <p>Maintenance</p>
          </div>

          <div className="card">
            <h2>70</h2>
            <p>Employees</p>
          </div>

          <div className="card">
            <h2>5</h2>
            <p>Pending Requests</p>
          </div>

        </div>

        {/* Recent Activities */}

        <h2 style={{ marginTop: "40px" }}>
          Recent Activities
        </h2>

        <table>

          <thead>

            <tr>
              <th>Activity</th>
              <th>Employee</th>
              <th>Status</th>
            </tr>

          </thead>

          <tbody>

            <tr>
              <td>Dell Laptop Booked</td>
              <td>Rahul</td>
              <td>Approved</td>
            </tr>

            <tr>
              <td>Printer Added</td>
              <td>Poojitha</td>
              <td>Completed</td>
            </tr>

            <tr>
              <td>Projector Maintenance</td>
              <td>Anjali</td>
              <td>Pending</td>
            </tr>

            <tr>
              <td>HP Laptop Returned</td>
              <td>Kiran</td>
              <td>Completed</td>
            </tr>

            <tr>
              <td>Monitor Assigned</td>
              <td>Ravi</td>
              <td>Approved</td>
            </tr>

          </tbody>

        </table>

      </div>

    </div>
  );
}

export default Dashboard;
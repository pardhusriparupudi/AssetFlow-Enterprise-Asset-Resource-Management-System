import "./Dashboard.css";
import Sidebar from "../components/Sidebar";

function Maintenance({ setPage }) {
  return (
    <div className="dashboard">

      <Sidebar setPage={setPage} />

      <div className="content">

        <h1>Maintenance</h1>

        <table>

          <thead>
            <tr>
              <th>Asset ID</th>
              <th>Asset Name</th>
              <th>Issue</th>
              <th>Assigned To</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>

            <tr>
              <td>101</td>
              <td>Dell Laptop</td>
              <td>Screen Replacement</td>
              <td>John</td>
              <td>
                <button className="edit-btn">
                  In Progress
                </button>
              </td>
            </tr>

            <tr>
              <td>102</td>
              <td>Printer</td>
              <td>Ink Refill</td>
              <td>Mike</td>
              <td>
                <button className="view-btn">
                  Completed
                </button>
              </td>
            </tr>

            <tr>
              <td>103</td>
              <td>Projector</td>
              <td>Lens Cleaning</td>
              <td>David</td>
              <td>
                <button className="delete-btn">
                  Pending
                </button>
              </td>
            </tr>

          </tbody>

        </table>

      </div>

    </div>
  );
}

export default Maintenance;
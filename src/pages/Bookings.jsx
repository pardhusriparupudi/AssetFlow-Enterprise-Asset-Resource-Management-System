import { useState } from "react";
import "./Dashboard.css";
import Sidebar from "../components/Sidebar";

function Bookings({ setPage }) {

  const [showForm, setShowForm] = useState(false);

  return (
    <div className="dashboard">

      <Sidebar setPage={setPage} />

      <div className="content">

        {/* Top Bar */}

        <div className="top-bar">

          <h1>Bookings</h1>

          <button
            className="add-btn"
            onClick={() => setShowForm(!showForm)}
          >
            + New Booking
          </button>

        </div>

        {/* Booking Form */}

        {showForm && (

          <div className="asset-form">

            <h2>Create Booking</h2>

            <input
              type="text"
              placeholder="Employee Name"
            />

            <select>
              <option>Select Asset</option>
              <option>Dell Latitude 5440</option>
              <option>HP Printer</option>
              <option>Epson Projector</option>
              <option>Dell Monitor</option>
            </select>

            <input
              type="date"
            />

            <select>
              <option>Pending</option>
              <option>Approved</option>
              <option>Rejected</option>
            </select>

            <button>
              Book Asset
            </button>

          </div>

        )}

        {/* Search */}

        <input
          className="search-box"
          type="text"
          placeholder="🔍 Search Bookings..."
        />

        {/* Booking Table */}

        <table>

          <thead>

            <tr>
              <th>Booking ID</th>
              <th>Employee</th>
              <th>Asset</th>
              <th>Date</th>
              <th>Status</th>
            </tr>

          </thead>

          <tbody>

            <tr>
              <td>BK101</td>
              <td>Rahul</td>
              <td>Dell Laptop</td>
              <td>08-Jun-2026</td>
              <td>
                <button className="view-btn">
                  Approved
                </button>
              </td>
            </tr>

            <tr>
              <td>BK102</td>
              <td>Poojitha</td>
              <td>Projector</td>
              <td>09-Jun-2026</td>
              <td>
                <button className="edit-btn">
                  Pending
                </button>
              </td>
            </tr>

            <tr>
              <td>BK103</td>
              <td>Anjali</td>
              <td>Printer</td>
              <td>10-Jun-2026</td>
              <td>
                <button className="delete-btn">
                  Rejected
                </button>
              </td>
            </tr>

            <tr>
              <td>BK104</td>
              <td>Kiran</td>
              <td>Dell Monitor</td>
              <td>11-Jun-2026</td>
              <td>
                <button className="view-btn">
                  Approved
                </button>
              </td>
            </tr>

            <tr>
              <td>BK105</td>
              <td>Ravi</td>
              <td>HP Laptop</td>
              <td>12-Jun-2026</td>
              <td>
                <button className="edit-btn">
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

export default Bookings;
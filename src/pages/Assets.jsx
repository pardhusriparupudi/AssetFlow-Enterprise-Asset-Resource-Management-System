import { useState } from "react";
import "./Dashboard.css";
import Sidebar from "../components/Sidebar";

function Assets({ setPage }) {

  const [showForm, setShowForm] = useState(false);

  return (
    <div className="dashboard">

      <Sidebar setPage={setPage} />

      <div className="content">

        {/* Top Bar */}
        <div className="top-bar">
          <h1>Assets</h1>

          <button
            className="add-btn"
            onClick={() => setShowForm(!showForm)}
          >
            + Add Asset
          </button>
        </div>

        {/* Asset Form */}

        {showForm && (

          <div className="asset-form">

            <h2>Add New Asset</h2>

            <input
              type="text"
              placeholder="Asset ID"
            />

            <input
              type="text"
              placeholder="Asset Name"
            />

            <select>
              <option>Select Category</option>
              <option>Laptop</option>
              <option>Desktop</option>
              <option>Projector</option>
              <option>Printer</option>
              <option>Monitor</option>
            </select>

            <select>
              <option>Available</option>
              <option>Booked</option>
              <option>Maintenance</option>
            </select>

            <button>
              Save Asset
            </button>

          </div>

        )}

        {/* Search */}

        <input
          className="search-box"
          type="text"
          placeholder="🔍 Search Assets..."
        />

        {/* Assets Table */}

        <table>

          <thead>

            <tr>
              <th>Asset ID</th>
              <th>Asset Name</th>
              <th>Category</th>
              <th>Status</th>
              <th>Action</th>
            </tr>

          </thead>

          <tbody>

            <tr>
              <td>101</td>
              <td>Dell Latitude 5440</td>
              <td>Laptop</td>
              <td>Available</td>

              <td>
                <button className="view-btn">
                  View
                </button>

                <button className="edit-btn">
                  Edit
                </button>

                <button className="delete-btn">
                  Delete
                </button>
              </td>
            </tr>

            <tr>
              <td>102</td>
              <td>Epson Projector</td>
              <td>Projector</td>
              <td>Booked</td>

              <td>
                <button className="view-btn">
                  View
                </button>

                <button className="edit-btn">
                  Edit
                </button>

                <button className="delete-btn">
                  Delete
                </button>
              </td>
            </tr>

            <tr>
              <td>103</td>
              <td>HP LaserJet Printer</td>
              <td>Printer</td>
              <td>Maintenance</td>

              <td>
                <button className="view-btn">
                  View
                </button>

                <button className="edit-btn">
                  Edit
                </button>

                <button className="delete-btn">
                  Delete
                </button>
              </td>
            </tr>

            <tr>
              <td>104</td>
              <td>Dell Monitor</td>
              <td>Monitor</td>
              <td>Available</td>

              <td>
                <button className="view-btn">
                  View
                </button>

                <button className="edit-btn">
                  Edit
                </button>

                <button className="delete-btn">
                  Delete
                </button>
              </td>
            </tr>

            <tr>
              <td>105</td>
              <td>Lenovo ThinkPad</td>
              <td>Laptop</td>
              <td>Booked</td>

              <td>
                <button className="view-btn">
                  View
                </button>

                <button className="edit-btn">
                  Edit
                </button>

                <button className="delete-btn">
                  Delete
                </button>
              </td>
            </tr>

          </tbody>

        </table>

      </div>

    </div>
  );
}

export default Assets;
function Sidebar({ setPage }) {
  return (
    <div className="sidebar">

      <h2>📦 AssetFlow</h2>

      <button onClick={() => setPage("dashboard")}>
        🏠 Dashboard
      </button>

      <button onClick={() => setPage("assets")}>
        💻 Assets
      </button>

      <button onClick={() => setPage("bookings")}>
        📅 Bookings
      </button>

      <button onClick={() => setPage("maintenance")}>
        🛠 Maintenance
      </button>

      <button onClick={() => setPage("notifications")}>
        🔔 Notifications
      </button>

      <hr
        style={{
          margin: "20px 0",
          border: "1px solid rgba(255,255,255,0.3)"
        }}
      />

      <button
        onClick={() => {
          alert("Logged Out Successfully");
          window.location.reload();
        }}
      >
        🚪 Logout
      </button>

    </div>
  );
}

export default Sidebar;
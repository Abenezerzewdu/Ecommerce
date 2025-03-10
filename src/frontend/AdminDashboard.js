import React from "react";
import "./styles/adminDashboard.css";

const AdminDashboard = () => {
  return (
    <div className="admin-dashboard">
      <Sidebar />
      <div className="main-content">
        <Header />
        {/* Here you can add routes to different sections like Products, Orders, etc. */}
        <h2>Welcome to the Admin Dashboard</h2>
        {/* Add routing to other components here */}
      </div>
    </div>
  );
};

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h3>Admin Menu</h3>
      <ul>
        <li>Products</li>
        <li>Orders</li>
        <li>Users</li>
        <li>Reports</li>
        {/* Add more items as needed */}
      </ul>
    </div>
  );
};

const Header = () => {
  return (
    <div className="header">
      <h1>Admin Dashboard</h1>
      <button>Logout</button>
    </div>
  );
};

export default AdminDashboard;

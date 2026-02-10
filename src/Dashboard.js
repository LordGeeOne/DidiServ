import React from 'react';
import './Dashboard.css';

function Dashboard() {
  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <h1>Dashboard</h1>
        <p>Welcome to your new workspace!</p>
      </header>
      <main className="dashboard-content">
        <div className="dashboard-card">
          <h2>Getting Started</h2>
          <p>This is your main dashboard view.</p>
        </div>
      </main>
    </div>
  );
}

export default Dashboard;

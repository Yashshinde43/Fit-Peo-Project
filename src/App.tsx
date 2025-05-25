import React from 'react';
import Sidebar from './components/layout/Sidebar';
import DashboardMainContent from './components/dashboard/DashboardMainContent';

function App() {
  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 flex flex-col lg:pl-0">
        <DashboardMainContent />
      </div>
    </div>
  );
}

export default App;
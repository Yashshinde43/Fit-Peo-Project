import React from 'react';
import { Search, Bell } from 'lucide-react';
import CalendarView from './CalendarView';
import UpcomingSchedule from './UpcomingSchedule';
import AnatomySection from './AnatomySection';
import HealthStatusCards from './HealthStatusCards';
import ActivityFeed from './ActivityFeed';

const DashboardMainContent = () => {
  return (
    <div className="flex-1 bg-gray-50">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="space-y-6">
          <div className="rounded-xl p-6">
    
            <div className="flex items-center space-x-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  placeholder="Search"
                  className="pl-10 pr-4 py-2 w-full rounded-lg bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <button className="relative">
                <div className="absolute -top-1 -right-1 h-4 w-4 bg-indigo-600 rounded-full border-2 border-white"></div>
                <Bell className="h-6 w-6 text-gray-600" />
              </button>
            </div>
             <h2 className="text-2xl font-bold text-indigo-900 mt-3">Dashboard</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <AnatomySection />
            <HealthStatusCards />
          </div>
          <ActivityFeed />
        </div>
        
        <div className="space-y-6 bg-indigo-50 p-6 rounded-xl">
          <CalendarView />
          <UpcomingSchedule />
        </div>
      </div>
    </div>
  );
};

export default DashboardMainContent;
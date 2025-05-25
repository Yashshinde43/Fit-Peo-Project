import React from 'react';

const UpcomingSchedule = () => {
  return (
    <div className="bg-white rounded-xl p-4 sm:p-6 mt-6">
      <h2 className="text-lg font-semibold text-indigo-900 mb-4">The Upcoming Schedule</h2>
      
      <div className="space-y-6">
        <div>
          <h3 className="text-sm text-gray-500 mb-3">On Thursday</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="bg-indigo-50 rounded-xl p-3">
              <div className="flex items-center justify-between mb-1">
                <h4 className="font-medium text-indigo-900 line-clamp-1">Health checkup complete</h4>
                <span className="text-lg ml-2 flex-shrink-0">💉</span>
              </div>
              <p className="text-sm text-indigo-600">11:00 AM</p>
            </div>
            
            <div className="bg-indigo-50 rounded-xl p-3">
              <div className="flex items-center justify-between mb-1">
                <h4 className="font-medium text-indigo-900 line-clamp-1">Ophthalmologist</h4>
                <span className="text-lg ml-2 flex-shrink-0">👁️</span>
              </div>
              <p className="text-sm text-indigo-600">14:00 PM</p>
            </div>
          </div>
        </div>
        
        <div>
          <h3 className="text-sm text-gray-500 mb-3">On Saturday</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="bg-indigo-50 rounded-xl p-3">
              <div className="flex items-center justify-between mb-1">
                <h4 className="font-medium text-indigo-900 line-clamp-1">Cardiologist</h4>
                <span className="text-lg ml-2 flex-shrink-0">❤️</span>
              </div>
              <p className="text-sm text-indigo-600">12:00 AM</p>
            </div>
            
            <div className="bg-indigo-50 rounded-xl p-3">
              <div className="flex items-center justify-between mb-1">
                <h4 className="font-medium text-indigo-900 line-clamp-1">Neurologist</h4>
                <span className="text-lg ml-2 flex-shrink-0">🧠</span>
              </div>
              <p className="text-sm text-indigo-600">16:00 PM</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpcomingSchedule;
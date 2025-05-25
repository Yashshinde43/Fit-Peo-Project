import React from 'react';

const UpcomingSchedule = () => {
  return (
    <div className="bg-white rounded-xl p-6 mt-6">
      <h2 className="text-lg font-semibold text-indigo-900 mb-4">The Upcoming Schedule</h2>
      
      <div className="space-y-4">
        <div>
          <h3 className="text-sm text-gray-500 mb-3">On Thursday</h3>
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-indigo-50 rounded-xl p-3">
              <div className="flex items-center justify-between mb-1">
                <h4 className="font-medium text-indigo-900">Health checkup complete</h4>
                <span className="text-lg">💉</span>
              </div>
              <p className="text-sm text-indigo-600">11:00 AM</p>
            </div>
            
            <div className="bg-indigo-50 rounded-xl p-3">
              <div className="flex items-center justify-between mb-1">
                <h4 className="font-medium text-indigo-900">Ophthalmologist</h4>
                <span className="text-lg">👁️</span>
              </div>
              <p className="text-sm text-indigo-600">14:00 PM</p>
            </div>
          </div>
        </div>
        
        <div>
          <h3 className="text-sm text-gray-500 mb-3">On Saturday</h3>
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-indigo-50 rounded-xl p-3">
              <div className="flex items-center justify-between mb-1">
                <h4 className="font-medium text-indigo-900">Cardiologist</h4>
                <span className="text-lg">❤️</span>
              </div>
              <p className="text-sm text-indigo-600">12:00 AM</p>
            </div>
            
            <div className="bg-indigo-50 rounded-xl p-3">
              <div className="flex items-center justify-between mb-1">
                <h4 className="font-medium text-indigo-900">Neurologist</h4>
                <span className="text-lg">🧠</span>
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
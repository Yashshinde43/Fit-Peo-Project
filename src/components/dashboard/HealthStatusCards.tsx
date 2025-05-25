import React from "react";

import { statusCards } from "../../data/healthdata";

const HealthStatusCards = () => {
  return (
    <div className="space-y-4">
      {statusCards.map((card, index) => (
        <div key={index} className="bg-indigo-50 p-4 rounded-xl">
          <div className="flex items-center space-x-3 mb-3">
            <span className="text-2xl">{card.icon}</span>
            <span className="font-medium text-indigo-900">{card.title}</span>
          </div>
          <div className="text-xs text-gray-400 mb-2">{card.date}</div>
          <div className="h-2 rounded-full bg-gray-100">
            <div
              className={`h-full rounded-full ${card.color} transition-all duration-300 ease-in-out`}
              style={{ width: `${card.progress}%` }}
            />
          </div>
        </div>
      ))}
      <div className="flex justify-end">
        <button className="text-sm text-indigo-900 hover:text-indigo-700 relative">
          Details →
        </button>
      </div>
    </div>
  );
};

export default HealthStatusCards;

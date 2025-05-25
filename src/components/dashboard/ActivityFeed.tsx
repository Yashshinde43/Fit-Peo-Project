import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';

import { data } from '../../data/calenderdata'; 

const ActivityFeed = () => {
  return (
    <div className="bg-indigo-50 rounded-b-xl p-4 rounded-xl m-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold m-5">Activity</h2>
        <div className="text-gray-500 m-5">3 appointments on this week</div>
      </div>
      
      <div className="h-48 ">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={data}
            margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
          >
            <defs>
              <linearGradient id="colorValue1" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#22D3EE" stopOpacity={0.2}/>
                <stop offset="95%" stopColor="#22D3EE" stopOpacity={0}/>
              </linearGradient>
              <linearGradient id="colorValue2" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#4F46E5" stopOpacity={0.2}/>
                <stop offset="95%" stopColor="#4F46E5" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid vertical={false} stroke="#f5f5f5" />
            <XAxis
              dataKey="name"
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#9CA3AF', fontSize: 12 }}
            />
            <YAxis hide={true} />
            <Area
              type="monotone"
              dataKey="value1"
              stroke="#22D3EE"
              fillOpacity={1}
              fill="url(#colorValue1)"
              strokeWidth={2}
            />
            <Area
              type="monotone"
              dataKey="value2"
              stroke="#4F46E5"
              fillOpacity={1}
              fill="url(#colorValue2)"
              strokeWidth={2}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ActivityFeed;
import React from 'react';
import { Clock } from 'lucide-react';

interface SimpleAppointmentCardProps {
  title: string;
  time: string;
  icon?: React.ReactNode;
  status?: 'upcoming' | 'completed' | 'cancelled';
}

const SimpleAppointmentCard: React.FC<SimpleAppointmentCardProps> = ({
  title,
  time,
  icon,
  status = 'upcoming',
}) => {
  const getStatusColor = () => {
    switch (status) {
      case 'completed':
        return 'bg-green-100 text-green-800';
      case 'cancelled':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-blue-100 text-blue-800';
    }
  };

  return (
    <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm">
      <div className="flex items-center space-x-4">
        <div className="p-2 bg-gray-100 rounded-full">
          {icon || <Clock className="h-5 w-5 text-gray-600" />}
        </div>
        <div>
          <h3 className="font-medium text-gray-900">{title}</h3>
          <p className="text-sm text-gray-500">{time}</p>
        </div>
      </div>
      <span className={`px-3 py-1 rounded-full text-sm ${getStatusColor()}`}>
        {status}
      </span>
    </div>
  );
};

export default SimpleAppointmentCard;
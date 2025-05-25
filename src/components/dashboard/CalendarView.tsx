import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import { format } from 'date-fns';
import { Plus } from 'lucide-react';
import "react-datepicker/dist/react-datepicker.css";
import { appointments } from '../../data/appointmentData'; 


const CalendarView = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const renderCustomHeader = ({
    date,
    decreaseMonth,
    increaseMonth,
  }: {
    date: Date;
    decreaseMonth: () => void;
    increaseMonth: () => void;
  }) => (
    <div className="flex items-center justify-between px-2 py-2">
      <div>
        <span className="text-sm text-indigo-600 mb-1 block">This Week →</span>
        <h2 className="text-xl font-semibold text-indigo-900">{format(date, 'MMMM yyyy')}</h2>
      </div>
      <div className="flex space-x-2">
        <button
          onClick={decreaseMonth}
          className="p-2 rounded-lg text-indigo-600 hover:bg-indigo-50"
        >
          ←
        </button>
        <button
          onClick={increaseMonth}
          className="p-2 rounded-lg text-indigo-600 hover:bg-indigo-50"
        >
          →
        </button>
      </div>
    </div>
  );

  const renderDayContents = (day: number, date: Date) => {
    const hasAppointments = appointments.some(apt => 
      format(selectedDate, 'yyyy-MM-dd') === format(date, 'yyyy-MM-dd')
    );

    return (
      <div className={`p-2 ${hasAppointments ? 'bg-indigo-100 rounded-lg' : ''}`}>
        <span className="text-sm font-medium text-indigo-900">{day}</span>
        {hasAppointments && (
          <div className="text-xs text-indigo-600 mt-1">
            {format(date, 'HH:mm')}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-end pt-6">
        <button className="flex items-center justify-center h-10 w-10 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors mx-2">
          <Plus className="h-5 w-5" />
        </button>
        <div className="h-10 w-10 rounded-lg bg-cyan-400 flex items-center justify-center mx-2">
          <span className="text-white text-xl">👤</span>
        </div>
      </div>

      <div className="bg-white rounded-xl p-4 sm:p-6">
        <DatePicker
          selected={selectedDate}
          onChange={(date: Date) => setSelectedDate(date)}
          inline
          renderCustomHeader={renderCustomHeader}
          renderDayContents={renderDayContents}
          calendarClassName="w-full"
          dayClassName={() => "!w-full"}
          timeFormat="HH:mm"
          timeIntervals={30}
        />
        
        <div className="mt-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {appointments.map((appointment) => (
              <div
                key={appointment.id}
                className={`p-4 ${
                  appointment.highlight ? 'bg-indigo-600 text-white' : 'bg-indigo-50'
                } rounded-xl`}
              >
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <h3 className={`font-medium ${appointment.highlight ? 'text-white' : 'text-indigo-900'}`}>
                      {appointment.title}
                    </h3>
                    <p className={`text-sm ${appointment.highlight ? 'opacity-90' : 'text-indigo-600'}`}>
                      {appointment.time}
                    </p>
                    <p className={`text-sm ${appointment.highlight ? 'opacity-90' : 'text-indigo-600'}`}>
                      {appointment.doctor}
                    </p>
                  </div>
                  <span className="text-2xl">{appointment.icon}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalendarView;
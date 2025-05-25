import React from 'react';

const AnatomySection = () => {
  return (
    <div className="bg-white rounded-xl m-6">
      <div className="relative h-[400px] flex items-center justify-center">
        <img 
          src="https://innerbody.imgix.net/muscular_system.png?auto=format&ixlib=react-9.4.0&w=198&h=270&dpr=2&q=50" 
          alt="Human Anatomy"
          className="h-full object-contain mx-1"
        />
        
        {/* Health Indicators */}
        <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2">
          <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-indigo-600 text-white">
            ❤️ Healthy Heart
          </span>
        </div>
        
        <div className="absolute bottom-1/3 left-1/2 transform -translate-x-1/2">
          <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-cyan-400 text-white">
            🦿 Healthy Leg
          </span>
        </div>
      </div>
    </div>
  );
};

export default AnatomySection;
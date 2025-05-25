import React, { useState } from 'react';
import {navItems} from '../../data/navigation'; // Adjust the import path as necessary

import { Settings, Menu, X } from 'lucide-react';
const Sidebar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        className="lg:hidden fixed top-4 left-4 z-50 p-2 rounded-lg bg-white shadow-md"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        {isMobileMenuOpen ? (
          <X className="h-6 w-6 text-gray-600" />
        ) : (
          <Menu className="h-6 w-6 text-gray-600" />
        )}
      </button>

      {/* Overlay */}
      {isMobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={`
        fixed lg:static w-[240px] bg-white py-8 flex flex-col min-h-screen z-50
        transition-transform duration-300 ease-in-out
        ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        <div className="px-8 mb-12">
          <h1 className="text-2xl font-bold">
            <span className="text-cyan-400">Health</span>
            <span className="text-blue-900">care.</span>
          </h1>
        </div>

        <div className="flex-1 flex flex-col justify-between bg-indigo-10 rounded-xl">
          <div>
            <div className="px-6 mb-8 ">
              <h2 className="text-xs font-medium text-gray-400 px-4 mb-4">General</h2>
              <nav>
                <ul className="space-y-1">
                  {navItems.slice(0, 5).map((item, index) => (
                    <li key={index}>
                      <a
                        href="#"
                        className={`flex items-center px-4 py-3 rounded-xl transition-all duration-200 group ${
                          item.isActive
                            ? 'text-blue-900'
                            : 'text-gray-400 hover:bg-gray-50'
                        }`}
                      >
                        <item.icon 
                          className={`h-5 w-5 transition-colors duration-200 ${
                            item.isActive 
                              ? 'text-blue-900' 
                              : 'text-gray-400 group-hover:text-indigo-600'
                          }`} 
                        />
                        <span className={`ml-3 font-medium transition-colors duration-200 ${
                          item.isActive 
                            ? 'text-blue-900' 
                            : 'text-gray-400 group-hover:text-indigo-600 group-hover:scale-105'
                        }`}>
                          {item.label}
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            <div className="px-6">
              <h2 className="text-xs font-medium text-gray-400 px-4 mb-4">Tools</h2>
              <nav>
                <ul className="space-y-1">
                  {navItems.slice(5).map((item, index) => (
                    <li key={index}>
                      <a
                        href="#"
                        className={`flex items-center px-4 py-3 rounded-xl transition-all duration-200 group ${
                          item.isActive
                            ? 'text-blue-900'
                            : 'text-gray-400 hover:bg-gray-50'
                        }`}
                      >
                        <item.icon 
                          className={`h-5 w-5 transition-colors duration-200 ${
                            item.isActive 
                              ? 'text-blue-900' 
                              : 'text-gray-400 group-hover:text-indigo-600'
                          }`} 
                        />
                        <span className={`ml-3 font-medium transition-colors duration-200 ${
                          item.isActive 
                            ? 'text-blue-900' 
                            : 'text-gray-400 group-hover:text-indigo-600 group-hover:scale-105'
                        }`}>
                          {item.label}
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>

          {/* Settings button at the bottom */}
          <div className="px-6 mb-8">
            <a
              href="#"
              className="flex items-center px-4 py-3 rounded-xl transition-all duration-200 group text-gray-400 hover:bg-gray-50"
            >
              <Settings 
                className="h-5 w-5 text-gray-400 group-hover:text-indigo-600 transition-colors duration-200"
              />
              <span className="ml-3 font-medium text-gray-400 group-hover:text-indigo-600 transition-colors duration-200 group-hover:scale-105">
                Settings
              </span>
            </a>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
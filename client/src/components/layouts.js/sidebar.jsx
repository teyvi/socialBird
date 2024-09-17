import React from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  return ( 
    <div className="h-0 flex-1 flex flex-col overflow-y-auto border border-amber-300 rounded">
      <div className="flex items-center flex-shrink-0 px-4 bg-white">
        <span className="text-gray-500 font-bold uppercase my-8">Social Bird</span>
      </div>
      <nav className="mt-5 flex-1 px-2 bg-white space-y-1">
        <Link
          to="/dashboard/schedulepost"
          className="group flex items-center px-2 py-2 text-sm font-medium rounded-md text-gray-500 hover:bg-gray-700 hover:text-white"
        >
          Schedule A Post
        </Link>
        <Link
          to="/dashboard/post"
          className="group flex items-center px-2 py-2 text-sm font-medium rounded-md text-gray-500 hover:bg-gray-700 hover:text-white"
        >
          Make a Post
        </Link>
        <Link
          to="/dashboard/analytics"
          className="group flex items-center px-2 py-2 text-sm font-medium rounded-md text-gray-500 hover:bg-gray-700 hover:text-white"
        >
          Analytics
        </Link>
      </nav>
    </div>
  );
}

export default Sidebar;
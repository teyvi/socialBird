import React from "react";

function DashboardLayout() {
  return (
    <div>
      <div className="flex flex-col flex-1 overflow-y-auto">
        <div className="flex items-center justify-end h-16 bg-[#C33C54] border-gray-200">
          <div className="flex items-center pr-4">
            <button className="flex items-center text-gray-500 hover:text-gray-700 focus:outline-none focus:text-gray-700">
              Account
            </button>
          </div>
        </div>
        <div className="p-4">
          <h1 className="text-2xl font-bold">Good Morning </h1>
          <p className="mt-2 text-gray-600">Make that amazing post!</p>
        </div>
      </div>
    </div>
  );
}

export default DashboardLayout;

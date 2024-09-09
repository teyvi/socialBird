import React from "react";

function Dashboard() {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* <!-- sidebar --> */}
      <div className="hidden md:flex flex-col w-64 bg-amber-300">
        <div className="flex items-center justify-center h-16 bg-[#254E70]">
          <span className="text-white font-bold uppercase">
            SocialBird Dashboard
          </span>
        </div>
        <div className="flex flex-col flex-1 overflow-y-auto text-black">
          <nav className="flex-1 px-2 py-4 bg-amber-300">
            <a href="#" className="flex items-center px-4 py-2">
              Posts
            </a>
            <a href="#" className="flex items-center px-4 py-2 mt-2">
              Analytics
            </a>
          </nav>
        </div>
      </div>

      {/* <!-- Main content --> */}
      <div className="flex flex-col flex-1 overflow-y-auto">
        <div className="flex items-center justify-end h-16 bg-white border-b border-gray-200">
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

export default Dashboard;

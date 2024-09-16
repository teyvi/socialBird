import React from "react";

const Analytics = () => {
  return (
    <>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-slate-100">
      <h1 className="text-2xl font-semibold text-gray-900 mb-6">Post Analytics</h1>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="p-5">
            <h6 className="text-xs text-gray-400 mb-2">Post to Twitter </h6>
            <h6 className="text-3xl font-extrabold">GHS 0.00</h6>
          </div>
        </div>
        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="p-5">
            <h6 className="text-xs text-gray-400 mb-2">Post to LinkedIn</h6>
            <h6 className="text-3xl font-extrabold">GHS 0.00</h6>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Analytics;

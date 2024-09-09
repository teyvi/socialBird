import React from "react";

function Sidebar() {
  return (
    <div>
      <div className="hidden md:flex flex-col w-64 bg-amber-300">
        <div className="flex items-center justify-center h-16 bg-[#254E70]">
          <span className="text-white font-bold uppercase">
            SocialBird Dashboard
          </span>
        </div>
        <div className="flex flex-col flex-1 overflow-y-auto text-black">
          <nav className="flex-1 px-2 py-4 bg-[#FF9B42]">
            <a href="#" className="flex items-center px-4 py-2">
              Posts
            </a>
            <a href="#" className="flex items-center px-4 py-2 mt-2">
              Analytics
            </a>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;

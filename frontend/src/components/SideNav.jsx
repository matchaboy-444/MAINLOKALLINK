import {
  FaHome,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaUserTie,
  FaUser,
  FaSignOutAlt,
} from "react-icons/fa";
import { ImMenu } from "react-icons/im";
import { MdDashboard } from "react-icons/md";

import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function SideNav({ setnavigation, setlogout }) {
  const [openmenu, setopenmenu] = useState(false);

  return (
    <>
      <div
        className={`fixed top-0 right-0 h-screen bg-white shadow-lg border-l border-gray-300 overflow-hidden ${
          openmenu ? "w-48" : "w-0"
        } transition-all duration-700`}
      >
        <ul className="flex flex-col justify-center space-y-14 h-full pl-4">
          <NavLink to="/main/dashboard">
            <li className="flex items-center  gap-4 cursor-pointer hover:font-bold hover:bg-slate-200 hover:p-3 hover:rounded-md transition-all duration-300">
              <MdDashboard className="text-4xl text-blue-500" />
              <span className="font-bold">DASHBOARD</span>
            </li>
          </NavLink>

          <NavLink to="/main/calendar">
            <li className="flex items-center  gap-4 cursor-pointer hover:font-bold hover:bg-slate-200 hover:p-3 hover:rounded-md transition-all duration-300">
              <FaCalendarAlt className="text-4xl text-blue-500" />
              <span className="font-bold">CALENDAR</span>
            </li>
          </NavLink>

          <NavLink to="/main/location">
            <li className="flex items-center  gap-4 cursor-pointer hover:font-bold hover:bg-slate-200 hover:p-3 hover:rounded-md transition-all duration-300">
              <FaMapMarkerAlt className="text-4xl text-blue-500" />
              <span className="font-bold">LOCATION</span>
            </li>
          </NavLink>

          <NavLink to="/main/officials">
            <li className="flex items-center  gap-4 cursor-pointer hover:font-bold hover:bg-slate-200 hover:p-3 hover:rounded-md transition-all duration-300">
              <FaUserTie className="text-4xl text-blue-500" />
              <span className="font-bold">OFFICIALS</span>
            </li>
          </NavLink>

          <li
            className="flex items-center gap-4 cursor-pointer hover:font-bold hover:bg-slate-200 hover:p-3 hover:rounded-md transition-all duration-300"
            onClick={() => setlogout(true)}
          >
            <FaSignOutAlt className="text-4xl text-blue-500" />
            <span className="font-bold">LOG OUT</span>
          </li>
        </ul>
      </div>

      <ImMenu
        className={`fixed top-4 right-4 cursor-pointer z-50 p-2 bg-transparent ${
          openmenu ? "text-black" : "text-white"
        } transition-all duration-300`}
        size={55}
        onClick={() => {
          setopenmenu(!openmenu);
          setnavigation(!navigation);
        }}
      />
    </>
  );
}

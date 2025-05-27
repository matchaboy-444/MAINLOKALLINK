import { NavLink, Outlet } from "react-router-dom";
import LogOut from "./routing/LogOut";
import { useState } from "react";

export default function App() {
  const [loggingout, setLoggingout] = useState(false);
  return (
    <>
      <header className="flex items-center justify-between bg-red-700 p-4">
        <NavLink to="/">
          {" "}
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-4">
              <h1 className="relative left-5 transform -rotate-90 text-white font-normal text-3xl font-anton px-0 text-outline">
                163
              </h1>
              <h1 className="text-4xl text-white font-anton font-normal py-3 px-0 leading-none">
                LokalLink
              </h1>
            </div>
          </div>
        </NavLink>

        <div className="">
          <ul className="">
            <li className="text-white text-2xl inline-block ml-5 mr-5 hover:bg-slate-300 hover:p-3 hover:font-normal hover:text-black hover:rounded-md transition-all duration-300 font-anton">
              <NavLink to="/announcements">ANNOUNCEMENTS</NavLink>
            </li>
            <li className="text-white text-2xl inline-block ml-5 mr-5 hover:bg-slate-300 hover:p-3 hover:font-normal hover:text-black hover:rounded-md transition-all duration-300 font-anton">
              <NavLink to="/residents">RESIDENTS</NavLink>
            </li>
            <li className="text-white text-2xl inline-block ml-5 mr-5 hover:bg-slate-300 hover:p-3 hover:font-normal hover:text-black hover:rounded-md transition-all duration-300 font-anton">
              <NavLink to="/officials">OFFICIALS</NavLink>
            </li>
            <li className="text-white text-2xl inline-block ml-5 mr-5 hover:bg-slate-300 hover:p-3 hover:font-normal hover:text-black hover:rounded-md transition-all duration-300 font-anton">
              <NavLink to="/residentquery">FIND RESIDENT</NavLink>
            </li>
            <li className="text-white text-2xl inline-block ml-5 mr-5 hover:bg-slate-300 hover:p-3 hover:font-normal hover:text-black hover:rounded-md transition-all duration-300 font-anton">
              <NavLink to="/filerequestrecord">FILE REQUEST</NavLink>
            </li>
            <li className="text-white text-2xl inline-block ml-5 mr-5 hover:bg-slate-300 hover:p-3 hover:font-normal hover:text-black hover:rounded-md transition-all duration-300 font-anton">
              <button
                onClick={() => {
                  setLoggingout(!loggingout);
                }}
              >
                LOG-OUT
              </button>
            </li>
          </ul>
        </div>
      </header>{" "}
      <br />
      <Outlet />
      {loggingout && (
        <LogOut
          onclose={() => {
            setLoggingout(false);
          }}
        />
      )}
      <br />
      <footer className="flex items-center  justify-between bg-red-700 py-8 px-10 bottom-0">
        <div className="text-white h-fit w-96 inline-block">
          <h1 className="font-bold text-2xl">Disclaimer:</h1>
          <br />
          <p>
            163LokalLink is an informational platform designed to provide
            netizens with organized and accessible details about barangay
            officials. The information presented on this website is sourced from
            publicly available records and official barangay announcements. All
            names, titles, and images belong to their respective copyright
            holders and governing bodies.
          </p>
        </div>
        {/*
        <div className="relative text-4xl h-fit w-fit  bottom-20">
          <ul className="p-5">
            <li className="inline-block px-4 hover:text-white duration-300 ">
              <FaFacebook />
            </li>
            <li className="inline-block px-4 hover:text-white duration-300 ">
              <FaInstagram />
            </li>
            <li className="inline-block px-4 hover:text-white duration-300 ">
              <FaFacebookMessenger />
            </li>
          </ul>
        </div>
        */}
      </footer>
    </>
  );
}

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ActCalendar from "./components/ActCalendar.jsx";
import Location from "./components/Location.jsx";
import Officials from "./components/Officials.jsx";
import Dashboard from "./components/Dashboard.jsx";
import Home from "./Home.jsx";
import SendFile from "./components/RequestFile.jsx";
import LogIn from "./components/Login/LogIn.jsx";

const routing = createBrowserRouter([
  {
    path: "/",
    element: <LogIn />,
  },
  {
    path: "/main",
    element: <App />,
    children: [
      {
        path: "/main",
        element: <Home />,
      },
      {
        path: "/main/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/main/calendar",
        element: <ActCalendar />,
      },
      {
        path: "/main/location",
        element: <Location />,
      },
      {
        path: "/main/officials",
        element: <Officials />,
      },

      {
        path: "/main/sendfile",
        element: <SendFile />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={routing}></RouterProvider>
  </React.StrictMode>
);

import { StrictMode } from "react";
import ReactDOM from "react-dom/client"; // Import ReactDOM
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";
import App from "./App.jsx";
import Announcements from "./routing/Announcements.jsx";
import Officials from "./routing/Officials.jsx";
import Resident from "./routing/Residents.jsx";
import Home from "./routing/Home.jsx";
import ResidentPost from "./routing/CRUD/Resident-Post.jsx";
import ResidentUpdate from "./routing/CRUD/Resident-Update.jsx";
import AddAnnouncements from "./routing/CRUD/Announcement-Post.jsx";
import UpdateAnnouncement from "./routing/CRUD/Announcement.-Put.jsx";
import AddOfficials from "./routing/CRUD/Offcials-Post.jsx";
import UpdateOfficials from "./routing/CRUD/Official-Update.jsx";
import ResidentQuery from "./routing/ResidentQuery.jsx";
import FileRecord from "./routing/RequestFileRecord.jsx";

const routing = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/announcements",
        element: <Announcements />,
      },
      {
        path: "/residents",
        element: <Resident />,
      },

      {
        path: "/officials",
        element: <Officials />,
      },
      {
        path: "/residentQuery",
        element: <ResidentQuery />,
      },
      {
        path: "/filerequestrecord",
        element: <FileRecord />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={routing} />
  </StrictMode>
);

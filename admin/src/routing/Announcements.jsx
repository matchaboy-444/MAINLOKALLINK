import axios from "axios";
import { useEffect, useState } from "react";
import {
  PlusIcon,
  PencilIcon,
  TrashIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import AddAnnouncements from "./CRUD/Announcement-Post";
import UpdateAnnouncement from "./CRUD/Announcement.-Put";

export default function announcements() {
  const [OpenAdd, SetOpenAdd] = useState(false);
  const [OpenUpdate, SetOpenUpdate] = useState(false);

  const [announcements, setannouncements] = useState([]);

  useEffect(() => {
    GetAnnouncement();
  }, []);

  const GetAnnouncement = () => {
    axios
      .get("http://localhost:3000/announcements-admin")
      .then((res) => {
        console.log(res.data);
        setannouncements(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const DeleteAnnouncement = (id) => {
    const Confirm = confirm(
      "ARE YOU SURE YOU WANT TO DELETE THE ANNOUNCEMENT?"
    );
    if (Confirm) {
      axios
        .delete(`http://localhost:3000/announcements-admin/${id}`)
        .then(() => {
          setannouncements(
            announcements.filter((announcement) => announcement._id !== id)
          );
          alert("Announcement was Deleted");
        })
        .catch((err) => {
          console.log(err);
          if (err.status == 404) {
            alert("Data does not exist");
          } else {
            alert("Server Error");
          }
        });
    }
  };

  return (
    <>
      <section>
        <h1 className="text-4xl font-kanit p-4 text-blue-900 font-bold">
          ANNOUNCEMENTS
        </h1>
        <div className="flex justify-center">
          <button
            onClick={() => {
              SetOpenAdd(true);
            }}
            className="bg-red-700 px-6 py-3 mr-4 rounded-xl text-white my-5 font-extrabold text-5xl"
          >
            <PlusIcon className="w-10 h-10" />
          </button>
          <button
            onClick={() => {
              SetOpenUpdate(true);
            }}
            className="bg-red-700 px-6 py-3 ml-4 rounded-xl text-white my-5 font-extrabold text-5xl"
          >
            <PencilIcon className="w-10 h-10" />
          </button>
        </div>
        {OpenAdd && (
          <section className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-5 rounded-md bg-white w-[40%] h-fit border-2 z-50">
            <XMarkIcon
              className="w-10 absolute top-2 right-2 cursor-pointer"
              onClick={() => {
                SetOpenAdd(false);
              }}
            />
            <AddAnnouncements
              onclose={() => {
                SetOpenAdd(false);
              }}
            />
          </section>
        )}
        {OpenUpdate && (
          <section className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-5 rounded-md bg-white w-[40%] h-fit border-2 z-50">
            <XMarkIcon
              className="w-10 absolute top-2 right-2 cursor-pointer"
              onClick={() => {
                SetOpenUpdate(false);
              }}
            />
            <UpdateAnnouncement
              onclose={() => {
                SetOpenUpdate(false);
              }}
            />
          </section>
        )}
        <section className="p-5 flex justify-center">
          <div className="w-[50%]">
            <table className="w-full bg-gray-100 text-md text-left border border-gray-300">
              <thead className="bg-gray-200 text-gray-700">
                <tr>
                  <th className="border border-gray-300 px-3 py-3">ID</th>
                  <th className="border border-gray-300 px-3 py-3">Activity</th>
                  <th className="border border-gray-300 px-3 py-3">Date</th>
                </tr>
              </thead>
              <tbody>
                {announcements.map((announcement, index) => (
                  <tr key={index}>
                    <td className="border border-gray-300 px-3 py-3">
                      {announcement._id}
                    </td>
                    <td className="border border-gray-300 px-3 py-3">
                      {announcement.activity}
                    </td>
                    <td className="border border-gray-300 px-3 py-3">
                      {new Date(announcement.date).toLocaleDateString()}
                    </td>
                    <td className="text-center bg-white border-none">
                      <button
                        onClick={() => {
                          DeleteAnnouncement(announcement._id);
                        }}
                        className="bg-red-700 px-3 py-1 rounded-xl text-white"
                      >
                        <TrashIcon className="w-6 h-6" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </section>
    </>
  );
}

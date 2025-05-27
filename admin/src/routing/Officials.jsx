import axios from "axios";
import { useEffect, useState } from "react";
import {
  PlusIcon,
  PencilIcon,
  TrashIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import AddOfficials from "./CRUD/Offcials-Post";
import UpdateOfficials from "./CRUD/Official-Update";

export default function Officials() {
  const [officials, setofficials] = useState([]);
  const [OpenAdd, setOpenAdd] = useState(false);
  const [OpenUpdate, setOpenUpdate] = useState(false);

  useEffect(() => {
    GetData();
  }, []);
  const GetData = () => {
    axios
      .get("http://localhost:3000/officials")
      .then((res) => {
        console.log(res.data);
        setofficials(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const DeleteOfficials = (id) => {
    const Confirm = confirm("ARE YOU SURE YOU WANT TO DELETE?");
    if (Confirm) {
      axios
        .delete(`http://localhost:3000/officials/${id}`)
        .then(() => {
          setofficials(officials.filter((official) => official._id !== id));
          alert("Data Deleted");
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
          OFFICIALS
        </h1>
        <div className="flex justify-center">
          <button
            onClick={() => {
              setOpenAdd(true);
            }}
            className=" bg-red-700 px-6 py-3 mr-4 rounded-xl text-white my-5 font-extrabold text-5xl"
          >
            <PlusIcon className="w-10 h-10" />
          </button>
          <button
            onClick={() => {
              setOpenUpdate(true);
            }}
            className=" bg-red-700 px-6 py-3 ml-4 rounded-xl text-white my-5 font-extrabold text-5xl"
          >
            <PencilIcon className="w-10 h-10" />
          </button>
        </div>

        {OpenAdd && (
          <section className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-5 rounded-md bg-white w-[40%] h-fit border-2 z-50">
            <XMarkIcon
              className="w-10 absolute top-2 right-2 cursor-pointer"
              onClick={() => {
                setOpenAdd(false);
              }}
            />
            <AddOfficials
              onclose={() => {
                setOpenAdd(false);
              }}
            />
          </section>
        )}
        {OpenUpdate && (
          <section className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-5 rounded-md bg-white w-[40%] h-fit border-2 z-50">
            <XMarkIcon
              className="w-10 absolute top-2 right-2 cursor-pointer"
              onClick={() => {
                setOpenUpdate(false);
              }}
            />
            <UpdateOfficials
              onclose={() => {
                setOpenUpdate(false);
              }}
            />
          </section>
        )}
        <table className="w-full bg-gray-100 text-sm text-left border border-gray-300 ml-5">
          <thead className="bg-gray-200 text-gray-700">
            <tr>
              <th className="border border-gray-300 px-3 py-3">ID</th>
              <th className="border border-gray-300 px-3 py-3">Name</th>
              <th className="border border-gray-300 px-3 py-3">Age</th>
              <th className="border border-gray-300 px-3 py-3">Sex</th>
              <th className="border border-gray-300 px-3 py-3">Address</th>
              <th className="border border-gray-300 px-3 py-3">Year Elected</th>
              <th className="border border-gray-300 px-3 py-3">Position</th>
            </tr>
          </thead>
          <tbody>
            {officials.map((official, index) => {
              return (
                <tr key={index}>
                  <td className="border border-gray-300 px-3 py-3">
                    {official._id}
                  </td>
                  <td className="border border-gray-300 px-3 py-3">
                    {official.name}
                  </td>
                  <td className="border border-gray-300 px-3 py-3">
                    {official.age}
                  </td>
                  <td className="border border-gray-300 px-3 py-3">
                    {official.sex}
                  </td>
                  <td className="border border-gray-300 px-3 py-3">
                    {official.address}
                  </td>

                  <td className="border border-gray-300 px-3 py-3">
                    {official.yearElected}
                  </td>
                  <td className="border border-gray-300 px-3 py-3">
                    {official.position}
                  </td>
                  <td className="text-center bg-white border-none">
                    <button
                      onClick={() => {
                        DeleteOfficials(official._id);
                      }}
                      className="bg-red-700 px-3 py-1 rounded-xl text-white"
                    >
                      <TrashIcon className="w-6 h-6" />
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </section>
    </>
  );
}

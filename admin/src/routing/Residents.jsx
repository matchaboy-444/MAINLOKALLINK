import { useEffect, useState } from "react";
import axios from "axios";
import {
  PlusIcon,
  PencilIcon,
  TrashIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import ResidentPost from "./CRUD/Resident-Post";
import ResidentUpdate from "./CRUD/Resident-Update";

export default function Residents() {
  const [OpenAdd, setOpenAdd] = useState(false);
  const [OpenUpdate, setOpenUpdate] = useState(false);

  const [users, setUsers] = useState([]);
  useEffect(() => {
    GetResidents();
  }, []);

  const GetResidents = () => {
    axios
      .get("http://localhost:3000/residents")
      .then((res) => {
        console.log(res.data);
        setUsers(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const DeleteResidents = (id) => {
    const Confirm = confirm("ARE YOU SURE TO DELETE THIS DATA?");

    if (Confirm) {
      axios
        .delete(`http://localhost:3000/residents/${id}`)
        .then(() => {
          setUsers(users.filter((user) => user._id !== id));
          alert("DATA WAS SUCCESSFULLY DELETED");
        })
        .catch((err) => {
          console.log(err);
          alert("Error deleting resident");
        });
    }
  };
  return (
    <>
      <section>
        <h1 className="text-4xl font-kanit p-4 text-blue-900 font-bold">
          RESIDENTS
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
            <ResidentPost
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
            <ResidentUpdate
              onclose={() => {
                setOpenUpdate(false);
              }}
            />
          </section>
        )}

        <div className="inline-block  p-4">
          <table className="w-full bg-gray-100 text-sm text-left border border-gray-300 ">
            <thead className="bg-gray-200 text-gray-700">
              <tr>
                <th className="border border-gray-300 px-10 py-3">ID</th>
                <th className="border border-gray-300 px-10 py-3">Name</th>
                <th className="border border-gray-300 px-10 py-3">Age</th>
                <th className="border border-gray-300 px-10 py-3">Sex</th>
                <th className="border border-gray-300 px-10 py-3">Address</th>
                <th className="border border-gray-300 px-10 py-3">Employed</th>
                <th className="bg-white border-white"></th>
              </tr>
            </thead>
            <tbody>
              {users.map((resident, index) => (
                <tr key={index}>
                  <td className="border border-gray-300 px-10 py-3">
                    {resident._id}
                  </td>
                  <td className="border border-gray-300 px-10 py-3">
                    {resident.name}
                  </td>
                  <td className="border border-gray-300 px-10 py-3">
                    {resident.age}
                  </td>
                  <td className="border border-gray-300 px-10 py-3">
                    {resident.sex}
                  </td>
                  <td className="border border-gray-300 px-10 py-3">
                    {resident.address}
                  </td>
                  <td className="border border-gray-300 px-10 py-3">
                    {resident.employed ? "Yes" : "No"}
                  </td>
                  <td className="text-center bg-white border-none">
                    <button
                      onClick={() => {
                        DeleteResidents(resident._id);
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
    </>
  );
}

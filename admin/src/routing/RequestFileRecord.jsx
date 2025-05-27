import axios from "axios";
import { useEffect, useState } from "react";
import { CheckIcon } from "@heroicons/react/24/outline";

export default function FileRecord() {
  const [filerecord, setFilerecord] = useState([]);

  useEffect(() => {
    fetchFileRecords();
  }, []);

  const fetchFileRecords = () => {
    axios
      .get("http://localhost:3000/filerecord")
      .then((res) => {
        setFilerecord(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };

  const SuccessStatus = (id) => {
    const CheckStatus = {
      status: "Done",
    };

    axios
      .put(`http://localhost:3000/filerecord/${id}`, CheckStatus)
      .then((res) => {
        console.log("Status updated:", res.data);
        fetchFileRecords();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <section>
      <h1 className="text-4xl p-4 font-kanit font-bold text-blue-900">
        FILE REQUEST RECORD:
      </h1>
      <div className="inline-block ml-[10px] p-4">
        <table className="w-full bg-gray-100 text-sm text-left border border-gray-300 appearing">
          <thead className="bg-gray-200 text-gray-700">
            <tr>
              <th className="px-14 py-[3%] border border-gray-300">Name</th>
              <th className="px-14 py-[3%] border border-gray-300">
                File Type
              </th>
              <th className="px-14 py-[3%] border border-gray-300">Time</th>
              <th className="px-14 py-[3%] border border-gray-300">Date</th>
              <th className="px-14 py-[3%] border border-gray-300">Status</th>
              <th className="px-8 py-[3%] border border-gray-300 text-center">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {filerecord.map((record, index) => (
              <tr
                key={index}
                className={`border transition duration-300 ${
                  record.status === "Done" ? "bg-green-500" : "bg-white"
                }`}
              >
                <td className="px-14 py-[3%] border border-gray-300">
                  {record.name}
                </td>
                <td className="px-14 py-[3%] border border-gray-300">
                  {record.filetype}
                </td>
                <td className="px-14 py-[3%] border border-gray-300">
                  {record.time}
                </td>
                <td className="px-14 py-[3%] border border-gray-300">
                  {record.date}
                </td>
                <td className="px-14 py-[3%] border border-gray-300">
                  {record.status}
                </td>
                <td className="text-center border border-gray-300">
                  {record.status !== "Done" && (
                    <button
                      onClick={() => SuccessStatus(record._id)}
                      className="bg-red-700 px-3 py-1 rounded-xl text-white"
                    >
                      <CheckIcon className="w-5 h-5" />
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

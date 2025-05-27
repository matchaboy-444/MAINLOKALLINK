import axios from "axios";
import { useState, useEffect } from "react";

export default function Announcements() {
  const [announcements, setAnnouncements] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/announcements")
      .then((res) => {
        console.log(res.data);
        setAnnouncements(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);
  return (
    <>
      <section>
        <section>
          <b>
            <h1 className="text-4xl font-kanit p-4 text-blue-900">Dashboard</h1>
          </b>

          <article className="flex flex-col items-center space-y-4 p-4 bg-blue-200">
            <div>
              <b>
                <h1 className="text-2xl font-extrabold text-blue-600 text-center p-3">
                  Announcement
                </h1>
              </b>

              <div className="overflow-x-auto w-full">
                <table className="min-w-full border border-blue-500 border-collapse bg-blue-200">
                  <thead>
                    <tr className="bg-blue-300 text-white">
                      <th className="border border-blue-500 px-36 py-4 font-extrabold text-xl text-left">
                        ACTIVITY
                      </th>
                      <th className="border border-blue-500 px-36 py-4 font-extrabold text-xl text-left">
                        DATE
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {announcements.map((announcement, index) => (
                      <tr className="bg-blue-200" key={index}>
                        <td className="border border-blue-500 px-6 py-4 text-lg font-kanit font-bold">
                          {announcement.activity}
                        </td>
                        <td className="border border-blue-500 px-6 py-4 text-lg font-kanit">
                          {new Date(announcement.date).toLocaleDateString()}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </article>
        </section>
        <section>
          <b>
            <h1 className="text-4xl p-4 font-kanit text-blue-900">
              Previous Activities
            </h1>
          </b>
        </section>
      </section>
    </>
  );
}

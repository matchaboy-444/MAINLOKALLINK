import { useEffect, useState } from "react";
import axios from "axios";
import "/src/App.css";

export default function ResidentQuery() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/residents")
      .then((res) => {
        console.log(res.data);
        setUsers(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const FetchQuery = (e) => {
    e.preventDefault();
    const data = e.target;

    const ageData = data.age.value;

    let maxAge = null;
    let minAge = null;

    if (ageData) {
      [minAge, maxAge] = ageData.split("-").map(Number);
    }

    const QueryData = {
      name: data.name.value.trim(),
      ageMin: minAge,
      ageMax: maxAge,
      sex: data.sex.value,
      address: data.address.value.trim(),
      employment: data.employment.value,
    };

    axios
      .get("http://localhost:3000/residents-query", { params: QueryData })
      .then((res) => {
        console.log(res.data);
        setUsers(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <section className="p-10">
      <h1 className="text-4xl p-4 font-kanit font-bold text-blue-900">
        RESIDENT'S INFORMATION:
      </h1>
      <div className="flex flex-row">
        <form onSubmit={FetchQuery} className="font-semibold text-xl">
          <label>
            Name:{" "}
            <input
              name="name"
              type="text"
              className="border-2 border-gray-500 rounded-3xl px-3 font-extralight italic"
            />
          </label>
          <br />
          <br />
          <label>
            Age:{"  "}
            <select
              name="age"
              className="w-[40%] px-2 py-1 border border-gray-300 rounded-md shadow-sm text-[90%] text-slate-700 italic duration-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-blue-500"
            >
              <option value="" disabled selected>
                Select Age
              </option>
              <option value="1-17">17 and Below</option>
              <option value="18-25">18 - 25</option>
              <option value="26-30">26 - 30</option>
              <option value="31-45">31 - 45</option>
              <option value="46-60">46 - 60</option>
              <option value="60-100">60 and Above</option>
            </select>
          </label>
          <br />
          <br />
          <label>
            Sex:{"  "}
            <select
              name="sex"
              className="w-[40%] px-2 py-1 border border-gray-300 rounded-md shadow-sm text-[90%] text-slate-700 italic duration-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-blue-500"
            >
              <option value="" disabled selected>
                Select Sex
              </option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </label>
          <br />
          <br />
          <label>
            Address:{" "}
            <input
              type="text"
              name="address"
              className="border-2 border-gray-500 rounded-3xl px-3"
            />
          </label>
          <br />
          <label>
            Employment: <br />
          </label>
          <label className="flex items-center space-x-2 cursor-pointer">
            <input
              type="radio"
              name="employment"
              value="yes"
              className="appearance-none w-5 h-5 border-2 duration-100 border-gray-700 rounded-full checked:border-4 checked:bg-blue-300 checked:border-blue-500 focus:ring-2 focus:ring-blue-300 transition-all"
            />
            <span>YES</span>
          </label>
          <label className="flex items-center space-x-2 cursor-pointer">
            <input
              type="radio"
              name="employment"
              value="no"
              className="appearance-none w-5 h-5 border-2 duration-100 border-gray-700 rounded-full checked:border-4 checked:bg-rose-300 checked:border-rose-500 focus:ring-2 focus:ring-rose-300 transition-all"
            />
            <span>NO</span>
          </label>
          <input
            type="submit"
            value="Let's See!"
            className="relative left-24 bg-red-700 p-3 rounded-md text-white my-5 font-anton font-extralight"
          />{" "}
        </form>

        <div className="inline-block ml-[10px] p-4">
          <table className="w-full bg-gray-100 text-sm text-left border border-gray-300 appearing">
            <thead className="bg-gray-200 text-gray-700">
              <tr>
                <th className="px-14 py-[3%] border border-gray-300">Name</th>
                <th className="px-14 py-[3%] border border-gray-300">Age</th>
                <th className="px-14 py-[3%] border border-gray-300">Sex</th>
                <th className="px-14 py-[3%] border border-gray-300">
                  Address
                </th>
                <th className="px-14 py-[3%] border border-gray-300">
                  Employed
                </th>
              </tr>
            </thead>
            <tbody>
              {users.map((resident, index) => (
                <tr key={index}>
                  <td className="px-14 py-[3%] border border-gray-300">
                    {resident.name}
                  </td>
                  <td className="px-14 py-[3%] border border-gray-300">
                    {resident.age}
                  </td>
                  <td className="px-14 py-[3%] border border-gray-300">
                    {resident.sex}
                  </td>
                  <td className="px-14 py-[3%] border border-gray-300">
                    {resident.address}
                  </td>
                  <td className="px-14 py-[3%] border border-gray-300">
                    {resident.employed ? "Yes" : "No"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

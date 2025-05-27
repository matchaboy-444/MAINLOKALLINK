import { useEffect, useState } from "react";
import "/src/App.css";

export default function ActCalendar() {
  const [dates, setDates] = useState([]);
  const [year, setYr] = useState();
  const [month, setMnth] = useState();
  const [week, setWeek] = useState([]);
  const [startDay, setStartDay] = useState(0);

  useEffect(() => {
    const d = new Date();
    const yr = d.getFullYear();
    const mnth = d.getMonth();

    const days = new Date(yr, mnth + 1, 0).getDate();
    const firstDayIndex = new Date(yr, mnth, 1).getDay();

    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    const weekNames = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];

    const tempDates = [];
    for (let i = 1; i <= days; i++) {
      tempDates.push(i);
    }

    setStartDay(firstDayIndex);
    setMnth(monthNames[mnth]);
    setWeek(weekNames);
    setDates(tempDates);
    setYr(yr);
  }, []);

  return (
    <>
      <section className="p-10 ">
        <h1 className="text-4xl font-kanit p-4 font-bold text-blue-900">
          Calendars of Activities
        </h1>
        <section className="w-full h-fit ">
          <div className="w-full text-4xl flex justify-center items-center gap-2 mb-2">
            <h1 className="text-blue-700 font-kanit">{month}</h1>
            <span className="text-blue-700 font-kanit">,</span>
            <h1 className="text-blue-700 font-kanit">{year}</h1>
          </div>

          <div className="grid grid-cols-7 w-full h-10 border-y-2 border-solid border-black">
            {week.map((day, index) => (
              <div
                className="text-2xl text-blue-700 font-kanit flex justify-center items-center"
                key={index}
              >
                <h5>{day}</h5>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-7 w-full">
            {Array(startDay)
              .fill(null)
              .map((_, index) => (
                <div key={`empty-${index}`} className="h-28" />
              ))}

            {dates.map((date, index) => (
              <div
                className="h-28 flex justify-center items-start pt-5 font-kanit hover:bg-red-100 ease-in-out duration-300 rounded-lg"
                key={index}
              >
                <h5 className="text-center text-3xl">{date}</h5>
              </div>
            ))}
          </div>
        </section>
      </section>
    </>
  );
}

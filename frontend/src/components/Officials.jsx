import { useEffect, useState } from "react";
import sampprof from "/src/assets/samp-prof.png";
import axios from "axios";
import "/src/App.css";

export default function Officials() {
  const [Officials, setOfficials] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3000/officials")
      .then((res) => {
        console.log(res.data);
        setOfficials(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <section className="p-10 ">
        {" "}
        <h1 className="text-4xl font-kanit p-4 text-blue-900 font-bold">
          Barangay Officials
        </h1>
        {Officials.map((official, index) => {
          return (
            <div key={index}>
              <hr className="border-gray-600" />
              <div
                className="p-10 duration-200 hover:bg-slate-200 transition-all ease-in-out"
                onClick={() => alert("working")}
              >
                <div className="flex items-center gap-6">
                  <div className="p-5">
                    <img
                      src={sampprof}
                      alt=""
                      className="w-40 h-40 object-cover rounded-full"
                    />
                  </div>
                  <article className="font-kanit text-md">
                    <p>
                      POSITION:{" "}
                      <span className="text-md font-bold">
                        {official.position}
                      </span>
                    </p>
                    <p>
                      NAME: <span>{official.name}</span>
                    </p>
                    <p>
                      AGE: <span>{official.age}</span>
                    </p>
                    <p>
                      ADDRESS: <span>{official.address}</span>
                    </p>
                    <p>
                      CONTACTS: <span>{official.contacts}</span>
                    </p>
                    <p>
                      SOCIALS: <span>{official.socials}</span>
                    </p>
                  </article>
                </div>
              </div>
            </div>
          );
        })}
        <h1 className="text-4xl font-kanit p-4 text-blue-900 font-bold">
          Sangguniang Kabataan
        </h1>
        <hr className="border-gray-600" />
        <div>
          <div
            className="p-10 duration-200 hover:bg-slate-200 transition-all ease-in-out"
            onClick={() => {
              alert("working");
            }}
          >
            <div className="inline-block p-5">
              <img src={sampprof} alt="" />
            </div>{" "}
            <article className="inline-block font-kanit text-3xl">
              <p>
                POSITION:{" "}
                <span className="text-4xl font-bold">SK CHAIRPERSON</span>{" "}
              </p>
              <p>
                NAME: <span></span>{" "}
              </p>
              <p>
                AGE: <span></span>{" "}
              </p>
              <p>
                ADDRESS: <span></span>{" "}
              </p>
              <p>
                CONTACTS: <span></span>{" "}
              </p>
              <p>
                SOCIALS: <span></span>{" "}
              </p>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}

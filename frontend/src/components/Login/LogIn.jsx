import { useState, useRef, useEffect } from "react";
import axios from "axios";
import img1 from "/src/assets/login1.jpg";
import img2 from "/src/assets/login2.jpg";
import img3 from "/src/assets/bgr3.jpg";
import { useNavigate } from "react-router-dom";
import "/src/App.css";
import ErrorLogin from "./ErrorLogin";

const images = [img1, img2, img3];

export default function LogIn() {
  const [slideIndex, setSlideIndex] = useState(0);
  const touchStartX = useRef(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(interval);
  }, [slideIndex]);

  const nextSlide = () => {
    setSlideIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setSlideIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToSlide = (index) => {
    setSlideIndex(index);
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    if (!touchStartX.current) return;
    const touchEndX = e.touches[0].clientX;
    const difference = touchStartX.current - touchEndX;
    if (difference > 50) nextSlide();
    if (difference < -50) prevSlide();
    touchStartX.current = null;
  };

  const [User, SetUser] = useState("");
  const [Password, SetPassword] = useState("");
  const navigate = useNavigate();

  const HandleLogin = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/user", { user: User, password: Password })
      .then((res) => {
        if (res.status === 200) {
          if (res.data.role === "resident") {
            navigate("/main");
          } else if (res.data.role === "admin") {
            window.location.href = "http://localhost:5174/";
          }
        }
      })
      .catch((err) => {
        if (err?.response.status == 409 || err?.response.status == 500) {
          setShow(true);
        }
        console.log(err.response);
      });
  };

  return (
    <div className="h-screen w-screen overflow-hidden flex flex-col">
      <header className="flex items-center justify-between bg-red-700 p-4">
        <div className="flex items-center space-x-4">
          <h1 className="relative left-5 transform -rotate-90 text-white font-normal text-3xl font-anton px-0 text-outline">
            163
          </h1>
          <h1 className="text-4xl text-white font-anton font-normal py-3 px-0 leading-none">
            LokalLink
          </h1>
        </div>
      </header>

      <div className="flex flex-1 h-full w-full">
        <div
          className="w-1/2 relative overflow-hidden h-full "
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
        >
          <div
            className="flex transition-transform duration-500 ease-in-out h-full"
            style={{ transform: `translateX(-${slideIndex * 100}%)` }}
          >
            {images.map((image, index) => (
              <div key={index} className="w-full flex-shrink-0 h-full">
                <img
                  src={image}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>

          <button
            className="absolute top-1/2 left-0 transform -translate-y-1/2 text-white bg-black bg-opacity-50 hover:bg-opacity-80 px-4 py-2 rounded-r"
            onClick={prevSlide}
          >
            &#10094;
          </button>
          <button
            className="absolute top-1/2 right-0 transform -translate-y-1/2 text-white bg-black bg-opacity-50 hover:bg-opacity-80 px-4 py-2 rounded-l"
            onClick={nextSlide}
          >
            &#10095;
          </button>

          <div className="flex justify-center mt-4 space-x-2 absolute bottom-4 w-full">
            {images.map((_, index) => (
              <span
                key={index}
                className={`h-3 w-3 rounded-full cursor-pointer ${
                  slideIndex === index ? "bg-green-500" : "bg-gray-400"
                }`}
                onClick={() => goToSlide(index)}
              ></span>
            ))}
          </div>
        </div>

        <div className="w-1/2 flex items-center  justify-center h-full intro">
          <section className="w-fit h-fit p-10 border border-solid border-red-500 -mt-40">
            <h1 className="text-4xl font-kanit p-4 font-bold text-blue-900">
              LOG IN
            </h1>
            <form
              className="flex flex-col gap-4 text-xl"
              onSubmit={HandleLogin}
            >
              <select
                required
                name="Select"
                value={User}
                onChange={(e) => SetUser(e.target.value)}
                className="w-[300px] px-2 py-1 border border-gray-300 rounded-md shadow-sm text-[90%] text-slate-700 italic duration-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-blue-500"
              >
                <option value="" disabled>
                  Type of User
                </option>
                <option value="resident">Resident</option>
                <option value="admin">Admin</option>
              </select>

              <input
                required
                type="password"
                value={Password}
                onChange={(e) => SetPassword(e.target.value)}
                className="border p-2 w-[300px]"
                placeholder="Password"
              />
              <button
                type="submit"
                className="bg-red-700 text-white py-2 mt-4 hover:bg-blue-700 duration-700 w-[300px]"
              >
                Log In
              </button>
            </form>
          </section>
        </div>
        {show && (
          <ErrorLogin
            onclose={() => {
              setShow(false);
            }}
          />
        )}
      </div>
    </div>
  );
}

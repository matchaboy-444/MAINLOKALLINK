import { useNavigate } from "react-router-dom";
import "/src/App.css";

export default function Logout({ logout, setlogout }) {
  if (!logout) return null;

  const navigate = useNavigate();
  const LogOutting = () => {
    navigate("/");
  };
  return (
    <section className="absolute intro left-[40%] top-[30%] h-fit w-fit p-8 bg-white rounded-lg shadow-[6px_9px_0px_0px_rgba(0,_0,_0,_0.35)]">
      <h1 className="text-xl">Are you sure to Log-Out?</h1>
      <br />
      <br />
      <br />
      <button
        className="px-3 py-3 mx-5 text-white bg-blue-300 rounded-xl"
        onClick={() => {
          LogOutting();
        }}
      >
        YES
      </button>
      <button
        className="px-3 py-3 ml-5 text-white bg-blue-300 rounded-xl"
        onClick={() => setlogout(false)}
      >
        NO
      </button>
    </section>
  );
}

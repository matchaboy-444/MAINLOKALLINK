import Announcements from "./Dashboard-Components/Announcement";
import BarangayOffi from "./Dashboard-Components/BarangayOffi";
import SlidingImager from "./Dashboard-Components/SlidingImg";
import "/src/App.css";

export default function Dashboard() {
  return (
    <>
      <section className="p-10 ">
        <Announcements />
        <SlidingImager />
        <BarangayOffi />
      </section>
    </>
  );
}

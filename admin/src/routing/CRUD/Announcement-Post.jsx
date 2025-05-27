import axios from "axios";

export default function AddAnnouncements({ onclose }) {
  const handleSubmit = (e) => {
    e.preventDefault();

    const AnnouncementInfo = e.target;
    const NewAnnouncement = {
      activity: AnnouncementInfo.activity.value,
      date: AnnouncementInfo.date.value,
    };

    axios
      .post("http://localhost:3000/announcements-admin", NewAnnouncement)
      .then((res) => {
        alert("Sucessfully Added");
        console.log(res.data);
        location.reload();
        onclose();
      })
      .catch((err) => {
        console.log(err);
        if (err.response == 409) {
          alert("This Data is already exist");
          console.log(err);
        } else {
          alert("Server Error");
          console.log(err);
        }
      });
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <section className="font-kanit flex flex-col text-2xl gap-4 max-w-md">
          <input
            type="text"
            placeholder="Add Activity"
            name="activity"
            required
          />
          <input type="date" name="date" required />
          <button
            type="submit"
            className="bg-red-700 text-white py-2 mt-4 hover:bg-blue-700"
          >
            Submit
          </button>
        </section>
      </form>
    </>
  );
}

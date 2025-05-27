import axios from "axios";

export default function UpdateAnnouncement({ onclose }) {
  const handleUpdate = (e) => {
    e.preventDefault();

    const data = e.target;
    const id = e.target.id.value;

    const FormData = {
      activity: data.activity.value,
      date: data.date.value,
    };

    axios
      .put(`http://localhost:3000/announcements-admin/${id}`, FormData)
      .then((res) => {
        alert("Data is Successfully Added");
        console.log(res.data);
        location.reload();
        onclose();
      })
      .catch((err) => {
        if (err.response && err.response.status === 404) {
          alert("Data does not exist");
          console.log(err);
        } else {
          alert("Server Error");
          console.log(err);
        }
        console.log(err);
      });
  };

  return (
    <>
      <form onSubmit={handleUpdate}>
        <section className=" flex flex-col text-2xl gap-4 max-w-md">
          <input
            type="text"
            name="id"
            placeholder="Announcement ID"
            className="border p-2"
            required
          />
          <input
            type="text"
            placeholder="Add Activity"
            name="activity"
            className="border p-2"
          />
          <input
            type="date"
            name="date"
            className="border p-2"
            placeholder="Add a Date"
          />
          <button
            type="submit"
            className="bg-red-700 text-white py-2 mt-4 hover:bg-blue-700"
          >
            Update
          </button>
        </section>
      </form>
    </>
  );
}

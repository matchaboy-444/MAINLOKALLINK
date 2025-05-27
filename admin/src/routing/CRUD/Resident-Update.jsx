import axios from "axios";

export default function ResidentUpdate() {
  const UpdateButton = (e) => {
    e.preventDefault();
    const form = e.target;
    const residentId = form.id.value;

    const residentForm = {
      name: form.name.value,
      age: form.age.value,
      sex: form.sex.value,
      address: form.address.value,
      employment: form.employment.value,
    };

    axios
      .put(`http://localhost:3000/residents/${residentId}`, residentForm)
      .then((res) => {
        console.log(res.data);
        alert("Updated Successfully!");
        location.reload();
      })
      .catch((err) => {
        if (err.response && err.response.status === 404) {
          alert("Resident not found");
        }
      });
  };

  return (
    <>
      <form
        onSubmit={UpdateButton}
        className="flex flex-col gap-4 max-w-md text-xl"
      >
        <input
          type="text"
          name="id"
          placeholder="Resident ID"
          className="border p-2"
          required
        />
        <input
          type="text"
          name="name"
          placeholder="Name"
          className="border p-2"
        />
        <input
          type="number"
          name="age"
          placeholder="Age"
          className="border p-2"
        />
        <input
          type="text"
          name="sex"
          placeholder="Sex"
          className="border p-2"
        />
        <input
          type="text"
          name="address"
          placeholder="Address"
          className="border p-2"
        />
        <input
          type="text"
          name="employment"
          placeholder="Employed"
          className="border p-2"
        />
        <button type="submit" className="bg-red-700 text-white p-2 font-kanit">
          Update
        </button>
      </form>
    </>
  );
}

import axios from "axios";

export default function UpdateOfficials({ onclose }) {
  const HandleSubmit = (e) => {
    e.preventDefault();

    const FormData = e.target;

    const id = e.target.id.value;

    const UpdateData = {
      name: FormData.name.value,
      age: FormData.age.value,
      sex: FormData.sex.value,
      address: FormData.address.value,
      yrElected: FormData.yr_elected.value,
      position: FormData.position.value,
    };

    axios
      .put(`http://localhost:3000/officials/${id}`, UpdateData)
      .then((res) => {
        console.log(res.data);
        alert("Data is Successfully Added");
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
      <form
        className="flex flex-col gap-4 max-w-md text-xl"
        onSubmit={HandleSubmit}
      >
        <input
          type="text"
          placeholder="Official's Id"
          name="id"
          className="border-2 p-2"
        />
        <input
          type="text"
          placeholder="Name"
          name="name"
          className="border-2 p-2"
        />
        <input
          type="number"
          placeholder="Age"
          name="age"
          className="border-2 p-2"
        />
        <input
          type="text"
          placeholder="Sex"
          name="sex"
          className="border-2 p-2"
        />
        <input
          type="text"
          placeholder="Address"
          name="address"
          className="border-2 p-2"
        />
        <input
          type="number"
          placeholder="Year Elected"
          name="yr_elected"
          className="border-2 p-2"
        />
        <input
          type="text"
          placeholder="Position"
          name="position"
          className="border-2 p-2"
        />
        <button
          type="submit"
          className="bg-red-700 text-white py-2 mt-4 hover:bg-blue-700"
        >
          Submit
        </button>
      </form>
    </>
  );
}

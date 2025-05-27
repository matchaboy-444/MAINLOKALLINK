import axios from "axios";

export default function AddOfficials({ onclose }) {
  const HandleSubmit = (e) => {
    e.preventDefault();

    const FormData = e.target;
    const AddData = {
      name: FormData.name.value,
      age: FormData.age.value,
      sex: FormData.sex.value,
      address: FormData.address.value,
      yearElected: FormData.elected.value,
      position: FormData.position.value,
    };

    axios
      .post("http://localhost:3000/officials", AddData)
      .then((res) => {
        console.log(res.data);
        alert("New Data Added");
        location.reload();
        onclose();
      })
      .catch((err) => {
        if (err.status == 409) {
          alert("Data error");
        } else {
          alert("Server error");
        }
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
          name="elected"
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

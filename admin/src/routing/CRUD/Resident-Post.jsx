import { useState } from "react";
import axios from "axios";

export default function ResidentPost({ onclose }) {
  const submitvalue = (e) => {
    e.preventDefault();
    const formData = e.target;
    const data = {
      name: formData.name.value,
      age: formData.age.value,
      sex: formData.sex.value,
      address: formData.address.value,
      employed: formData.employed.value,
    };

    axios
      .post("http://localhost:3000/residents", data)
      .then((res) => {
        console.log(res.data);
        alert("successfully added!");
        onclose();
        location.reload();
      })
      .catch((err) => {
        console.error(err);

        if (err.response.status == 409) {
          alert("THIS DATA ALREADY EXIST!");
        } else {
          alert("THERE IS AN ERROR WHILE SAVING!");
        }
      });
  };

  return (
    <form
      onSubmit={submitvalue}
      className="flex flex-col gap-4 max-w-md text-xl"
    >
      <input
        type="text"
        name="name"
        className="border p-2 "
        placeholder="Name"
        required
      />

      <input
        type="number"
        name="age"
        className="border p-2 "
        placeholder="Age"
        required
      />

      <input
        type="text"
        name="sex"
        className="border p-2 "
        placeholder="Sex"
        required
      />

      <input
        type="text"
        name="address"
        className="border p-2 "
        placeholder="Address"
        required
      />

      <input
        type="text"
        name="employed"
        className="border p-2 "
        placeholder="Employed"
        required
      />

      <button
        type="submit"
        className="bg-red-700 text-white py-2 mt-4 hover:bg-blue-700"
      >
        Submit
      </button>
    </form>
  );
}

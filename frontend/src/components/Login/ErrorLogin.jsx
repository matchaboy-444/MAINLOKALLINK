import {
  PlusIcon,
  PencilIcon,
  TrashIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
export default function ErrorLogin({ onclose }) {
  return (
    <>
      <section className="absolute left-[40%] top-[35%]  w-[15%] h-fit text-justify px-6 bg-red-700 rounded-md shadow-[inset_0px_-19px_56px_0px_rgba(0,_0,_0,_0.1)] border-red-500 border-2">
        <XMarkIcon
          className="text-white w-4 inline-block items-end "
          onClick={() => {
            onclose();
          }}
        />
        <h1 className="text-sm font-kanit p-4 text-white font-light">
          The credentials you entered are incorrect. Please contact the
          administrator for assistance.
        </h1>
      </section>
    </>
  );
}

export default function LogOut({ onclose }) {
  return (
    <>
      <section className="fixed intro top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-fit w-fit p-8 bg-white rounded-lg shadow-[6px_9px_0px_0px_rgba(0,_0,_0,_0.35)]">
        <h1 className="text-xl">Are you sure to Log-Out?</h1>
        <br />
        <br />
        <br />
        <button
          className="px-3 py-3 mx-5 text-white bg-blue-300 rounded-xl"
          onClick={() => {
            window.location.href = "http://localhost:5173/";
          }}
        >
          YES
        </button>
        <button
          className="px-3 py-3 ml-5 text-white bg-blue-300 rounded-xl"
          onClick={() => {
            onclose();
          }}
        >
          NO
        </button>
      </section>
    </>
  );
}

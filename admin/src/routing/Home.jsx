export default function Home() {
  return (
    <>
      <section>
        <h1 className="relative text-center text-4xl font-kanit font-bold text-blue-900 mt-5">
          WELCOME ADMIN!
        </h1>
        <br />
        <div className="h-fit w-[100%] px-36  ">
          <p className="font-kanit text-lg  items-center text-justify">
            Welcome, Administrator! You&apos;ve successfully accessed the
            163LokalLink Management Dashboard — the central command hub designed
            exclusively for empowered leaders like you. As an admin, you hold
            the key to a dynamic system that brings structure, transparency, and
            efficiency to barangay governance. Here, you can confidently manage
            official records, update resident information, organize
            announcements, and fine-tune every corner of the database with ease
            and precision. Your actions here directly shape the way information
            flows to the public — ensuring that constituents stay informed,
            engaged, and connected to their community leaders. Whether
            you&apos;re adding new barangay officials, editing roles, or
            streamlining data across different sections, know that your role is
            crucial in maintaining the credibility and responsiveness of the
            163LokalLink portal. Proceed with purpose, lead with clarity, and
            let this platform be your tool for meaningful digital governance.
          </p>
        </div>
        <br />
        <iframe
          width="99%"
          height="400"
          loading="lazy"
          src="https://maps.google.com/maps?width=600&height=400&hl=en&q=%20%20%20%20%20%20%20%20%20%20Barangay%20163%20Zone%2014%20District%20II%20Manila%20Vicinity%20Map&t=&z=18&ie=UTF8&iwloc=B&output=embed"
          className="inline-block m-2 border-r-4 items-center"
        />
      </section>
    </>
  );
}

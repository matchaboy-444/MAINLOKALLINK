import title from "./assets/title.jpg";
import bgrtwo from "./assets/bgr2.jpg";
import bgrthree from "./assets/bgr3.jpg";
import bgrfour from "./assets/bgr4.jpg";
import { FaUserTie, FaPhone } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import "./App.css";

export default function Home() {
  return (
    <>
      <section>
        <img
          src={title}
          alt="not working"
          className="  mx-5 my-3 rounded-md appearing"
        />
        <article className=" h-fit w-fit p-5">
          <hr className=" border-gray-600" />

          <h1 className="intro relative text-center text-4xl font-kanit font-bold text-blue-900 mt-5">
            Welcome to 163LokalLink!
          </h1>
          <br />
          <p className="intro font-kanit text-lg text-justify ">
            Your one-stop portal for everything about our barangay! 163LokalLink
            is designed to connect you with your local leaders, services, and
            community updates. Whether you're looking for information about
            barangay officials, upcoming events, or important announcements,
            we've got you covered. Our goal is to make staying informed and
            engaged with our barangay easier and more convenient than ever.
            Explore the features, stay connected, and be part of a more united
            community!
          </p>
          <div className="intro m-5 p-5 flex items-start justify-center">
            <img
              src={bgrtwo}
              alt="not working"
              width={500}
              className="intro inline-block ml-5 mr-10 rounded-md"
            />
            <p className="intro inline-block text-lg font-kanit w-96 ml-10 text-justify ">
              The Barangay 163 office, located in Zone 14, District 2, Manila,
              serves as a hub for local community services and engagement. The
              entrance, decorated with festive holiday ornaments, highlights the
              welcoming atmosphere of the barangay hall. The building, named
              after P/B Lourdes S. Gutierrez, represents the barangay&apos;s
              commitment to serving the needs of its residents. It functions as
              a space for meetings, public services, and support for local
              programs, fostering a sense of community and governance.
            </p>
          </div>
          <hr className="intro border-gray-600" />

          <div className="intro mt-5">
            <img
              src={title}
              alt="not working"
              className="intro rounded-md mb-5"
            />
            <p className="intro font-kanit text-lg justify-center p-7 text-justify">
              The vibrant Barangay 163 stands out with its iconic “I ❤️ Barangay
              163” signage, symbolizing pride and community spirit. The area
              reflects the barangay's dedication to providing accessible
              services and fostering a safe and welcoming environment for its
              residents. With its central location, the facility serves as a
              vital hub for local programs, administrative services, and
              community gatherings, embodying the essence of unity and local
              governance.
            </p>
            <hr className="intro border-gray-600" />
          </div>

          <div className="intro  p-5 flex items-start justify-end mr-20">
            <p className="intro inline-block text-xl pt-5 font-kanit w-[50%] mr-10 text-justify">
              The Barangay 163 Multi-Purpose Building, located on Juan Luna
              Street, Gagalangin, Tondo, Manila, serves as a venue for community
              events and public service. This four-story building honors the
              contributions of barangay officials and partners, with strong
              support from Hon. Rolando "CRV" Valeriano, the representative of
              District 2 Manila. It stands as a symbol of progress and
              commitment to the betterment of Barangay 163.
            </p>
            <img
              src={bgrthree}
              alt="not working"
              width={250}
              className="intro inline-block rounded-md ml-10"
            />
          </div>

          <hr className="intro border-gray-600" />

          <div className="intro  ml-20 p-5 flex items-start justify-start">
            <img
              src={bgrfour}
              alt="not working"
              width={250}
              className="intro inline-block ml-5 mr-10 rounded-md"
            />
            <p className="intro inline-block text-xl font-kanit w-[50%] ml-10 text-justify">
              The entrance of Barangay 163, adorned with the prominent Baranagay
              Logo signage, reflects the vibrant and welcoming spirit of the
              community. It stands as a gateway to the barangay's facilities,
              symbolizing the unity, pride, and commitment of its leaders and
              residents to maintaining a safe and thriving neighborhood. The
              entrance serves as a focal point for daily activities, embodying
              the barangay's dedication to public service and community
              well-being.
            </p>
          </div>

          <hr className="intro border-gray-600" />
        </article>

        <div className="intro  flex justify-center mb-10">
          <NavLink to="/main/officials">
            <section className="intro inline-block p-5 ml-10 hover:bg-slate-200 ease-in-out duration-400 transition-all rounded-xl">
              <FaUserTie className="intro text-9xl  text-gray-700 m-5" />
              <h1 className="intro font-kanit text-xl font-semibold">
                Barangay Officials
              </h1>
            </section>
          </NavLink>

          <section className="intro inline-block p-5 ml-10 hover:bg-slate-200 ease-in-out duration-400 transition-all rounded-xl">
            <FaPhone className="intro text-9xl text-gray-700 m-5" />
            <h1 className="intro font-kanit text-xl font-semibold">
              Contact Us
            </h1>
          </section>
        </div>
      </section>
    </>
  );
}

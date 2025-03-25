import React from "react";
import SectionTitle from "./SectionTitle";

const ContactMe = () => {
  return (
    <>
      <div id="contact" className=" center mt-12 md:mt-28">
        {/* <div className="bg-gradient-to-r from-indigo-500  to-Primary text-white p-6 rounded-2xl flex flex-col md:flex-row justify-between md:items-center shadow-lg">
          Text Content
          <div className="flex-1">
            <h2 className="text-xl md:text-2xl font-bold text-black">
              Let's create something amazing together
            </h2>
            <p className="text-gray-800 mt-2">
              Ready to bring your next project to life? Let’s connect and
              discuss how I can help you achieve your goals.
            </p>
          </div>

          Button
          <a
            href="https://www.facebook.com/AhmedNuman2004"
            target="_blank"
            className="mt-4 md:mt-0 bg-black text-white px-5 py-2 rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-gray-900"
          >
            Contact Me ↗
          </a>
        </div> */}

        <h1 className="text-4xl font-extrabold text-center">
          Contact <span>.</span>
        </h1>
      </div>
    </>
  );
};

export default ContactMe;

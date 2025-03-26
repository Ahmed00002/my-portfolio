import React from "react";
import SectionTitle from "./SectionTitle";
import { FaEnvelope } from "react-icons/fa";
import Reveal from "./Reveal";

const ContactMe = () => {
  return (
    <>
      <div id="contact" className=" center my-28 md:my-48">
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

        <Reveal>
          <h1 className="text-5xl lg:text-6xl font-extrabold text-center">
            Contact<span className="text-Primary">.</span>
          </h1>
        </Reveal>
        <Reveal delay={"0.1"}>
          <p className="text-center md:w-9/12 lg:w-7/12 mx-auto mt-6 text-lg font-light text-gray-300">
            Feel free to drop me an email if you’d like to connect! Or, if
            <span className="font-bold text-Primary cursor-pointer">
              {" "}
              <a
                href="https://www.linkedin.com/in/layekahmednuman/"
                target="_blank"
              >
                {" "}
                Linkedin
              </a>
            </span>{" "}
            is more your style, you’ll find me there too—let’s make something
            awesome together! 🚀
          </p>
        </Reveal>
        <Reveal delay={".15"}>
          <div className="flex items-center gap-2 justify-center mt-6 text-gray-300 cursor-pointer hover:text-Primary transition-colors duration-200">
            <FaEnvelope />
            <a href="mailto:layekahmednuman01@gmail.com">
              layekahmednuman01@gmail.com
            </a>
          </div>
        </Reveal>
      </div>
    </>
  );
};
0;
export default ContactMe;

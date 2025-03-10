import Spline from "@splinetool/react-spline";
import { useEffect, useRef } from "react";
import { Typewriter } from "react-simple-typewriter";
import { snowflakeCursor } from "cursor-effects";

const Header = () => {
  const target = useRef(null);
  useEffect(() => {
    new snowflakeCursor();

    return;
  }, []);
  const words = ["Frondend Developer", "React Developer"];

  return (
    <>
      <header ref={target} className=" text-white  mb-28">
        <div className="center py-6 grid grid-cols-2 min-h-svh ">
          {/* author intro container */}
          <div className="flex flex-col justify-center gap-8">
            <h2 className="uppercase text-xl 2xl:text-3xl font-medium">
              Hello
            </h2>
            <h1 className="text-4xl md:text-5xl 2xl:text-6xl font-bold">
              I'm Ahmed Numan a
            </h1>
            <p className="text-4xl md:text-5xl 2xl:text-6xl text-Primary font-bold">
              {" "}
              <Typewriter
                words={words}
                loop={false}
                cursorBlinking={false}
                cursor
                cursorStyle={"|"}
                cursorColor="#ff014f"
                typeSpeed={20}
                delaySpeed={1000}
              />
            </p>
            <p className="text-md md:text-lg 2xl:text-xl text-gray-300">
              A personal portfolio is a collection of your work, achievements,
              and skills that highlights your abilities and professional growth.
              It serves as
            </p>

            <div className="mt-6">
              <button className="px-8 py-4 bg-Primary rounded-full uppercase text-lg font-medium cursor-pointer">
                Download CV
              </button>
            </div>
          </div>
          {/* author image container */}
          <div className="flex items-center justify-center">
            <div className="w-12 h-23 block shadow-2xl bg-transparent shadow-gray-50"></div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;

import { useEffect, useRef } from "react";
import { Typewriter } from "react-simple-typewriter";
import { snowflakeCursor } from "cursor-effects";
import grainBg from "../../assets/images/grain.jpg";

import StarIcon from "../../assets/icons/star.svg";
import Active from "./Active";

const Header = () => {
  const target = useRef(null);
  useEffect(() => {
    new snowflakeCursor();

    return;
  }, []);
  const words = ["Frondend Developer", "React Developer"];

  return (
    <>
      <header
        ref={target}
        className=" text-white  mb-28 relative z-0 min-h-svh  flex justify-center items-center overflow-hidden "
      >
        {/* grain bg */}
        <div className="absolute inset-0  [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)] h-full w-full  ">
          <div
            className="h-full w-full -z-50 opacity-10 absolute top-0 left-0 block "
            style={{ backgroundImage: `url(${grainBg})` }}
          ></div>

          {/* round shapes start*/}
          <div className="size-[620px] hero-ring"></div>
          <div className="size-[800px] hero-ring"></div>
          <div className="size-[1020px] hero-ring"></div>
          <div className="size-[1220px] hero-ring"></div>
          {/* round shapes end */}
        </div>

        {/* star icons and dot icon */}
        {/* <div></div> */}

        {/* container */}
        <div className="center py-6 grid items-center justify-center h-full ">
          {/* author intro container */}
          <div className="flex flex-col justify-center items-center gap-4 2xl:gap-8 relative z-0">
            <Active />
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
              and passionate web developer, who loves to build Professional,
              Modern and User Friendly website.
            </p>

            <div className="mt-6 flex gap-6">
              <button className="px-8 py-3 bg-Primary rounded-full uppercase text-lg font-medium cursor-pointer">
                Lets Talk
              </button>
              <button className="px-8 py-3 bg-transparent border-[1px] border-gray-300 rounded-full uppercase text-lg font-medium cursor-pointer">
                Download CV
              </button>
            </div>
          </div>
          {/* author image container */}
          {/* <div className="flex items-center justify-center">
            <div className="w-12 h-23 block shadow-2xl bg-transparent shadow-gray-50"></div>
          </div> */}
        </div>
      </header>
    </>
  );
};

export default Header;

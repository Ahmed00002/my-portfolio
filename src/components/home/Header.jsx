import { useEffect, useRef } from "react";
import { Typewriter } from "react-simple-typewriter";
import { snowflakeCursor } from "cursor-effects";
import grainBg from "../../assets/images/grain.jpg";

// import StarIcon from "../../assets/icons/star.svg";
import Active from "./Active";
import Reveal from "../shared/Reveal";
// import sparkle from "../../assets/icons/sparkle.png";

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
        id="intro"
        ref={target}
        className="  mb-28 md:mb-48  relative z-0 py-18 md:py-36 lg:py-0 lg:min-h-svh  flex justify-center items-center overflow-hidden "
      >
        {/* grain bg */}
        <div className="absolute inset-0  [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)] h-full w-full  py-18 md:py-36 lg:py-0">
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
            <Reveal>
              <Active />
            </Reveal>
            <Reveal delay={".1"}>
              <h1 className="text-3xl md:text-6xl 2xl:text-7xl font-bold w-full text-center">
                I'm Ahmed Numan a
              </h1>
            </Reveal>
            <Reveal delay={".2"}>
              <p className="text-3xl md:text-5xl 2xl:text-6xl text-Primary font-bold mx-auto w-full text-center">
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
            </Reveal>
            <Reveal delay={".3"}>
              <p className="text-md md:text-lg 2xl:text-xl text-gray-400 w-11/12 md:w-9/12 text-center mx-auto">
                and passionate web developer, who loves to build Professional,
                Modern and User Friendly web applications.
              </p>
            </Reveal>

            <Reveal delay={".4"}>
              <div className="mt-6 items-center justify-center flex gap-6">
                <a href="#contact">
                  <button className="px-4 lg:px-8 py-2 md:py-3 bg-Primary rounded-full uppercase text-md md:text-lg font-medium cursor-pointer">
                    Lets Talk
                  </button>
                </a>
                <a
                  target="_blank"
                  href="https://drive.google.com/file/d/1Vogm7D_sjTPJdZ44oLUral6rLqLhTZGR/view?usp=drive_link"
                >
                  <button className="px-4 lg:px-8 py-2 md:py-3 bg-transparent border-[1px] border-gray-300 rounded-full uppercase text-md md:text-lg font-medium cursor-pointer">
                    Download CV
                  </button>
                </a>
              </div>
            </Reveal>
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

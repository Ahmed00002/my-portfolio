import { Typewriter } from "react-simple-typewriter";

const Header = () => {
  const words = ["Frondend Developer", "React Developer"];
  return (
    <>
      <header className=" bg-Background text-white ">
        <div className="center py-6 grid grid-cols-2 min-h-svh">
          {/* author intro container */}
          <div className="flex flex-col justify-center gap-8">
            <h2 className="uppercase text-xl font-medium">Hello</h2>
            <h1 className="text-5xl font-bold">I'm Ahmed Numan a</h1>
            <p className="text-5xl text-Primary font-bold">
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
            <p className="text-lg text-gray-300">
              A personal portfolio is a collection of your work, achievements,
              and skills that highlights your abilities and professional growth.
              It serves as
            </p>

            <div>
              <button className="px-8 py-4 bg-Primary rounded-full uppercase text-lg font-medium">
                Download CV
              </button>
            </div>
          </div>
          {/* author image container */}
          <div></div>
        </div>
      </header>
    </>
  );
};

export default Header;

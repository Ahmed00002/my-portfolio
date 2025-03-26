import myImg from "../../assets/images/my1.png";
import grainImg from "../../assets/images/grain.jpg";
import Reveal from "../shared/Reveal";
const AboutMe = () => {
  return (
    <div
      id="about"
      className="mb-48  center grid grid-cols-1 md:grid-cols-2 gap-18 md:gap-0 font-Roboto"
    >
      <div className="flex flex-col gap-4 order-2 md:order-0">
        <Reveal delay={"0"}>
          <p className="text-Primary uppercase tracking-wider font-medium">
            About Me
          </p>
        </Reveal>
        <Reveal delay={".1"}>
          <h1 className="text-3xl md:text-4xl font-bold">Know who am I</h1>
        </Reveal>
        <Reveal delay={"0.2"}>
          <p className="text-gray-300">My journey in few words</p>
        </Reveal>
        <Reveal delay={"0.1"}>
          <h2 className="text-gray-400">
            I’m a passionate web developer who loves exploring new technologies
            and building real-world applications. My expertise lies in React,
            Tailwind CSS, MongoDB, and Express.js, and I enjoy turning ideas
            into functional and visually appealing projects. So far, I’ve worked
            on projects like Visa Navigator, Library Management System,
            Scholarship Finder, and Restaurant Management System. Currently, I’m
            diving into real-time messaging using Socket.io/WebSockets to build
            a chat system similar to WhatsApp, where users can connect
            seamlessly. Besides coding, I have an entrepreneurial mindset and
            run my own grocery business. Balancing both tech and business
            excites me, and I’m always eager to learn, grow, and take on new
            challenges. 🚀 Let’s build something amazing!
          </h2>
        </Reveal>
      </div>
      <div className="flex justify-center items-center ">
        <Reveal delay={"0"}>
          <div className="bg-[#20172d] w-10/12 md:w-9/12 md:h-9/12 lg:w-5/12 h-11/12 rounded-lg rotate-5 relative p-2 mx-auto">
            <div
              style={{
                backgroundImage: `url(${grainImg})`,
              }}
              className="absolute inset-0 -z-10 opacity-5"
            ></div>
            <img
              className=" md:h-full md:w-full object-cover rounded-lg"
              src={myImg}
              alt=""
            />
            <p className="bg-Primary text-white absolute top-full right-0 -translate-y-3 -rotate-10 px-4 rounded-md">
              Numan
            </p>
          </div>
        </Reveal>
      </div>
    </div>
  );
};

export default AboutMe;

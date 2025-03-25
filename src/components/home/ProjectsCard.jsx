import { FaGlobe, FaRegCheckCircle } from "react-icons/fa";
import grainImg from "../../assets/images/grain.jpg";
import { SiGithub } from "react-icons/si";
import Marquee from "react-fast-marquee";

const ProjectsCard = ({ project }) => {
  const {
    name,
    title,
    thumbnail,
    subtitle,
    features,
    stacks,
    gitHub,
    liveLink,
  } = project;
  return (
    <>
      <div className="bg-[#20172d] text-white p-6 md:p-12 rounded-2xl w-full  mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-6 shadow-lg relative z-0 overflow-hidden">
        {/* grain bg */}
        <div
          style={{
            backgroundImage: `url(${grainImg})`,
          }}
          className="absolute inset-0 -z-10 opacity-10 "
        ></div>
        {/* Left Side Content */}
        <div className="flex-1 flex flex-col order-2 lg:order-1">
          {/* title */}
          <p className="text-green-400 uppercase tracking-wide font-semibold">
            {name}
          </p>
          <h2 className="text-3xl font-bold mt-2">{title}</h2>
          <p className="text-gray-400 mt-4">{subtitle}</p>
          <div className="border-b border-gray-600 my-4"></div>{" "}
          {/* Divider Fix */}
          <ul className="mt-4 space-y-2 text-gray-400">
            {features.map((feature) => (
              <li className="flex gap-2 items-center">
                <FaRegCheckCircle /> {feature}
              </li>
            ))}
          </ul>
          {/* marque */}
          <div className=" mt-6 gap-4 relative z-0">
            {/* <div className="absolute top-0 left-0 z-10 h-full w-full bg-gradient-to-r from-[#20172d] via-transparent to-[#20172d] "></div> */}
            <Marquee autoFill>
              {stacks.map((stack, idx) => (
                <div className="ml-2 px-4 py-1 border-gray-400 text-gray-400 border rounded-lg block">
                  <h1 key={idx}>{stack}</h1>
                </div>
              ))}
            </Marquee>
          </div>
          {/* Button container  */}
          <div className="mt-auto flex gap-4">
            <a
              target="_blank"
              href={liveLink}
              className="mt-6 text-xl bg-white text-black px-5 py-2 rounded-lg font-semibold flex items-center gap-2 hover:bg-gray-200"
            >
              <FaGlobe />
            </a>
            <a
              target="_blank"
              href={gitHub}
              className="mt-6 text-xl bg-white text-black px-5 py-2 rounded-lg font-semibold flex items-center gap-2 hover:bg-gray-200"
            >
              <SiGithub />
            </a>
          </div>
        </div>

        {/* Right Side Image */}
        <div className="flex-1 flex justify-center h-full relative order-1 lg:order-2">
          <img
            src={thumbnail}
            alt="SaaS Landing Page"
            className="rounded-xl shadow-lg lg:absolute w-full h-full  -right-15 -bottom-15"
          />
        </div>
      </div>
    </>
  );
};

export default ProjectsCard;

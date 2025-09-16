import { FaGithub } from "react-icons/fa";
import grainImg from "../../assets/images/grain.jpg";
import { LiaExternalLinkAltSolid } from "react-icons/lia";
import Marquee from "react-fast-marquee";

const ProjectCardDesign = ({ project }) => {
  const {
    name,
    // title,
    thumbnail,
    subtitle,
    // features,
    // description,
    // stacks,
    gitHub,
    liveLink,
    topStacks,
  } = project;
  return (
    <div>
      <section>
        {/* project screenshot container */}
        <div className="bg-[#20172d] text-gray-800 aspect-video overflow-hidden relative flex justify-end items-end group cursor-pointer rounded-t-md rounded-b-xl z-0">
          {/* grain bg */}
          <div
            style={{
              backgroundImage: `url(${grainImg})`,
            }}
            className="absolute inset-0 -z-10 opacity-10 bg-white"
          ></div>
          <img
            className="aspect-video content-center w-10/12 mx-auto transition-all group-hover:rotate-3  group-hover:scale-105 group-hover:duration-200 group-hover:translate-y-1.5 ease-out rounded-t-xl"
            src={thumbnail}
            alt=""
          />
        </div>

        {/* project description */}
        <div className="flex items-center justify-center mt-6 gap-2">
          <h className="text-3xl font-bold ">{name}</h>
          <div className="flex-grow h-[1px] bg-gray-600 "></div>
          <a href={gitHub} target="_blank">
            <FaGithub
              className="cursor-pointer hover:text-Primary transition-colors duration-200"
              size={25}
            />
          </a>
          <a href={liveLink} target="_blank">
            <LiaExternalLinkAltSolid
              className="cursor-pointer hover:text-Primary transition-colors duration-200"
              size={30}
            />
          </a>
        </div>

        {/* tech stack */}
        <div className="flex gap-2 text-Primary mt-2 font-medium">
          {topStacks.map((stack, idx) =>
            idx === 0 ? <p key={idx}>{stack}</p> : <p key={idx}> - {stack}</p>
          )}
        </div>

        {/* project description */}
        <p className="line-clamp-4 text-gray-400">
          {subtitle}{" "}
          <span className="text-Primary hover:underline underline-offset-2 cursor-pointer">
            Learn More
          </span>
        </p>
      </section>
    </div>
  );
};

export default ProjectCardDesign;

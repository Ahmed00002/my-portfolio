import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiFirebase, SiMongodb, SiExpress } from "react-icons/si";
import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";
import SectionTitle from "../shared/SectionTitle";

const skills = [
  { name: "React", icon: <FaReact />, level: 90 },
  { name: "Node.js", icon: <FaNodeJs />, level: 85 },
  { name: "JavaScript", icon: <FaJs />, level: 85 },
  { name: "Tailwind CSS", icon: <RiTailwindCssFill />, level: 90 },
  { name: "HTML", icon: <FaHtml5 />, level: 95 },
  { name: "CSS", icon: <FaCss3Alt />, level: 90 },
];

const tools = [
  { name: "Git", icon: <FaGitAlt />, level: 75 },
  { name: "GitHub", icon: <FaGithub />, level: 80 },
  { name: "Firebase", icon: <SiFirebase />, level: 75 },
  { name: "MongoDB", icon: <SiMongodb />, level: 80 },
  { name: "Express.js", icon: <SiExpress />, level: 85 },
];

const SkillCard = ({ skill }) => {
  return (
    <motion.div
      // whileHover={{ scale: 1.01 }}
      className="size-40  shadow-md flex flex-col items-center justify-center cursor-pointer transition-all duration-300"
    >
      <div className="text-6xl text-Primary">{skill.icon}</div>
      <p className="mt-4 text-lg font-semibold">{skill.name}</p>
    </motion.div>
  );
};

const Skills = () => {
  return (
    <div className="text-white  relative z-0 mb-28">
      <SectionTitle
        pin={"Skills & Tools"}
        title={"My Toolbox"}
        subtitle={
          "Explore the technologies and tools I use to craft exceptional digital experiences"
        }
      />

      {/* Skills Section */}
      <div>
        <div className="flex gap-4 relative">
          <Marquee autoFill={true}>
            {skills.map((skill, index) => (
              <SkillCard key={index} skill={skill} />
            ))}
          </Marquee>
        </div>
        {/* tools */}
        <div className="flex gap-4">
          <Marquee autoFill={true} direction="right">
            {tools.map((skill, index) => (
              <SkillCard key={index} skill={skill} />
            ))}
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default Skills;

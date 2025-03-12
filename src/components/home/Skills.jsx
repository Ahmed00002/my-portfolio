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
      whileHover={{ scale: 1.02 }}
      className="size-40 bg-Background border border-Primary/20 rounded-xl shadow-md hover:shadow-Primary flex flex-col items-center justify-center cursor-pointer transition-all duration-300"
    >
      <div className="text-6xl text-Primary">{skill.icon}</div>
      <p className="mt-4 text-lg font-semibold">{skill.name}</p>
    </motion.div>
  );
};

const Skills = () => {
  return (
    <div className="text-white center relative z-0">
      <h2 className="text-md font-bold text-center mb-2 text-Primary">
        Skills & Tools
      </h2>

      {/* Skills Section */}
      <div>
        <h3 className="text-4xl font-semibold text-center mb-8">
          Technical Skills & Tools
        </h3>
        <Marquee autoFill={true}>
          <div className="flex py-4 gap-4">
            {skills.map((skill, index) => (
              <SkillCard key={index} skill={skill} />
            ))}
          </div>
        </Marquee>
        <Marquee autoFill={true} direction="right">
          <div className="flex py-4 gap-4">
            {tools.map((skill, index) => (
              <SkillCard key={index} skill={skill} />
            ))}
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default Skills;

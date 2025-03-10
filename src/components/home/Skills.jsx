import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGitAlt,
} from "react-icons/fa";

const skills = [
  { name: "React", icon: <FaReact className="text-Primary" />, level: 90 },
  { name: "Node.js", icon: <FaNodeJs className="text-Primary" />, level: 85 },
  { name: "HTML", icon: <FaHtml5 className="text-Primary" />, level: 95 },
  { name: "CSS", icon: <FaCss3Alt className="text-Primary" />, level: 90 },
  { name: "JavaScript", icon: <FaJs className="text-Primary" />, level: 85 },
  { name: "Git", icon: <FaGitAlt className="text-Primary" />, level: 70 },
];

const Skills = () => {
  return (
    <>
      <div className=" text-white">
        <h2 className="text-4xl font-bold text-center mb-8">Tech Stacks</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-center items-center center mx-auto">
          {skills.map((skill, index) => (
            <div
              data-tip={skill.level + " %"}
              key={index}
              className="lg:tooltip lg:tooltip-success mt-6"
            >
              <div className="p-10 bg-Background border border-Primary/20 rounded-xl shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-md hover:shadow-Primary flex flex-col items-center justify-center cursor-pointer">
                <div className="text-7xl">{skill.icon}</div>
                <p className="mt-4 text-xl">{skill.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* data progress */}
      <div className=" text-white grid grid-cols-2 gap-12 center mt-28">
        <div>
          <h2 className="text-3xl font-bold  mb-8">Tools</h2>
          <div className="max-w-4xl mx-auto flex flex-col gap-6">
            {skills.map((skill, index) => (
              <div key={index} className="flex items-center space-x-4 gap-4">
                <div className="text-3xl">{skill.icon}</div>
                <div className="w-full">
                  <div className="flex justify-between">
                    <span className="text-lg">{skill.name}</span>
                    <span className="text-sm">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-3 mt-1">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 1.5, ease: "easeOut" }}
                      className="h-3 bg-Primary rounded-full"
                    ></motion.div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* tools */}

        <div>
          <h2 className="text-3xl font-bold  mb-8">My Skills</h2>
          <div className="max-w-4xl mx-auto flex flex-col gap-6">
            {skills.map((skill, index) => (
              <div key={index} className="flex items-center space-x-4 gap-4">
                <div className="text-3xl">{skill.icon}</div>
                <div className="w-full">
                  <div className="flex justify-between">
                    <span className="text-lg">{skill.name}</span>
                    <span className="text-sm">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-3 mt-1">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 1.5, ease: "easeOut" }}
                      className="h-3 bg-Primary rounded-full"
                    ></motion.div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;

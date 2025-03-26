import Reveal from "../shared/Reveal";
import SectionTitle from "../shared/SectionTitle";
import ProjectCardDesign from "./ProjectCardDesign";
import ProjectsCard from "./ProjectsCard";

const Projects = () => {
  const projects = [
    {
      name: "Edugrant",
      title: "Scholarship Management and Hunting",
      thumbnail: "https://i.ibb.co.com/hqr2ZQN/laptop-Mockup.jpg",
      subtitle:
        "The Scholarship Portal is an innovative platform designed to help students find, apply for, and track scholarships based on their qualifications and preferences. It aims to bridge the gap between students and scholarship opportunities, ensuring that financial constraints don’t hinder academic success.",
      features: [
        "Easy Application Process",
        "Advanced Search & Filtering",
        "User Dashboard",
        "Admin Dashboard",
      ],
      topStacks: ["React", "tailwind", "shadCn UI", "MongoDb"],
      stacks: ["React", "tailwind", "shadCn ui", "Firebase"],
      gitHub: "https://github.com/Ahmed00002/EduGrant-clent",
      liveLink: "https://edu-grant.netlify.app/",
    },
    {
      name: "Librario",
      title: "Library Management System",
      thumbnail: "https://i.ibb.co.com/Dfdt8s0K/laptop-Mockup.jpg", // Replace with actual image link
      subtitle:
        "Librario is a smart and efficient library management system designed to streamline book borrowing, cataloging, and user management. It helps libraries manage their collections effectively while providing a seamless experience for readers and administrators.",
      description:
        "Librario is a library management system that helps users efficiently manage books. Users can add new books, borrow them, and track their return status in real-time. The platform ensures smooth book management for both librarians and readers. It provides an intuitive and user-friendly interface for seamless navigation.",
      features: [
        "Book Borrowing & Return System",
        "Advanced Search & Filtering",
        "User Dashboard",
        "Admin Dashboard",
        "Late Fee Calculation",
        "Real-time Availability Tracking",
      ],
      topStacks: ["React", "tailwind", "shadCn UI", "MongoDb", "JWT"],
      stacks: [
        "React",
        "JavaScript",
        "Tailwind",
        "ShadCN UI",
        "MongoDB",
        "Express.js",
        "JWT",
        "Firebase",
      ],
      gitHub: "https://github.com/Ahmed00002/Librario-client", // Replace with actual repo link
      liveLink: "https://librario.netlify.app/",
    },
  ];
  return (
    <div id="projects" className="center">
      <SectionTitle
        pin={"real world results"}
        title={"Featured Projects"}
        subtitle={
          "See how I transformed concepts into engaging digital experiences"
        }
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, idx) => {
          return (
            <Reveal delay={`0.4`}>
              <ProjectCardDesign key={idx} project={project} />
            </Reveal>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;

import React from "react";
import {
  FaNodeJs, FaDatabase, FaTools, FaJava
} from "react-icons/fa";
import {
  SiHtml5, SiCss3, SiJavascript, SiTypescript, SiReact, SiNextdotjs,
  SiVite, SiTailwindcss, SiBootstrap, SiStyledcomponents,
  SiExpress, SiJsonwebtokens, SiStripe,
  SiMongodb, SiPostgresql, SiGit, SiGithub, SiVercel, SiRender, SiAngular, SiPython
} from "react-icons/si";
import { BiLogoSpringBoot } from "react-icons/bi";


const skills = [
  {
    title: "Frontend",
    icon: <SiReact className="text-primary me-2" />,
    items: [
      { name: "HTML", icon: <SiHtml5 /> },
      { name: "CSS", icon: <SiCss3 /> },
      { name: "JavaScript", icon: <SiJavascript /> },
      { name: "TypeScript", icon: <SiTypescript /> },
      { name: "Angular", icon: <SiAngular />},
      { name: "React", icon: <SiReact /> },
      { name: "Next.js", icon: <SiNextdotjs /> },
      { name: "Vite", icon: <SiVite /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
      { name: "Bootstrap", icon: <SiBootstrap /> },
      { name: "Styled-Components", icon: <SiStyledcomponents /> },
    ],
  },
  {
    title: "Backend",
    icon: <FaNodeJs className="text-success me-2" />,
    items: [
      { name: "Express.js", icon: <SiExpress /> },
      { name: "Spring Boot", icon: <BiLogoSpringBoot /> },
      { name: "Java", icon: <FaJava /> },
      { name: "Python", icon: <SiPython /> },
      { name: "Node.js", icon: <FaNodeJs /> },
      { name: "JWT Auth", icon: <SiJsonwebtokens /> },
      { name: "Stripe", icon: <SiStripe /> },
    ],
  },
  {
    title: "Databases",
    icon: <FaDatabase className="text-warning me-2" />,
    items: [
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "PostgreSQL", icon: <SiPostgresql /> },
    ],
  },
  {
    title: "Dev Tools & Deployment",
    icon: <FaTools className="text-danger me-2" />,
    items: [
      { name: "Git", icon: <SiGit /> },
      { name: "GitHub", icon: <SiGithub /> },
      { name: "Vercel", icon: <SiVercel /> },
      { name: "Render", icon: <SiRender /> },
    ],
  },
];

const SkillsSection: React.FC = () => {
  return (
    <section className="container py-5">
      <h2 className="text-center fw-bold mb-5 display-5">My Tech Stack</h2>
      <div className="row g-4">
        {skills.map((group) => (
          <div key={group.title} className="col-md-6">
            <div className="card h-100 shadow-sm border-0">
              <div className="card-body">
                <div className="d-flex align-items-center mb-3">
                  {group.icon}
                  <h5 className="card-title mb-0">{group.title}</h5>
                </div>
                <div className="d-flex flex-wrap gap-2">
                  {group.items.map((skill) => (
                    <span key={skill.name} className="badge bg-secondary d-flex align-items-center gap-1 px-3 py-2">
                      <span>{skill.icon}</span>
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;

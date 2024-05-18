"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Tooltip } from "react-tooltip";

import { AppWrap, MotionWrap } from "../../wrapper";
import { urlFor, client } from "../../client";
import "./Skills.scss";
import Image from "next/image";
import { Experimenting, skills as SkillsType } from "@/app/types";

const Skills = () => {
  const [experiences, setExperiences] = useState<Experimenting[]>([]);
  const [skills, setSkills] = useState<SkillsType[]>([]);

  useEffect(() => {
    const query = `*[_type == 'experiences']`;
    const skillsQuery = `*[_type == 'skills']`;

    client.fetch(query).then((data) => {
      setExperiences(data);
    });

    client.fetch(skillsQuery).then((data) => {
      setSkills(data);
      console.log(data);
    });
  }, []);

  return (
    <>
      <h2 className="head-text">Skills & Experiences</h2>

      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {skills.map((skill) => (
            <motion.div
              key={skill.name}
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex"
            >
              <div className="app__flex">
                <Image
                  src={urlFor(skill.icon)} // Updated here
                  alt={skill.name}
                  width={200}
                  height={100}
                />
              </div>
              <p className="p-text">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>

        <div className="app__skills-exp-works">
          {experiences.map((experience) => (
            <motion.div key={experience.year} className="app__skills-exp-item">
              <div className="app__skills-exp-year">
                <p className="bold-text">{experience.year}</p>
              </div>
              <motion.div className="app__skills-exp-work">
                {experience.works.map((work) => (
                  <div key={work.name}>
                    <motion.div
                      whileInView={{ opacity: [0, 1] }}
                      transition={{ duration: 0.5 }}
                      className="app__skills"
                      data-tooltip-id={work.name}
                      data-tooltip-content={work.desc}
                    >
                      <h4 className="bold-text">{work.name}</h4>
                      <p className="p-text">{work.company}</p>
                      <p>{work.desc}</p>
                    </motion.div>
                    <Tooltip
                      id={work.name}
                      arrowColor="#fff"
                      className="skills-tooltip"
                    />
                  </div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Skills, "app__skills"),
  "skills",
  "app__whitebg"
);

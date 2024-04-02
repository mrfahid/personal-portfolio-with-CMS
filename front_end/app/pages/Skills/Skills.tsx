"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Tooltip } from "react-tooltip";

import { AppWrap, MotionWrap } from "../../wrapper";
import { urlFor, client } from "../../client";
import "./Skills.scss";
import Image from "next/image";
import { experimenting, skills } from "@/app/types";

const Skills = () => {
  const [experiences, setExperiences] = useState<experimenting[]>([]);
  const [skills, setSkills] = useState<skills[]>([]);

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
                  src={urlFor(skill.icon)}
                  alt={skill.name}
                  width={200}
                  height={100}
                />
              </div>
              <p className="p-text">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>

        <div className="app-skills-exp-works">
          {experiences.map((experiences: experimenting) => (
            <motion.div key={experiences.year} className="app__skills-exp-item">
              <div className="app__skills-exp-year">
                <p className="bold-text">{experiences.year}</p>
              </div>
              <motion.div className="app__skills-exp-work">
                {experiences.works.map((work: any) => (
                  <>
                    <motion.div
                      whileInView={{ opacity: [0, 1] }}
                      transition={{ duration: 0.5 }}
                      className="app__skills"
                      data-tip
                      data-for={work.name}
                      key={work.name}
                    >
                      <h4 className="bold-text">{work.name}</h4>
                      <p className="p-text"
                      >{work.company}</p>
                      <p>{work.desc}</p>
                    </motion.div>
                    <Tooltip
                      id={work.name}
                      effect="solid"
                      arrowColor="#fff"
                      className="skills-tooltip"
                    >
                      {work.desc}
                    </Tooltip>
                  </>
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

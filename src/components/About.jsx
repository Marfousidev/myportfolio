import React, { useState } from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { Resume } from "../assets";
import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon, description }) => (
  <Tilt className="xs:w-[250px]  w-full">
    <motion.div className="w-full  bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 p-[1px] rounded-[20px] ">
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className=" bg-white-100 dark:bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col  dashadow-card"
      >
        <img
          src={icon}
          alt="web-development"
          className="w-12 h-12 object-contain"
        />

        <h3 className=" text-[18px] font-bold text-center">{title}</h3>
        <div>
          <p className="mt-2 text-secondary text-center text-[12px]">
            {description}
          </p>
        </div>
      </div>
    </motion.div>
  </Tilt>
);

const handleDownload = () => {
  const link = document.createElement("a");
  link.href = Resume;
  link.download = "your_resume.pdf";
  link.click();
};

const About = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h3 className={styles.sectionHeadText}>About me</h3>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl w-10/12 leading-[30px]"
      >
        I'm a skilled software developer with experience in html, css, and
        JavaScript, and expertise in frameworks like React, Tailwindcss,
        Bootstrap, and Three.js. I'm a quick learner. My background as a
        customer service representative, as a teacher and as freelance front-end
        developer gives me the ability to collaborate closely with clients to
        create efficient, scalable, and user-friendly solutions that solve
        real-world problems. I'd love to discuss how my skills can benefit your
        team!
        <br></br>
        <button
          className=" font-bold dark:text-white-200 dark:hover:text-white hover:text-black"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? "Show Less" : "Show More"}
        </button>
      </motion.p>

      <div className="mt-20 flex flex-wrap  gap-10 mb-0 items-center justify-center">
        {isExpanded && (
          <motion.div
            className="mt-20 flex flex-wrap  gap-10 mb-20  "
            animate={{ y: -70 }}
          >
            {services.map((service, index) => (
              <ServiceCard key={service.title} index={index} {...service} />
            ))}
          </motion.div>
        )}
      </div>

      <Tilt className=" ">
        <motion.div
          variants={fadeIn("right", "spring")}
          className="   rounded-[20px] "
        >
          <div
            options={{
              max: 45,
              scale: 1,
              speed: 450,
            }}
            className=" rounded-[20px]  px-12  flex justify-evenly items-center "
          >
            <button
              className="p-0.5 mr-3 cursor-pointer bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 text-secondary font-light   rounded-3xl border-none"
              onClick={handleDownload}
            >
              <span className="flex text-[14px] rounded-3xl bg-white-100 dark:bg-gray-900 text-secondary   px-4 py-2">
                Download Resume
              </span>
            </button>
          </div>
        </motion.div>
      </Tilt>
    </>
  );
};

export default SectionWrapper(About, "about");

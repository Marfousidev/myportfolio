import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

import { img } from "../assets";


import { TypeAnimation } from "react-type-animation";

const Hero = () => {

  
  return (
    <section className="relative w-full h-screen   mx-auto">
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5 `}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full violet-gradient" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>
        <div>
          <div className="  ">
            <img src={img} className="   h-[160px]  rounded-full  object-contain   " />
          </div>
        
          <h4 className={`${styles.heroHeadText}  `}>
            Hi, I'm <span className="text-[#915EFF]">Anass </span>
          </h4>

          <p className={`${styles.heroSubText} mt-2 `}>
            based in Chicago, <span className="text-[#915EFF]">Illinois.</span> I'm a:
            <br />
            <br />
         
            <div className=" mt-5 ml-12 w-full font-light italic text-lg text-secondary">
              <TypeAnimation
                sequence={[
                  // wait 1s before replacing "Mice" with "Hamsters"
                  "Front-End Web Developer \n UX/UI Designer \n Graphic Designer  \n Content Creator ",
                ]}
                wrapper="span"
                speed={50}
                style={{
                  whiteSpace: "pre-line",
                  height: "195px",
                  display: "block",
                }}
                repeat={2}
              />
            </div>
          </p>
        </div>
      </div>
   
     
      <div>
        
      </div>
      <ComputersCanvas />
      

      <div className="absolute xs:bottom-12 bottom-9 w-full flex justify-center items-center ">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;

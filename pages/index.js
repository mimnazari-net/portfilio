import Image from "next/image";

import ParticlesContainer from "../components/ParticlesContainer";
import ProjectsBtn from "../components/ProjectsBtn";
import Avatar from "../components/Avatar";

import { motion } from "framer-motion";

import { fadeIn } from "../variants";

const Home = () => {
  return (
    <div className="bg-primary/60 h-full bg-gradient-to-r from-primary/10 via-black/40 to-black/10">
      <div className="w-full h-full">
        {/* texts */}
        <div className="text-center flex flex-col justify-center xl:text-left h-full container mx-auto">
          <motion.h1
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h1 mt-20 mb-5 "
          >
            Trasfoming Ideas Into <br />
            <span className="text-accent"> Digital Reality </span>
          </motion.h1>
          <motion.p
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-5 "
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod cumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus
            t sed lectus vestibulum. Arcu cursus vitae congue mauris rhoncus t
            sed lectus vestibulum.
          </motion.p>

          <motion.div
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="flex justify-start  relative mb-10"
          >
            <ProjectsBtn />
          </motion.div>
        </div>
      </div>
      
      <div className="w-[1200px] h-full absolute right-0 bottom-0">
        <div className="bg-none xl:bg-explosion xl:bg-cover xl:bg-right bg-no-repeat w-full h-full absolute mix-blend-color-dodge "></div>
        <div>
          <ParticlesContainer />
        </div>
        <motion.div
          variants={fadeIn("up", 0.5)}
          initial="hidden"
          animate="show"
          exit="hidden"
          transition={{ duration: 1, ease: "easeInOut" }}
          className="w-full h-full max-w-[537px] max-h-[478px] absolute -bottom-32 lg:bottom-0 lg:right-[8%] "
        >
          <Avatar />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;

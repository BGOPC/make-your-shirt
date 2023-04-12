import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSnapshot } from "valtio";
import {
  headContainerAnimation,
  headContentAnimation,
  headTextAnimation,
  slideAnimation,
} from '../config/motion.js';
import state from '../store';
import { CustomizableButton } from "../components/";

const Home = () => {
  const snap = useSnapshot(state);
  return (
    <AnimatePresence>
      {snap.intro && (
        <motion.section className="home" {...slideAnimation('left')}>
          <motion.header {...slideAnimation('down')}>
            <img src="./threejs.png" alt="threejs logo"
              className="w-8 h-8 object-contain"/>
          </motion.header>
          <motion.div className="home-content" {...headContainerAnimation}>
            <motion.div {...headTextAnimation}>
              <h1 className="head-text">
                LET'S <br className="xl:block hidden"/> DO IT

              </h1>
            </motion.div>
            <motion.div
              className="flex flex-col gap-5" {...headContentAnimation}>
              <p className="max-w-md font-normal text-gray-600 text-base">
                Create Your Unique And Desire Shirt with our Brand-new 3D
                customization tool <br className="xl:block hidden"/>
                <b>Unleash Your <i>Imagination</i></b> and define your own
                style.
              </p>
              <CustomizableButton
                type="filled"
                title="Customize It"
                handleClick={() => state.intro = false}
                styles="w-fit px-4 py-2.5 font-bold text-sm"
              />
            </motion.div>
          </motion.div>
        </motion.section>
      )}
    </AnimatePresence>
  );
};

export default Home;

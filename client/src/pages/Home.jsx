import { motion, AnimatePresence } from "framer-motion";
import { useSnapshot } from "valtio";
import state from "../store";
import { CustomButton } from "../components";

import {
  headContainerAnimation,
  headContentAnimation,
  slideAnimation,
} from "../config/motion";

import React from "react";

const Home = () => {
  const snap = useSnapshot(state);

  return (
    <AnimatePresence>
      {snap.intro && (
        <motion.section className="home" {...slideAnimation("left")}>
          <motion.header {...slideAnimation("down")}>
            <img
              src="./threejs.png"
              alt="logo "
              className="w-8 h-8 object-contain"
            ></img>
          </motion.header>

          <motion.div className="home-content" {...headContainerAnimation}>
            <motion.div {...headContentAnimation}>
              <h1 className="head-text">
                Let's <br className="xl:block hidden" /> DO IT.
              </h1>
            </motion.div>
            <motion.div
              {...headContentAnimation}
              className="flex flex-col hap-5"
            >
              <p className="max-w-md font-normal text-grey-600 text-base">
                Create you unique Tshirt with out 3D customization tool.{" "}
                <strong> Unleash your imagination</strong> and define your own
                style.
              </p>

              <CustomButton
                type="filled"
                title="Customize it"
                handleClick={() => (state.intro = false)}
                customStyles="w-fit px-4 py- 2.5 font-bold text-sm"
              />
            </motion.div>
          </motion.div>
        </motion.section>
      )}
    </AnimatePresence>
  );
};

export default Home;

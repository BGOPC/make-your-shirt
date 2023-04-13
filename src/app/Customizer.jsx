import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useSnapshot } from "valtio";
import config from "../config/config.js";
import state from "../store/index.js";
import { download } from "../assets/index.js";
import { downloadCanvasToImage, reader } from "../config/helpers.js";
import { EditorTabs, FilterTabs, DecalTypes } from "../config/constants.js";
import { fadeAnimation, slideAnimation } from "../config/motion.js";
import {
  CustomizableButton,
  Tab,
  AiPicker,
  ColorPicker,
  FilePicker,
} from "../components";

const Customizer = () => {
  const snap = useSnapshot(state);
  const [file, setFile] = useState('');
  const [prompt, setPrompt] = useState('');
  const [generatingImg, setGeneratingImg] = useState(false);
  const [activeEditorTab, setActiveEditorTab] = useState('');
  const [activeFilterTab, setActiveFilterTab] = useState({
    logoShirt: true,
    stylishShirt: false,
  });
  const generateTabContent = () => {
    switch (activeEditorTab) {
      case "colorpicker":
        return <ColorPicker/>;
      case "filepicker":
        return <FilePicker
          file={file}
          setFile={setFile}
          readFile={readFile}
        />;
      case "aipicker":
        return <AiPicker/>;
      default:
        return null;
    }
  };
  const handleDecals = (type, result) => {
    const decalType = DecalTypes[type];
    state[decalType.stateProperty] = result;

    if (!activeFilterTab[decalType.filterTab]) {
      handleActiveFilterTab(decalType.filterTab);
    }
  };

  const handleActiveFilterTab = (tabName) => {
    switch (tabName) {
      case "logo":
        state.isLogoTexture = !activeFilterTab[tabName];
        break;
      case "stylishShirt":
        state.isFullTexture = !activeFilterTab[tabName];
        break;
      default:
        state.isLogoTexture = true;
        state.isFullTexture = false;
        break;
    }
  };
  const readFile = (type) => {
    reader(file)
        .then((result) => {
          handleDecals(type, result);
          setActiveEditorTab('');
        });
  };
  return (
    <AnimatePresence>
      {!snap.intro && (
        <>
          <motion.div
            key="custom"
            className="absolute top-0 left-0 z-10"
            {...slideAnimation('left')}
          >
            <div className="flex items-center min-h-screen">
              <div className="editortabs-container tabs">
                {EditorTabs.map((tab) => <Tab
                  key={tab.name}
                  tab={tab}
                  handleClick={() => {
                    setActiveEditorTab(tab.name);
                  }}
                />)}

                {
                  generateTabContent()
                }
              </div>
            </div>
          </motion.div>
          <motion.div
            className="absolute z-10 top-5 right-5" {...fadeAnimation}
          >
            <CustomizableButton
              type="filled"
              title="Go Back"
              handleClick={() => state.intro = true}
              styles="w-fit px-4 py-2.5 font-bold text-sm"
            />
          </motion.div>
          <motion.div
            className="filtertabs-container"
            {...slideAnimation('up')}
          >
            {FilterTabs.map((tab) => <Tab
              key={tab.name}
              tab={tab}
              isFilterTab
              isActiveTab
              handleClick={() => {
              }}
            />)}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default Customizer;

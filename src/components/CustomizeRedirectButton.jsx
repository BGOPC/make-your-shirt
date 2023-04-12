import React from 'react';
import state from "../store/index.js";
import { useSnapshot } from "valtio";

const CustomizeRedirectButton = ({ type, title, handleClick, styles }) => {
  const snap = useSnapshot(state);
  // eslint-disable-next-line no-shadow
  const generateStyle = (type) => {
    if (type === "filled") {
      return {
        backgroundColor: snap.color,
        color: '#fff',
      };
    }
  };
  return (
    <button
      className={`px-2 py-1.5 flex-1 rounded-md ${styles}`}
      style={generateStyle(type)}
      onClick={handleClick}
    >
      {title}
    </button>
  );
};

export default CustomizeRedirectButton;

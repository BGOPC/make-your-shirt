import React from 'react';
import { SketchPicker } from 'react-color';
import { useSnapshot } from "valtio";
import state from "../store/index.js";

const ColorPicker = () => {
  const snap = useSnapshot(state);

  return (
    <div className={'absolute left-full ml-3'}>
      <SketchPicker
        color={snap.color}
        onChange={(color) => {
          state.color = color.hex;
        }}
        presetColors={[
          '#31c4b6',
          '#7120d4',
          '#9988c2',
          '#28b083',
          '#09e39a',
          '#dbbf30',
          '#3b3bcc',
          '#a14a7f',
          '#9e3feb',
          '#9ceb52',
          '#e61037',
          '#c4661d',
        ]}
        disableAlpha
      />
    </div>
  );
};

export default ColorPicker;

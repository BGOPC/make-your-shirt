import React from 'react';

import CustomizableButton from './CustomizableButton.jsx';
import state from "../store/index.js";
import { useSnapshot } from "valtio";

const AIPicker = ({ prompt, setPrompt, generatingImg, handleSubmit }) => {
  const snap = useSnapshot(state);
  return (
    <>
      {!snap.translation ? (
        <div className="aipicker-container">
          <textarea
            placeholder="Ask AI..."
            rows={5}
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            className="aipicker-textarea"
          />
          <div className="flex flex-wrap gap-3">
            {generatingImg ? (
              <CustomizableButton
                type="outline"
                title="Asking AI..."
                customStyles="text-xs"
              />
            ) : (
              <>
                <CustomizableButton
                  type="outline"
                  title="AI Logo"
                  handleClick={() => handleSubmit('logo')}
                  customStyles="text-xs"
                />

                <CustomizableButton
                  type="filled"
                  title="AI Full"
                  handleClick={() => handleSubmit('full')}
                  customStyles="text-xs"
                />
              </>
            )}
          </div>
        </div>
      ) : (
        <div className="aipicker-container">
          <textarea
            placeholder="از هوش مصنوعی بپرس"
            rows={5}
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            className="aipicker-textarea"
          />
          <div className="flex flex-wrap gap-3">
            {generatingImg ? (
              <CustomizableButton
                type="outline"
                title="در حال پرسش"
                customStyles="text-xs"
              />
            ) : (
              <>
                <CustomizableButton
                  type="outline"
                  title="لوگو"
                  handleClick={() => handleSubmit('logo')}
                  customStyles="text-xs"
                />

                <CustomizableButton
                  type="filled"
                  title="کل لباس"
                  handleClick={() => handleSubmit('full')}
                  customStyles="text-xs"
                />
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default AIPicker;

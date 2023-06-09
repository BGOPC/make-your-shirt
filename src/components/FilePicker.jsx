import React from 'react';
import { useSnapshot } from "valtio";
import state from "../store/index.js";
import CustomizableButton from './CustomizableButton.jsx';

const FilePicker = ({ file, setFile, readFile }) => {
  const snap = useSnapshot(state);
  return (
    <div className="filepicker-container">
      {!snap.translation ? (
        <>
          <div className="flex-1 flex flex-col">
            <input
              id="file-upload"
              type="file"
              accept="image/*"
              onChange={(e) => setFile(e.target.files[0])}
            />
            <label htmlFor="file-upload" className="filepicker-label">
              Upload File
            </label>

            <p className="mt-2 text-gray-500 text-xs truncate">
              {file === '' ? "No file selected" : file.name}
            </p>
          </div>

          <div className="mt-4 flex flex-wrap gap-3">
            <CustomizableButton
              type="outline"
              title="Logo"
              handleClick={() => readFile('logo')}
              customStyles="text-xs"
            />
            <CustomizableButton
              type="filled"
              title="Full"
              handleClick={() => readFile('full')}
              customStyles="text-xs"
            />
          </div>
        </>
      ) : (
        <>
          <div className="flex-1 flex flex-col">
            <input
              id="file-upload"
              type="file"
              accept="image/*"
              onChange={(e) => setFile(e.target.files[0])}
            />
            <label htmlFor="file-upload" className="filepicker-label">
              عکس اپلود کن
            </label>

            <p className="mt-2 text-gray-500 text-xs truncate">
              {file === '' ? "چیزی اپلود نکردی" : file.name}
            </p>
          </div>

          <div className="mt-4 flex flex-wrap gap-3">
            <CustomizableButton
              type="outline"
              title="لوگو"
              handleClick={() => readFile('logo')}
              customStyles="text-xs"
            />
            <CustomizableButton
              type="filled"
              title="کل لباس"
              handleClick={() => readFile('full')}
              customStyles="text-xs"
            />
          </div>
        </>
      )}
    </div>
  );
};

export default FilePicker;

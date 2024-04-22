import { useState } from "react";

const FileInput = ({ onFileChange }) => {
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    onFileChange(file);
  };

  return (
    <>
      <input type="file" accept=".csv" onChange={handleFileChange} />
    </>
  );
};

export default FileInput;

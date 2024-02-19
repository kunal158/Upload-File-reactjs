// src/components/loginform.js
// eslint-disable-next-line no-unused-vars

import React from "react";
import { useDropzone } from "react-dropzone";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../context/AppContext";


const LoginForm = () => {
    const { username, setUsername, file, setFile,panNumber, setPanNumber } = useAppContext();
  const navigate = useNavigate();

  const onDrop = (acceptedFiles) => {
    const selectedFile = acceptedFiles[0];
    setFile(selectedFile);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Selected file:", file);
    setUsername(username);
    setPanNumber(panNumber);
    navigate("/home");
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: "image/*",
  });

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          PAN Number:
          <input
            type="text"
            value={panNumber}
            onChange={(e) => setPanNumber(e.target.value)}
            required
          />
        </label>
        <br />
        <div {...getRootProps()}>
          <label>Upload PAN Card Image:</label>
          <div>
            <input {...getInputProps()} />
            {file ? (
              <p>
                File uploaded: {file.name} ({(file.size / 1024).toFixed(2)} KB)
              </p>
            ) : (
              <p>Drop PAN card file here, or click to select file</p>
            )}
          </div>
        </div>
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginForm;

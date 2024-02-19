import React from "react";

import { useAppContext } from "../context/AppContext"


const Home = () => {

    
  const { username,file,panNumber} = useAppContext();

  return (
    <div style={{marginLeft:"10%"}}>
      <h2>Home</h2>
      <p>LOGGED IN</p>
      {username && <p>Welcome, {username}!</p>}
      {panNumber && <p>Your Pan Number is, {panNumber}</p>}

      {file && (
        <div>
          <p>
            Your PAN card image: {file.name} ({(file.size / 1024).toFixed(2)} KB)
          </p>
          <img
            src={URL.createObjectURL(file)}
            alt={file.name}
            style={{ maxWidth: "27%"}}
          />
        </div>
      )}
    </div>
  );
};

export default Home;

// AppContext.js
import React, { createContext, useContext, useState } from "react";

const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [username, setUsername] = useState("");
  const [panNumber, setPanNumber]= useState("");
  const [file, setFile] = useState(null);

  const contextValue = {
    username,
    setUsername,
    file,
    setFile,
    panNumber, 
    setPanNumber
  };

  return (
    <AppContext.Provider value={contextValue}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);

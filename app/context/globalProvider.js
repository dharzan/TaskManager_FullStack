"use client";

import React, { createContext, useState, useContext } from "react";
import { isComputedPropertyName } from "typescript";
import themes from './themes'

export const GlobalContext = createContext();
export const GlobalUpdateContext = createContext();

const GlobalProvider = ({ children }) => {

    const [selectedTheme,setSelectedTheme] = useState(0);
    const theme = themes[selectedTheme];

  return (
    <GlobalContext.Provider  

    value={{ 
        theme,

    }}>
      <GlobalUpdateContext.Provider>{children}</GlobalUpdateContext.Provider>
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
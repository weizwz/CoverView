import React, { createContext, useState } from "react";
const ImgContext = createContext();

const ImgProvider = ({ children }) => {
  const [unsplashImage, setUnsplashImage] = useState();
  const [searchText, setSearchText] = useState("background");
    
  return (
    <ImgContext.Provider value={{ unsplashImage, setUnsplashImage, searchText, setSearchText }}>
      {children}
    </ImgContext.Provider>
  );
};

export {ImgProvider, ImgContext}
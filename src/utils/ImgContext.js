import React, { createContext, useState } from "react";
const ImgContext = createContext();

const ImgProvider = ({ children }) => {
  const [unsplashImage, setUnsplashImage] = useState();
  const [param, setParam] = useState({
    query: 'background',
    page: 1,
    per_page: 12
  });
    
  return (
    <ImgContext.Provider value={{ unsplashImage, setUnsplashImage, param, setParam }}>
      {children}
    </ImgContext.Provider>
  );
};

export {ImgProvider, ImgContext}
// DrawerContext.js
'use client'
import React, { createContext, useContext, useState } from "react";

const DrawerContext = createContext();

export function DrawerProvider({ children }) {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const [isDrawerOpenSecond, setDrawerOpenSecond] = useState(false);

  const openDrawer = () =>{ 
    setDrawerOpen(!isDrawerOpen); 
  }
  const closeDrawer = () => setDrawerOpen(false);


    const openDrawerSecond = () =>{ 
    setDrawerOpenSecond(!isDrawerOpenSecond); 
  }
  const closeDrawerSecond = () => setDrawerOpenSecond(false);


  return (
    <DrawerContext.Provider value={{ isDrawerOpen, openDrawer, closeDrawer , isDrawerOpenSecond , closeDrawerSecond  , openDrawerSecond}}>
      {children}
    </DrawerContext.Provider>
  );
}

export function useDrawer() {
  return useContext(DrawerContext);
}

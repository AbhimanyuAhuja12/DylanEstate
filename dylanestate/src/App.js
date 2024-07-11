import React from 'react';
import {Outlet } from 'react-router-dom';
import Header from "./Componenets/Header"


const App = () => {
  return (
    <>
 
      <Header />
      <Outlet />
      </>
  );
}

export default App;
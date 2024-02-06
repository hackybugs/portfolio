import React from "react";
import Home from "../views/home";
import { Route, Routes } from "react-router-dom";

const root = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
};

export default root;

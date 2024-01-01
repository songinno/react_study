import React from "react";
import { Home } from "../pages/Home";
import { About } from "../pages/About";
import { Route, Routes } from "react-router-dom";
import { Profile } from "../pages/Profile";

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/profiles/:username" element={<Profile />} />
      </Routes>
    </div>
  )
};
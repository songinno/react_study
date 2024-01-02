import React from "react";
import { Home } from "../pages/Home";
import { About } from "../pages/About";
import { Route, Routes } from "react-router-dom";
import { Profile } from "../pages/Profile";
import { Articles } from "../pages/Articles";
import { Article } from "../pages/Article";
import { Layout } from "./Layout";
import { NotFound } from "../pages/NotFound";
import { Login } from "../pages/Login";
import { MyPage } from "../pages/MyPage";

export const App = () => {
  return (
    <div>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/profiles/:username" element={<Profile />} />
        </Route>
        <Route path="/articles" element={<Articles />}>
          <Route path=":id" element={<Article />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/mypage" element={<MyPage />} />
        {/* 404 page */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

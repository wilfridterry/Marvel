import { Routes, Route } from "react-router-dom";
import React from "react";
import Banner from "../Banner/Banner";

import SingleComic from "../SingleComic/SingleComic";

import "./App.scss";
import Layout from "../Pages/Layout";
import NotFound from "../Pages/404";

const Characters = React.lazy(() => import("../Pages/Characters"));
const Comics = React.lazy(() => import("../Pages/Comics"));

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Characters />}></Route>
        <Route path="/characters" element={<Characters />} />
        <Route path="/comics/:comicId" element={<Comic  />}/>
        <Route path="/comics" element={<Comics />}>
        </Route>
        <Route path="*" element={<NotFound/>}/>
      </Route>
    </Routes>
  );
};

const Comic = () => {
  return (
    <div className="single-comics">
      <Banner />
      <SingleComic />
    </div>
  );
};

export default App;

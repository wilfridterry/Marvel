import { Routes, Route } from "react-router-dom";
import React from "react";
import Banner from "../Banner/Banner";

import SingleComics from "../SingleComics/SingleComics";

import "./App.scss";
import Layout from "../Pages/Layout";

const Characters = React.lazy(() => import("../Pages/Characters"));
const Comics = React.lazy(() => import("../Pages/Comics"));

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Characters />}></Route>
        <Route path="/characters" element={<Characters />} />
        <Route path="/comics" element={<Comics />} />
      </Route>
    </Routes>
  );
};

const OneComics = () => {
  return (
    <div className="single-comics">
      <Banner />
      <SingleComics />
    </div>
  );
};

export default App;

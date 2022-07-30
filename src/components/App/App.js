import { Routes, Route } from "react-router-dom";
import React, { Suspense } from "react";

import Header from "../Header/Header";
import Banner from "../Banner/Banner";

import SingleComics from "../SingleComics/SingleComics";

import "./App.scss";

const Home = React.lazy(() => import("../Pages/Home"));
const Comics = React.lazy(() => import("../Pages/Comics"));

const App = () => {
  return (
    <div className="App">
      <Header />
      <main>
        <Suspense fallback={<div>Dowloading</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="comics" element={<Comics />} />
          </Routes>
        </Suspense>
      </main>
    </div>
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

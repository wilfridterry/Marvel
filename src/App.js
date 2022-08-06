import { Routes, Route } from "react-router-dom";
import { lazy } from "react";
import "./App.scss";
import Layout from "./components/Pages/Layout";

const Characters = lazy(() => import("./components/Pages/Characters"));
const Comics = lazy(() => import("./components/Pages/Comics"));
const Comic = lazy(() => import('./components/Pages/Comic'));
const NotFound = lazy(() => import('./components/Pages/404'));

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Characters />}></Route>
        <Route path="/characters" element={<Characters />} />
        <Route path="/comics/:comicId" element={<Comic />}/>
        <Route path="/comics" element={<Comics />} />
        <Route path="*" element={<NotFound/>}/>
      </Route>
    </Routes>
  );
};

export default App;

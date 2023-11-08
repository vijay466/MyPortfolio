import React from "react";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Navbar from "./components/Navbar";
import About from "./components/About";
import "./App.css";
import { createBrowserRouter } from "react-router-dom";
// import { Events } from 'react-scroll';

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Work />
      <Contact />
    </div>
  );
};

export const Approutes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },

  {
    path: "/Work",
    element: <Work />,
  },

  {
    path: "/Skills",
    element: <Skills />,
  },
  {
    path: "/Home",
    element: <Home />,
  },

  {
    path: "/Contact",
    element: <Contact />,
  },
]);
export default App;

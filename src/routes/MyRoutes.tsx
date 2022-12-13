import React from "react";

// React Router
import { Routes, Route, useLocation, Link } from "react-router-dom";

// Framer Motion
import { AnimatePresence } from "framer-motion";

// Pages
import Home from "../pages/Home";
import Skill from "../pages/Skills";
import Contact from "../pages/Contact";
import Experiences from "../pages/Experiences";

// Components
import MyTerinal from "../components/MyTerminal";
import { AVAILABLE_ROUTES } from "../constants/enums";

export default function MyRoutes() {
  const location = useLocation();

  return (
    <div className='myroute_container'>
    <AnimatePresence exitBeforeEnter initial={false}>
      <Routes location={location} key={location.pathname}>
        <Route path={AVAILABLE_ROUTES.HOME} element={<Home />} />
        <Route path={AVAILABLE_ROUTES.SKILLS} element={<Skill />} />
        <Route path={AVAILABLE_ROUTES.CONTACT} element={<Contact />} />
        <Route path={AVAILABLE_ROUTES.EXPERIENCES} element={<Experiences />} />
      </Routes>
      <MyTerinal />
    </AnimatePresence>
    </div>
  );
}

import React, { useEffect } from "react";
import { Route } from "react-router-dom";
import { gsap } from "gsap";
import "./styles/App.scss";
import Header from "./components/header";
import Navigation from "./components/navigation";
import './components/index';
import CaseStudies from "./pages/caseStudies";
import Approach from "./pages/approach";
import Services from "./pages/services";
import About from "./pages/about";
import Home from "./pages/home";
import web from './assets/videos/websites.mp4';
import web1 from './assets/videos/apps.mp4';
import web2 from './assets/videos/branding.mp4';

const routes = [
  { path: "/", name: "Home", Component: Home },
  { path: "/case-studies", name: "caseStudies", Component: CaseStudies },
  { path: "/approach", name: "approach", Component: Approach },
  { path: "/services", name: "services", Component: Services },
  { path: "/about-us", name: "about", Component: About }
];

function debounce(fn, ms) {
  let timer;
  return () => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      timer = null;
      fn.apply(this, arguments);
    }, ms);
  };
}

function App() {
  const [dimensions, setDimensions] = React.useState({
    height: window.innerHeight,
    width: window.innerWidth
  });

  useEffect(() => {
    // prevents flashing
    gsap.to("body", 0, { css: { visibility: "visible" } });
    const debouncedHandleResize = debounce(function handleResize() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth
      });
    }, 1000);

    window.addEventListener("resize", debouncedHandleResize);
    return () => {
      window.removeEventListener("resize", debouncedHandleResize);
    };
  });
  return (
    <>
      <Header dimensions={dimensions} />
      <div className='App'>
        {routes.map(({ path, Component }) => (
          <Route key={path} exact path={path}>
            <Component dimensions={dimensions} />
          </Route>
        ))}
      </div>
      <div class="cursor">
      <div class="cursor-media">
        <video
          
          preload="auto"
          autoPlay
          muted
          loop
          id="websites"
        ><source src= {web} type="video/mp4" /></video>
        <video
          src={web1}
          preload="auto"
          autoPlay
          muted
          loop
          id="apps"
        ></video>
        <video
          src={web2}
          preload="auto"
          autoPlay
          muted
          loop
          id="branding"
        ></video>
      </div>
    </div>
      <Navigation />
    </>
  );
}

export default App;

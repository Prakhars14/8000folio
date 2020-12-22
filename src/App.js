import React, { useEffect } from "react";
import { Route } from "react-router-dom";
import { gsap } from "gsap";
import "./styles/App.scss";
import Header from "./components/header";
import Navigation from "./components/navigation";
import './components/index';
import About from "./components/About";
import Home from "./pages/home";

const routes = [
  { path: "/", name: "Home", Component: Home },
  { path:"/about", name: "About", Component: About }

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
          src="https://cdn.videvo.net/videvo_files/video/free/2020-05/small_watermarked/200428_Work%20From%20Home_01_4k_015_preview.webm"
          preload="auto"
          autoPlay
          muted
          loop
          id="websites"
        ></video>
        <video
          src="https://cdn.videvo.net/videvo_files/video/free/2016-12/small_watermarked/Typing_dark_03_Videvo_preview.webm"
          preload="auto"
          autoPlay
          muted
          loop
          id="apps"
        ></video>
        <video
          src="https://cdn.videvo.net/videvo_files/video/free/2016-10/small_watermarked/160812_061_Iphone9_4K_preview.webm"
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

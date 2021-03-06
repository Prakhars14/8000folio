import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { ReactComponent as UpArrow } from "../assets/up-arrow-circle.svg";
import { openMenu, closeMenu } from "../animations/menuAnimations";

// Define reducer

const Header = ({ history, dimensions }) => {
  const [menuState, setMenuState] = useState({ menuOpened: false });
  useEffect(() => {
    //Listening for page changes.
    history.listen(() => {
      setMenuState({ menuOpened: false });
    });
    if (menuState.menuOpened === true) {
      openMenu(dimensions.width);
    } else if (menuState.menuOpened === false) {
      closeMenu();
    }
  });

  return (
    <div className='header'>
      <div className='containerr'>
        <div className='roww v-center space-between'>
          <div className='logo'>
            <a href='/'>
              prx
            </a>
          </div>
          <div className='nav-toggle'>
            <div
              onClick={() => setMenuState({ menuOpened: true })}
              className='hamburger-menu'>
              <span></span>
              <span></span>
            </div>
            <div
              className='hamburger-menu-close'
              onClick={() => setMenuState({ menuOpened: false })}>
              <UpArrow />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default withRouter(Header);

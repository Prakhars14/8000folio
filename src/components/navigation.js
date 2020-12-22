import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <nav>
      <div className='containerr'>
        <div className='nav-columns'>
          <div className='nav-column'>
            {/* <div className='nav-label'>Menu</div> */}
            <ul className='nav-links'>
              <li>
                <a href='#about'>
                  Who's talking
                </a>
              </li>
              <li>
                <a href='#work'>
                  My good deeds
                </a>
              </li>
              <li>
                <a href='#contact'>
                  Stalk me (plz)
                </a>
              </li>
            </ul>
          </div>
          {/* <div className='nav-column'>
            <div className='nav-label'>Contact</div>
            <div className='nav-infos'>
              <ul className='nav-info'>
                <li className='nav-info-label'>Email</li>
                <li>
                  <NavLink to='/contact' exact>
                    Get in touch (not during covid though!)
                  </NavLink>
                </li>
              </ul>
            </div>
          </div> */}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;

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
                <NavLink to='/case-studies' exact>
                  Who's talking
                </NavLink>
              </li>
              <li>
                <NavLink to='/approach' exact>
                  My good deeds
                </NavLink>
              </li>
              <li>
                <NavLink to='/services' exact>
                  Stalk me (plz)
                </NavLink>
              </li>
            </ul>
          </div>
          <div className='nav-column'>
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
              <ul className='nav-info'>
                <li className='nav-info-label'>Phone</li>
                <li>+41 (0) 79 510 28 70</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;

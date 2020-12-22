import React from "react";

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
        </div>
      </div>
    </nav>
  );
};

export default Navigation;

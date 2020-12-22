import React from "react";
import { ReactComponent as RightArrow } from "../assets/arrow-right.svg";
import pp1 from '../assets/pp1.jpg';
import pp2 from '../assets/pp2.png';


const Banner = () => {
  return (
    <section className='main'>
      <div className='containerr'>
        <div className='roww'>
          <h2>
            <div className='line'>
              <span>hello, i'm prakhar singh</span>
            </div>
            <div className='line line2'>
              <span>web developer and tinkerer</span>
            </div>
          </h2>
          <div className='btn-row'>
            <a href='/about'>
              <button type="button" class="btn">
                <div class="btn__inner">
                  <div class="btn__layer btn__layer--top">
                    Tune in
                    <span class="btn__border btn__border--bottom-left"></span>
                    <span class="btn__border btn__border--top-right"></span>
                  </div>
                </div>
                <div class="btn__layer btn__layer--bottom">
                  This is a button
                  <span class="btn__border btn__border--bottom-right"></span>
                </div>
              </button>
            </a>
          </div>
          <div className="bg-image">
            <img src={pp2} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;

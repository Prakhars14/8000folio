import React, {useRef, useEffect} from 'react';
import {Row, Col } from 'reactstrap';
import hoverEffect from 'hover-effect';
import i1 from '../assets/1.webp';
import i2 from '../assets/2.webp';
import i3 from '../assets/3.webp';
import i4 from '../assets/4.webp';
import i5 from '../assets/5.webp';
import i6 from '../assets/6.webp';
import i7 from '../assets/7.webp';
import i8 from '../assets/8.webp';
import i9 from '../assets/9.webp';
import i10 from '../assets/10.webp';
import trans from '../assets/disp.jpg';
import useWindowSize from "./useWindowSize";

const About = ({dimensions}) => {

  const imageRef1=useRef();
  const imageRef2=useRef();
  const imageRef3=useRef();
  const imageRef4=useRef();
  const imageRef5=useRef();

  useEffect(() => {
    new hoverEffect({
      parent: imageRef1.current,
      intensity: 0.3,
      image1: i3,
      image2: i4,
      displacementImage: trans
  });
  }, [imageRef1])
  useEffect(() => {
    new hoverEffect({
      parent: imageRef5.current,
      intensity: 0.3,
      image1: i2,
      image2: i1,
      displacementImage: trans
  });
  }, [imageRef5])
  useEffect(() => {
    new hoverEffect({
      parent: imageRef2.current,
      intensity: 0.3,
      image1: i10,
      image2: i9,
      displacementImage: trans
  });
  }, [imageRef2])
  useEffect(() => {
    new hoverEffect({
      parent: imageRef3.current,
      intensity: 0.3,
      image1: i5,
      image2: i6,
      displacementImage: trans
  });
  }, [imageRef3])
  useEffect(() => {
    new hoverEffect({
      parent: imageRef4.current,
      intensity: 0.3,
      image1: i7,
      image2: i8,
      displacementImage: trans
  });
  }, [imageRef4])
  const size = useWindowSize();

  // Ref for parent div and scrolling div
  const app = useRef();
  const scrollContainer = useRef();
    // Configs
    const data = {
      ease: 0.1,
      current: 0,
      previous: 0,
      rounded: 0
    };
  
    // // Run scrollrender once page is loaded.
    useEffect(() => {
      requestAnimationFrame(() => skewScrolling());
    }, []);
    // useEffect(() => {
    //   let vh = dimensions.height * 0.01;
    //   document.documentElement.style.setProperty("--vh", `${vh}px`);
    // }, [dimensions.width]);
    //set the height of the body.
    useEffect(() => {
      setBodyHeight();
    }, [size.height]);
    //Set the height of the body to the height of the scrolling div
    const setBodyHeight = () => {
      console.log(scrollContainer.current.getBoundingClientRect().height)
      document.body.style.height = `${
        scrollContainer.current.getBoundingClientRect().height-6000
      }px`;
    };
    
    // Scrolling
    const skewScrolling = () => {
      //Set Current to the scroll position amount
      data.current = window.scrollY;
      // Set Previous to the scroll previous position
      data.previous += (data.current - data.previous) * data.ease;
      // Set rounded to
      data.rounded = Math.round(data.previous * 100) / 100;
  
      // Difference between
      const difference = data.current - data.rounded;
      const acceleration = difference / size.width;
      const velocity = +acceleration;
      const skew = velocity * 7.5;
  
      //Assign skew and smooth scrolling to the scroll container
      scrollContainer.current.style.transform = `translate3d(0, -${data.rounded}px, 0) skewY(${skew}deg)`;
  
      //loop vai raf
      requestAnimationFrame(() => skewScrolling());
    };
    return (
      <>
      <div ref={scrollContainer} className="scroll">
      <div className='container'>
      <div className="link-to" id="about" />
        <div className="about1">
            <h3>
              Who's &nbsp;<span className="outline"> Talking?</span>
            </h3>
            <p className="about-p"> <span className="mr-5">&nbsp;</span>Hi, I'm Prakhar Singh and i like experimenting and building stuff that helps the world become a better place. <br/>
            <span className="mr-5">&nbsp;</span>I'm a Full Stack Developer graduated from S.R.M. University, India. I started off as a EEE guy slowly progressing to HTML/CSS/JS and now with my development stack of MERN. Well ofcourse i don't believe that stacks were ever a barrier.               

                You can call me an avid learner who seeks room for growth, expanding my interests
             beyond the field of my technical degree and learn the plethora of skills that are present.<br/><br/>
             <span className="mr-5">&nbsp;</span>On weekends, you can find me playing fifa, grooving to some new beats, or working out, or some anime who knows.</p>
        </div>
      <div className="link-to" id="work" />
        <div className="about1">
            <h3>
              Recent &nbsp;<span className="outline"> Stuff</span>
            </h3>
            <div className="project1">
              <h4 className="header1">Micro-Frontend App</h4>
              <Row>
              <p className="about1"> <span className="mr-5">&nbsp;</span>Implemented Micro Frontend Architecture by creating individual sub apps with different frameworks like React, Vue and then pooling them in a container together and hosting it while sharing dependencies and other props.</p>
              </Row>
              <Row>
                <Col lg={4}>
                  
                  <h5 className="header2">Stack: </h5>
                  <ul className="list1">
                    <li>Webpack Module Federation</li>
                    <li>React</li>
                    <li>Vue</li>
                  </ul>
                  <a href="https://github.com/Prakhars14/mfe_react" className="link2"><i class="fab fa-github"></i></a>
                </Col>
                <Col lg={8}>
                  <div ref={imageRef4} className="image1"></div>
                </Col>
              </Row>
            </div>
            <div className="project1">
              <h4 className="header1">Emaily</h4>
              <Row>
              <p className="about1"> <span className="mr-5">&nbsp;</span>Emaily is an Email Feedback MERN Application with Payment system to buy credits in application. With these credits you can send email surveys to people who will fill them and send it back. These surveys are then displayed in our application with basic tracking also.</p>
              </Row>
              <Row>
                <Col lg={4}>
                  
                  <h5 className="header2">Stack: </h5>
                  <ul className="list1">
                    <li>React.js</li>
                    <li>Node.js</li>
                    <li>Mongo DB</li>
                    <li>Express.js</li>
                    <li>Sendgrid</li>
                  </ul>
                  <a href="https://damp-everglades-20250.herokuapp.com/" className="link2"><i class="fas fa-globe"></i></a>
                  <a href="https://github.com/Prakhars14/Feedback" className="link2"><i class="fab fa-github"></i></a>
                  
                </Col>
                <Col lg={8}>
                  <div ref={imageRef2} className="image1"></div>
                </Col>
              </Row>
            </div>

            <div className="project1">
              <h4 className="header1">Burger Kink</h4>
              <Row>
              <p className="about1"> <span className="mr-5">&nbsp;</span>Burger Kink is a web app created to order Burgers. It consists of Authentication, customizing your own special burger, details of the order with previous order history also </p>
              </Row>
              <Row>
                <Col lg={4}>
                  
                  <h5 className="header2">Stack: </h5>
                  <ul className="list1">
                    <li>React.js</li>
                    <li>Firebase</li>
                  </ul>
                  <a href="https://burgerkink.netlify.app" className="link2"><i class="fas fa-globe"></i></a>
                  <a href="https://github.com/Prakhars14/BurgerKink" className="link2"><i class="fab fa-github"></i></a>
                </Col>
                <Col lg={8}>
                  <div ref={imageRef1} className="image1"></div>
                </Col>
              </Row>
            </div>
            <div className="project1">
              <h4 className="header1">College Website</h4>
              <Row>
              <p className="about1"> <span className="mr-5">&nbsp;</span>My first freelancing work, a college website. It was a fullstack MERN Project with dashboard setup as well for administrator access. Included online submitting of forms, and other educational activities.</p>
              </Row>
              <Row>
                <Col xl={4}>
                  <h5 className="header2">Stack: </h5>
                  <ul className="list1">
                    <li>React.js</li>
                    <li>Node.js</li>
                    <li>Mongo DB</li>
                    <li>Express.js</li>
                  </ul>

                </Col>
                <Col xl={8}>
                  <div ref={imageRef5} className="image1"></div>
                </Col>
              </Row>
            </div>
            <div className="project1">
              <h4 className="header1">News with AI</h4>
              <Row>
              <p className="about1"> <span className="mr-5">&nbsp;</span>A React News Web app combined with AI to present news on the screen according to what the user wants to see based on what he says/ commands </p>
              </Row>
              <Row>
                <Col lg={4}>
                  
                  <h5 className="header2">Stack: </h5>
                  <ul className="list1">
                    <li>React.js</li>
                    <li>Voice Recognition AI</li>
                  </ul>
                  <a href="https://newswithai.netlify.app" className="link2"><i class="fas fa-globe"></i></a>
                  <a href="https://github.com/Prakhars14/News_AI" className="link2"><i class="fab fa-github"></i></a>
                </Col>
                <Col lg={8}>
                  <div ref={imageRef3} className="image1"></div>
                </Col>
              </Row>
            </div>
        </div>
      <div className="link-to" id="contact" />
        <div className="about1 mt-2">
            <h3>
              Wanna &nbsp;<span className="outline"> talk?</span>
            </h3>
            <Row>
          <Col > <p className="link1">Hmu @</p> </Col>
              <Col><a href="mailto:prakharsingh11111@gmail.com" className="link1"><i class="far fa-envelope"></i></a></Col>
              <Col><a href="https://www.linkedin.com/in/prakharsingh98/" className="link1"><i class="fab fa-linkedin-in"></i></a></Col>
              <Col><a href="https://github.com/Prakhars14" className="link1"><i class="fab fa-github"></i></a></Col>
            </Row>
        </div>

        </div>
        </div>
      </>
    )
}

export default About

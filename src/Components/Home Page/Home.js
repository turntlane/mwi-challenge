import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import logo from "../../images/mwi-logo.png";
import rabbit from "../../images/mwi-rabbit.png";
import shield from "../../images/mwi-shield.png";
import talkie from "../../images/mwi-talkie.png";

function Home() {
  return (
    <div className="home-container">
      <div className="home-content-container">
        <header className="header-container">
          <img className='home-logo' src={logo} alt='Midwestern Logo'/>
          <Link className='contact-link' to="/contact">contact</Link>
        </header>
        <div className="section-container">
          <section className="homepage-box-1 homepage-box">
            <img className='box-img' src={talkie} alt='Midwestern Logo' />
            <h1 className="homepage-box-heading">Heading Two</h1>
            <p className='para1 homepage-box-para'>
              Integer accumsan molestie nisl, id faucibus urna accumsan quis.
              Proin vulputate, mauris semper maximus.
            </p>
            <p className='para1-media-query homepage-box-para'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
            </p>
            <button className="learn-more">Learn More</button>
          </section>

          <section className="homepage-box-2 homepage-box">
            <img className='rabbit box-img' src={rabbit} alt='Midwestern Logo'/>
            <h1 className="rabbit-heading homepage-box-heading">Heading Two</h1>
            <p className='rabbit-p homepage-box-para'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
            </p>
            <button className="learn-more">Learn More</button>
          </section>

          <section className="homepage-box-1 homepage-box">
            <img className='box-img' src={shield} alt='Midwestern Logo'/>
            <h1 className="homepage-box-heading">Heading Two</h1>
            <p className='homepage-box-para'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
            </p>
            <button className="learn-more">Learn More</button>
          </section>
        </div>
        <section className='homepage-bottom-container'>

        <h1 className="homepage-bottom-header">
          <span className="homepage-gold-underline">Heading</span> One
        </h1>
        <p className='bottom1 homepage-bottom-text'>
          Remove the duplicates in 2 Javascript objects and output the list of
          distinct names in an unordered list when <span style={{color: '#debf79'}}>this link</span> is clicked. If the
          operation has been completed already notify the user that this has
          already been done.
        </p>
        <p className='home-bottom-media homepage-bottom-text'>
          Remove the duplicates in 2 Javascript objects and output the list of
          distinct names in an unordered list when <span style={{color: '#debf79'}}>this link</span> is clicked. If the operation has been{'\n'}{'\n'}
          completed already notify the user that this has
          already been done.
        </p>

        </section>
      </div>
    </div>
  );
}

export default Home;

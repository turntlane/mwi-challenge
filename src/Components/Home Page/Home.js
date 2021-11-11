import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Home.css";
import { Link } from "react-router-dom";
import logo from "../../images/mwi-logo.png";
import rabbit from "../../images/mwi-rabbit.png";
import shield from "../../images/mwi-shield.png";
import talkie from "../../images/mwi-talkie.png";

let names = ["Matt Johnson", "Bart Paden", "Ryan Doss", "Jared Malcolm"];
let names2 = ["Matt Johnson", "Bart Paden", "Jordan Heigle", "Tyler Viles"];

function Home() {
  const [list, setList] = useState([]);
  const [active, isActive] = useState(false);
  const [boxHeading, setBoxHeading] = useState('')
  const [boxHeading2, setBoxHeading2] = useState('')
  const [boxHeading3, setBoxHeading3] = useState('')
  const [boxpara, setBoxPara] = useState('')
  const [boxpara2, setBoxPara2] = useState('')
  const [boxpara3, setBoxPara3] = useState('')


  useEffect(() => {
    axios.get(`https://api.mwi.dev/content/home`)
    .then(res => {
      setBoxHeading(res.data.data[0].title)
      setBoxHeading2(res.data.data[1].title)
      setBoxHeading3(res.data.data[2].title)
      setBoxPara(res.data.data[0].content)
      setBoxPara2(res.data.data[1].content)
      setBoxPara3(res.data.data[2].content)
    })
  }, [])

  const newList = () => {
    isActive(true);
    names = names.filter((val) => !names2.includes(val));
    setList(names.concat(names2));
  };

  return (
    <div className="home-container">
      <div className="home-content-container">
        <header className="header-container">
          <img className="home-logo" src={logo} alt="Midwestern Logo" />
          <Link className="contact-link" to="/contact">
            contact
          </Link>
        </header>
        <div className="section-container">
          <section className="homepage-box-1 homepage-box">
            <img className="box-img" src={talkie} alt="Midwestern Logo" />
            <h1 className="homepage-box-heading">{boxHeading}</h1>
            <p className="para1 homepage-box-para">
              {boxpara}
            </p>
            <p className="para1-media-query homepage-box-para">
              {boxpara}
            </p>
            <button className="learn-more">Learn More</button>
          </section>

          <section className="homepage-box-2 homepage-box">
            <img
              className="rabbit box-img"
              src={rabbit}
              alt="Midwestern Logo"
            />
            <h1 className="rabbit-heading homepage-box-heading">{boxHeading2}</h1>
            <p className="rabbit-p homepage-box-para">
              {boxpara2}
            </p>
            <button className="learn-more">Learn More</button>
          </section>

          <section className="homepage-box-1 homepage-box">
            <img className="box-img" src={shield} alt="Midwestern Logo" />
            <h1 className="homepage-box-heading">{boxHeading3}</h1>
            <p className="homepage-box-para">
              {boxpara3}
            </p>
            <button className="learn-more">Learn More</button>
          </section>
        </div>
        <section className="homepage-bottom-container">
          <h1 className="homepage-bottom-header">
            <span className="homepage-gold-underline">Heading</span> One
          </h1>
          <p className="bottom1 homepage-bottom-text">
            Remove the duplicates in 2 Javascript objects and output the list of
            distinct names in an unordered list when{" "}
            <span onClick={newList} style={{ color: "#debf79" }}>
              this link
            </span>{" "}
            is clicked. If the operation has been completed already notify the
            user that this has already been done.
          </p>
          <p className="home-bottom-media homepage-bottom-text">
            Remove the duplicates in 2 Javascript objects and output the list of
            distinct names in an unordered list when{" "}
            <span onClick={newList} style={{ color: "#debf79" }}>this link</span> is clicked. If
            the operation has been{"\n"}
            {"\n"}
            completed already notify the user that this has already been done.
          </p>
          <ul>{active ? list.map((e) => <li className='home-names-list' key={e}>{e}</li>) : null}</ul>
        </section>
      </div>
    </div>
  );
}

export default Home;

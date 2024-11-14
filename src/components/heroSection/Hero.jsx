import React from "react";
import "./Hero.css";
import Header from "../header/Header.jsx";
import hero_image from "../../assets/hero_image.png";
import hero_image_back from "../../assets/hero_image_back.png";
import Heart from "../../assets/heart.png";
import Calories from "../../assets/calories.png";
import NumberCounter from "number-counter";

import { motion } from "framer-motion";

function Hero() {
  const transition = {
    type: "spring",
    duration: 3,
    ease: "easeInOut",
    delay: 0.5,
  };
  const mobile = window.innerWidth <= 800 ? true : false;
  return (
    <div className="hero" id="home">
      <div className="blur hero-blur"></div>
      {/* -- left side -- */}
      <div className="left-h">
        <Header />
        <div className="the-ad">
          <motion.div
            initial={{ left: mobile ? "165px" : "238px" }}
            whileInView={{ left: "7px" }}
            transition={{ ...transition, type: "tween" }}
          ></motion.div>
          <span>The best fitness club in the town</span>
        </div>

        {/* -- hero text -- */}
        <div className="hero-text">
          <div>
            <span className="stroke-text">Shape </span>
            <span>Your</span>
          </div>
          <div>
            <span>Ideal Body</span>
          </div>
          <div>
            <span>
              This emphasizes on the commitment and persistence needed to
              achieve your fitness goals and maintaining your ideal body. It
              reminds you that reaching your ideal physique requires consistent
              effort and a determined mindset
            </span>
          </div>
        </div>

        {/* -- figures -- */}
        <div className="figures">
          <div>
            <span>
              <NumberCounter end={140} start={100} delay="4" preFix="+" />
            </span>
            <span>expert coaches</span>
          </div>
          <div>
            <span>
              <NumberCounter end={978} start={810} delay="5" preFix="+" />
            </span>
            <span>new members</span>
          </div>
          <div>
            <span>
              <NumberCounter end={50} start={23} delay="4" preFix="+" />
            </span>
            <span>fitness programs</span>
          </div>
        </div>

        {/* -- hero buttons -- */}
        <div className="hero-buttons">
          <buttons className="btn">Get Started</buttons>
          <buttons className="btn">Learn More</buttons>
        </div>
      </div>

      {/* -- Right Side -- */}

      <div className="right-h">
        <button className="btn">Join Now</button>

        <motion.div
          initial={{ right: "-1rem" }}
          whileInView={{ right: "4rem" }}
          transition={transition}
          className="heart-rate"
        >
          <img src={Heart} alt="" />
          <span>Heart Rate</span>
          <span>116 BPM</span>
        </motion.div>

        {/* -- Hero Image -- */}
        <img src={hero_image} alt="Hero" className="hero-image" />
        <motion.img
          initial={{ right: "11rem" }}
          whileInView={{ right: "20rem" }}
          transition={transition}
          src={hero_image_back}
          alt="Hero Back"
          className="hero-image-back"
        />

        {/* -- Calories -- */}
        <motion.div
          initial={{ right: "37rem" }}
          whileInView={{ right: "28rem" }}
          transition={transition}
          className="calories"
        >
          <img src={Calories} alt="" />
          <div>
            <span>Calories Burned</span>
            <span>220 kcal</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Hero;

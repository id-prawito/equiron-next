"use client";

import React, { useContext } from "react";
import { HERO_DATA_EQUIRON } from "@/config/Data";
import { HeroSite } from "./HeroElements";
import { motion } from "framer-motion";
import AppContext from "@/config/AppContext";

const Hero = () => {
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.8,
        staggerChildren: 0.4,
      },
    },
  };

  const item_nya = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  const { language } = useContext(AppContext);
  const HERO_DATA = HERO_DATA_EQUIRON[language];

  return (
    <HeroSite id="home">
      <div
        className="th-hero-bg background-images-hero"
        style={{
          backgroundImage: `url(${HERO_DATA?.hero_image_background})`,
        }}
      >
        <img src={HERO_DATA.hero_image_overlay} alt="back"></img>
      </div>
      <div className="background-container">
        <div className="hero-container">
          <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
            className="hero-content"
          >
            <motion.h1 variants={item_nya}>{HERO_DATA.text_small}</motion.h1>
            <motion.div variants={item_nya} className="big-heading">
              {HERO_DATA.big_heading}
            </motion.div>
            <motion.div variants={item_nya} className="big-heading-one">
              {HERO_DATA.big_heading2}
            </motion.div>
            <motion.p variants={item_nya}>{HERO_DATA.description}</motion.p>
            <motion.div variants={item_nya} className="button-hero">
              {HERO_DATA.button.map((item, i) => (
                <div key={i} className="button-my-course">
                  <item.icon />
                  <a href={item.to} target="_blank" rel="noopener noreferrer">
                    {item.nama_button}
                  </a>
                </div>
              ))}
            </motion.div>
          </motion.div>
          <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
            className="hero-content-images"
          >
            <motion.div variants={item_nya} className="images-hero">
              <div className="image-border-container">
                <img
                  src={HERO_DATA?.hero_image_about}
                  alt="law"
                  className="main-image"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </HeroSite>
  );
};

export default Hero;

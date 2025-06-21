"use client";

import React, { useContext, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { ABOUT_DATA_EQUIRON } from "@/config/Data";
import { useAnimation, motion } from "framer-motion";
import { AboutSite } from "./AboutElements";
import AppContext from "@/config/AppContext";

const About = () => {
  const controls = useAnimation();

  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

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
  const ABOUT_LANGUAGE_DATA = ABOUT_DATA_EQUIRON[language]; // ambil data sesuai bahasa

  return (
    <AboutSite ref={ref} id="about">
      {ABOUT_DATA_EQUIRON?.about_shape_mockup_data?.map((item, index) => (
        <div
          key={index}
          className={`shape-mockup-about-${item.class} jump_about`}
        >
          <img src={item.tech_img} alt={item.alt} />
        </div>
      ))}

      <motion.div
        variants={container}
        initial="hidden"
        animate={controls}
        className="about-container"
      >
        <div className="about-content">
          <motion.div variants={item_nya} className="about-details">
            <h1>{ABOUT_LANGUAGE_DATA?.about_title}</h1>
            <div
              className="big-heading-about"
              dangerouslySetInnerHTML={{
                __html: ABOUT_LANGUAGE_DATA?.about_heading,
              }}
            ></div>
            <p>
              <b className="title-equ">Equiron & Co. </b>{" "}
              {ABOUT_LANGUAGE_DATA?.about_desc}
            </p>
            <ul className="text-skill">
              {ABOUT_LANGUAGE_DATA?.about_skill_data?.map((item, i) => (
                <li key={i}>
                  <div className="icon">
                    <item.icon />
                  </div>
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={item_nya} className="content-card-images">
            <div className="cardImagesArea">
              <div className="image-wrapper">
                <div className="image-border" />
                <img
                  src={ABOUT_DATA_EQUIRON?.about_images_one?.title}
                  alt={ABOUT_DATA_EQUIRON?.about_images_one?.alt}
                />
              </div>
            </div>
            <div className="cardImagesArea2">
              <div className="images-card-area one">
                <div className="images-card-area-two">
                  <img
                    src={ABOUT_DATA_EQUIRON?.about_images_two?.title}
                    alt={ABOUT_DATA_EQUIRON?.about_images_two?.alt}
                  />
                </div>
              </div>
              <div className="images-card-area two">
                <div className="images-card-area-two">
                  <img
                    src={ABOUT_DATA_EQUIRON?.about_images_three?.title}
                    alt={ABOUT_DATA_EQUIRON?.about_images_three?.alt}
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        <motion.div variants={item_nya} className="stats-container">
          {ABOUT_LANGUAGE_DATA?.about_stats_data?.map((s, idx) => (
            <React.Fragment key={idx}>
              <div className="stat-card">
                <div className="stat-item">
                  <div className="icon">{s.icon}</div>
                  <div className="content">
                    <h3>{s.value}</h3>
                    <p>{s.label}</p>
                  </div>
                </div>
              </div>
            </React.Fragment>
          ))}
        </motion.div>
      </motion.div>
    </AboutSite>
  );
};

export default About;

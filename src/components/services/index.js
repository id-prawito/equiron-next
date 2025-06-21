"use client";

import React, { useContext, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useAnimation, motion } from "framer-motion";
import { ServicesSite } from "./ServicesElements";
import { SERVICES_DATA_EQUIRON } from "@/config/Data";
import AppContext from "@/config/AppContext";
import { Link } from "react-scroll";

const Services = () => {
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
    hidden: { y: -20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  const services = 0;
  const { language } = useContext(AppContext);
  const SERVICES_DATA = SERVICES_DATA_EQUIRON[language];

  return (
    <ServicesSite ref={ref} id="services">
      <div className="services-container">
        <motion.div
          variants={container}
          initial="hidden"
          animate={controls}
          className="services-content"
        >
          <motion.div variants={item_nya} className="content-title">
            <div className="big-heading">
              {SERVICES_DATA?.service_big_heading}
            </div>
            <h1>{SERVICES_DATA?.service_desc}</h1>
          </motion.div>
          <motion.div variants={item_nya} className="content-service">
            {SERVICES_DATA?.service_data_services?.map((service, i) => (
              <div key={i} className="custom-card">
                <div className="icon-wrapper">
                  <img src={service.icon} alt="icon" />
                </div>
                <div className="corner-icon">
                  <img src={service.cornerIcon} alt="corner icon" />
                </div>
                <h3 className="card-title">{service.cardTitle}</h3>
                <p className="card-desc">{service.cardDesc}</p>
                {services === 1 && (
                  <Link href="/" className="read-more">
                    Read More <span className="arrow">→</span>
                  </Link>
                )}
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </ServicesSite>
  );
};

export default Services;

"use client";

import React, { useContext, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useAnimation, motion } from "framer-motion";
import { ProcessSite } from "./ProcessElements";
import { PROCESS_DATA_EQUIRON } from "@/config/Data";
import AppContext from "@/config/AppContext";

const Process = () => {
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
  const PPROCESS_DATA = PROCESS_DATA_EQUIRON[language];

  return (
    <ProcessSite ref={ref} id="process">
      {PROCESS_DATA_EQUIRON?.process_shape_mockup_data?.map((item, index) => (
        <div
          key={index}
          className={`shape-mockup-process-${item.class} jump-process`}
        >
          <img src={item.tech_img} alt={item.alt} />
        </div>
      ))}
      <div className="process-container">
        <motion.div
          variants={container}
          initial="hidden"
          animate={controls}
          className="process-content"
        >
          <motion.div variants={item_nya}>
            <div className="process-content-images">
              <img
                src={PROCESS_DATA_EQUIRON?.process_one_images?.title}
                alt={PROCESS_DATA_EQUIRON?.process_one_images?.alt}
              />
            </div>
          </motion.div>

          <motion.div variants={item_nya} className="process-content-flow">
            <div className="text">{PPROCESS_DATA?.process_text}</div>
            <div className="title">{PPROCESS_DATA?.process_title}</div>
            <div className="process">
              {PPROCESS_DATA?.process_data_works.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={index}
                    variants={item_nya}
                    className="process-item"
                  >
                    <div className="process-item-icon">
                      <Icon className="icon-class" />
                    </div>
                    <div className="process-item-content">
                      <div className="box-title">{item.title}</div>
                      <div className="desc">{item.desc}</div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </ProcessSite>
  );
};

export default Process;

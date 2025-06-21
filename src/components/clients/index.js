"use client";

import React, { useContext, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { CLIENTS_DATA_EQUIRON } from "@/config/Data";
import { Navigation, Pagination } from "swiper/modules";
import { useAnimation, motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { ClientsSite } from "./ClientsElements";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css";
import AppContext from "@/config/AppContext";

const Clients = () => {
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
        staggerChildren: 0.6,
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

  const { language } = useContext(AppContext); // misalnya "en" atau "id"
  const CLIENTS_DATA = CLIENTS_DATA_EQUIRON[language];

  return (
    <ClientsSite id="clients">
      <div className="clients-container">
        <motion.div
          variants={container}
          initial="hidden"
          animate={controls}
          ref={ref}
          className="clients-content-container"
        >
          <motion.div variants={item_nya} className="clients-desc">
            <div className="clients-title">{CLIENTS_DATA?.clients_text}</div>
            <div className="clients-subtitle">
              {CLIENTS_DATA?.clients_title}
            </div>
          </motion.div>
          <motion.div variants={item_nya} className="clients-content">
            <Swiper
              modules={[Navigation, Pagination]}
              slidesPerView={4}
              spaceBetween={34}
              navigation
              pagination={{ clickable: true }}
              loop={true}
              breakpoints={{
                0: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 4 },
              }}
            >
              {CLIENTS_DATA_EQUIRON?.clients_data_client.map(
                (lawyer, index) => (
                  <SwiperSlide key={index}>
                    <div className="client-card">
                      <div className="content-img">
                        <img src={lawyer.image} alt={lawyer.title} />
                      </div>
                    </div>
                  </SwiperSlide>
                )
              )}
            </Swiper>
          </motion.div>
        </motion.div>
      </div>
      {CLIENTS_DATA_EQUIRON?.clients_shape_mockup_data?.map((item, index) => (
        <div
          key={index}
          className={`shape-mockup-clients-${item.class} jump-clients`}
        >
          <img src={item.tech_img} alt={item.alt} />
        </div>
      ))}
    </ClientsSite>
  );
};

export default Clients;

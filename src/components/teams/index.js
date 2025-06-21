"use client";

import React, { useContext, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { Navigation, Pagination } from "swiper/modules";
import { TEAMS_DATA_EQUIRON } from "@/config/Data";
import { useAnimation, motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { TeamsSite } from "./TeamsElements";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css";
import AppContext from "@/config/AppContext";

const Teams = () => {
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

  const { language } = useContext(AppContext);
  const TEAMS_DATA = TEAMS_DATA_EQUIRON[language];

  return (
    <TeamsSite id="teams">
      <div
        className="th-hero-bg-teams"
        style={{
          backgroundImage: `url(${TEAMS_DATA?.teams_bg_images?.title})`,
        }}
      ></div>
      <motion.div
        variants={container}
        initial="hidden"
        animate={controls}
        ref={ref}
        className="teams-container"
      >
        <div className="team-content-container">
          <motion.div variants={item_nya} className="teams-desc">
            <div className="subtitle">{TEAMS_DATA?.teams_text}</div>
            <div className="text-content">{TEAMS_DATA?.teams_title}</div>
          </motion.div>
          <motion.div variants={item_nya} className="teams-content">
            <Swiper
              modules={[Navigation, Pagination]}
              slidesPerView={4}
              spaceBetween={24}
              navigation
              pagination={{ clickable: true }}
              loop={true}
              breakpoints={{
                0: { slidesPerView: 1 },
                800: { slidesPerView: 2 },
                950: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
                1480: { slidesPerView: 3 },
              }}
            >
              {TEAMS_DATA?.teams_members.map((lawyer, index) => (
                <SwiperSlide key={index}>
                  <div className="team-card">
                    <div className="team-img">
                      <img
                        src={lawyer.image}
                        alt={lawyer.name}
                        className="img-hero"
                      />
                    </div>
                    <div className="team-content">
                      <div className="box-title">{lawyer.name}</div>
                      <div className="desc">{lawyer.title}</div>
                    </div>
                    <div className="team-content-hover-wrap">
                      <div className="team-content-hover">
                        <div className="team-img">
                          <img src={lawyer.image} alt={lawyer.name} />
                        </div>
                        <div className="hover-inner">
                          <h3 className="box-title">
                            <a href="team-details.html">{lawyer.name}</a>
                          </h3>
                          <span className="team-desig">{lawyer.title}</span>
                          <div className="team-social">
                            <div className="team-social-media">
                              {lawyer.socials.map((social, idx) => {
                                const Icon = social.icon;
                                return (
                                  <div className="card-media" key={idx}>
                                    <a
                                      href={social.url}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                    >
                                      <Icon />
                                    </a>
                                  </div>
                                );
                              })}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>
        </div>
      </motion.div>
      {TEAMS_DATA?.teams_shape_mockup_data?.map((item, index) => (
        <div key={index} className={`shape-mockup-teams jump_teams`}>
          <img src={item.tech_img} alt={item.alt} />
        </div>
      ))}
    </TeamsSite>
  );
};

export default Teams;

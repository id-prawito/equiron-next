"use client";

import React, { useContext, useEffect } from "react";
import { PUBLICATIONS_DATA_EQUIRON } from "@/config/Data";
import { useInView } from "react-intersection-observer";
import { Navigation, Pagination } from "swiper/modules";
import { useAnimation, motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { ArticleSite } from "./ArticleElements";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css";
import AppContext from "@/config/AppContext";
import Link from "next/link";

const Article = () => {
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
  const PUBLICATIONS_DATA = PUBLICATIONS_DATA_EQUIRON[language];

  return (
    <ArticleSite id="article">
      <div className="article-container">
        <motion.div
          variants={container}
          initial="hidden"
          animate={controls}
          ref={ref}
          className="article-content-container"
        >
          <motion.div variants={item_nya} className="article-desc">
            <div className="article-title">
              {PUBLICATIONS_DATA?.publications_text}
            </div>
            <div className="article-subtitle">
              {PUBLICATIONS_DATA?.publications_title}
            </div>
          </motion.div>
          <motion.div variants={item_nya} className="article-content">
            <Swiper
              modules={[Navigation, Pagination]}
              slidesPerView={3}
              spaceBetween={24}
              navigation
              pagination={{ clickable: true }}
              loop={true}
              breakpoints={{
                0: { slidesPerView: 1 },
                590: { slidesPerView: 2 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 2 },
                1290: { slidesPerView: 3 },
              }}
            >
              {PUBLICATIONS_DATA?.publications_articles?.map(
                (article, index) => {
                  const {
                    user: UserIcon,
                    calendar: CalendarIcon,
                    comment: CommentIcon,
                  } = article.icons;
                  return (
                    <SwiperSlide key={index}>
                      <div className="blog-card">
                        <div className="blog-img">
                          <Link href="/">
                            <img src={article.image} alt={article.title} />
                          </Link>
                        </div>
                        <div className="blog-content">
                          <div className="blog-meta">
                            <Link href="/">
                              <UserIcon /> By {article.author.split(" ")[0]}
                            </Link>
                            <Link href="/">
                              <CalendarIcon /> {article.date}
                            </Link>
                            <Link href="/">
                              <CommentIcon /> {article.comments}
                            </Link>
                          </div>
                          <h3 className="box-title">
                            <Link href="/">{article.title}</Link>
                          </h3>
                        </div>
                      </div>
                    </SwiperSlide>
                  );
                }
              )}
            </Swiper>
          </motion.div>
        </motion.div>
      </div>
      {PUBLICATIONS_DATA?.publications_shape_mockup_data?.map((item, index) => (
        <div
          key={index}
          className={`shape-mockup-article-${item.class} jump_about`}
        >
          <img src={item.tech_img} alt={item.alt} />
        </div>
      ))}
    </ArticleSite>
  );
};

export default Article;

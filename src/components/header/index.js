"use client";

import React, { useContext, useEffect, useRef, useState } from "react";
import { FaArrowRight, FaChevronUp, FaEllipsisV } from "react-icons/fa";
import { HeaderContainer, HeaderSite, NavLinks } from "./HeaderElements";
import { FiMenu, FiX } from "react-icons/fi";
import { NAVLINKS } from "@/config/Data";
import ThemeSwitcher, { LanguageSwitcher } from "@/config/ThemeSwicter";
import { motion } from "framer-motion";
import themeList from "@/config/themeList";
import AppContext from "@/config/AppContext";
import {
  logoEquironHeaderBlack,
  logoEquironHeaderWhite,
} from "@/config/_equironImages";

const Header = () => {
  const headerRef = useRef(null);
  useEffect(() => {
    const shrinkHeader = () => {
      if (
        document.body.scrollTop > 50 ||
        document.documentElement.scrollTop > 50
      ) {
        headerRef.current.classList.add("shrink");
      } else {
        headerRef.current.classList.remove("shrink");
      }
    };
    window.addEventListener("scroll", shrinkHeader);
    return () => {
      window.removeEventListener("scroll", shrinkHeader);
    };
  }, []);

  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.6,
        staggerChildren: 0.2,
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

  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(
    window.matchMedia("(max-width: 1024px)").matches
  );

  useEffect(() => {
    function disableScroll() {
      document.body.style.overflow = "hidden";
    }
    function enableScroll() {
      document.body.style.overflow = "";
    }

    if (isNavOpen) {
      disableScroll();
    } else {
      enableScroll();
    }
  }, [isNavOpen]);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setIsMobile(window.matchMedia("(max-width: 1024px)").matches);
    });
  }, []);

  const { theme, language } = useContext(AppContext);
  const NAV_DATA = NAVLINKS[language];

  return (
    <HeaderSite ref={headerRef}>
      <HeaderContainer>
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="header__logo_link"
        >
          <div className="header__logo">
            <motion.div variants={item_nya}>
              <NavLinks to="home" smooth activeClass="active" spy={true}>
                <div className="header-text-logo">
                  <img
                    alt="logo_header"
                    src={
                      theme === themeList.light
                        ? logoEquironHeaderBlack
                        : logoEquironHeaderWhite
                    }
                    className="logo__img"
                  />
                </div>
              </NavLinks>
            </motion.div>
            <motion.div variants={item_nya}>
              <div className="button-switcher">
                <ThemeSwitcher />
                <LanguageSwitcher />
              </div>
            </motion.div>
          </div>
          {isMobile && (
            <div
              className="menuIcon"
              tabIndex="0"
              role="button"
              onKeyDown={() => setIsNavOpen(true)}
              onClick={() => setIsNavOpen(true)}
            >
              <FiMenu />
            </div>
          )}

          <div className="header__menu">
            <nav className={isMobile && isNavOpen ? "open" : undefined}>
              {isMobile && (
                <div className="nav-menu-close">
                  <div className="test">MENU</div>
                  <div
                    className="closeIcon"
                    tabIndex="0"
                    role="button"
                    onKeyDown={() => setIsNavOpen(false)}
                    onClick={() => setIsNavOpen(false)}
                  >
                    <FiX />
                  </div>
                </div>
              )}
              <ul>
                {NAV_DATA.map((item, i) => (
                  <li key={i}>
                    <motion.div variants={item_nya} className="closing">
                      <div className="color_icon">
                        <item.icon />
                      </div>
                      <div className="header__item">
                        <div className="text_menu">
                          <NavLinks
                            to={item.to}
                            smooth
                            activeClass="active"
                            spy={true}
                          >
                            {item.name}
                          </NavLinks>
                        </div>
                      </div>
                    </motion.div>
                  </li>
                ))}

                <li>
                  <motion.div variants={item_nya} className="closing">
                    <div className="color_icon">
                      <FaEllipsisV />
                    </div>
                    <div className="header__item">
                      <div className="resume">
                        <NavLinks
                          to="contact"
                          smooth={true}
                          duration={500}
                          activeClass="active-new"
                          spy={true}
                          offset={-80}
                        >
                          {language === "id"
                            ? "FREE KONSULTASI"
                            : "FREE CONSULTATION"}
                        </NavLinks>
                        <FaArrowRight />
                      </div>
                    </div>
                  </motion.div>
                </li>
              </ul>
            </nav>

            {isNavOpen && (
              <div
                className="navOverlay"
                tabIndex="0"
                aria-label="overlay"
                role="button"
                onKeyDown={() => setIsNavOpen(false)}
                onClick={() => setIsNavOpen(false)}
              />
            )}

            <MediaSocial variants={item_nya} />
          </div>
        </motion.div>
      </HeaderContainer>
    </HeaderSite>
  );
};

const MediaSocial = ({ variants }) => {
  return (
    <>
      <motion.div
        variants={variants}
        className="media_social_right"
        orientation="right"
      >
        <ul className="item_media">
          <li className="item_li">
            <NavLinks to="home" smooth>
              <FaChevronUp />
            </NavLinks>
          </li>
        </ul>
      </motion.div>
    </>
  );
};

export const Header404 = () => {
  const headerRef = useRef(null);
  const { theme } = useContext(AppContext); // ✅ ambil theme di sini

  useEffect(() => {
    const shrinkHeader = () => {
      if (
        document.body.scrollTop > 50 ||
        document.documentElement.scrollTop > 50
      ) {
        headerRef.current.classList.add("shrink");
      } else {
        headerRef.current.classList.remove("shrink");
      }
    };
    window.addEventListener("scroll", shrinkHeader);
    return () => {
      window.removeEventListener("scroll", shrinkHeader);
    };
  }, []);

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

  return (
    <HeaderSite ref={headerRef}>
      <HeaderContainer>
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="header__logo_link"
        >
          <div className="header__logo">
            <motion.div variants={item_nya}>
              <NavLinks to="home" smooth activeClass="active" spy={true}>
                <div className="header-text-logo">
                  <img
                    alt="logo_header"
                    src={
                      theme === themeList.light
                        ? logoEquironHeaderBlack
                        : logoEquironHeaderWhite
                    }
                    className="logo__img"
                  />
                </div>
              </NavLinks>
            </motion.div>
            <motion.div variants={item_nya}>
              <ThemeSwitcher />
            </motion.div>
          </div>
        </motion.div>
      </HeaderContainer>
    </HeaderSite>
  );
};

export default Header;

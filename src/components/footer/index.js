"use client";

import React, { useContext, useEffect, useRef } from "react";
import { FooterSite, WaItemSite } from "./FooterElements";
import { FOOTER_DATA_EQUIRON } from "@/config/Data";
import AppContext from "@/config/AppContext";

const Footer = () => {
  const { language } = useContext(AppContext);
  const FOOTER_DATA = FOOTER_DATA_EQUIRON[language];

  return (
    <FooterSite>
      <div className="footer-container">
        <div className="footer-services">
          <div className="footer-services-text">{FOOTER_DATA?.footer_text}</div>

          <div className="footer-service-flex">
            {FOOTER_DATA?.footer_data_services.map((group, index) => (
              <div className="service" key={index}>
                {group.map((item, subIndex) => (
                  <div className="text" key={subIndex}>
                    {item.name}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
        <div className="footer-company">
          <div className="footer-company-logo">
            <img
              src={FOOTER_DATA?.footer_logo_equiron?.img}
              alt={FOOTER_DATA?.footer_logo_equiron?.alt}
            />
          </div>
          <div className="footer-company-desc">
            {FOOTER_DATA?.footer_company_desc}
          </div>
          <div className="footer-company-social">
            {FOOTER_DATA?.footer_social_media?.map((item, i) => (
              <div key={i} className="social-icon">
                <a
                  href={item.to}
                  aria-label={item.label}
                  target="_blank"
                  rel="noreferrer"
                >
                  <item.icon />
                </a>
              </div>
            ))}
          </div>
        </div>

        <div className="footer-info">
          {FOOTER_DATA?.footer_contact_info?.map((item, i) => (
            <div key={i} className="footer-info-card">
              <div className="card-icon">
                <item.icon className="icon" />
              </div>
              <div className="card-info">
                <div className="text">{item?.label}</div>
                <div className="desc">{item.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <WaItemContent />
    </FooterSite>
  );
};

export default Footer;

export const WaItemContent = () => {
  const waRef = useRef(null);

  const { language } = useContext(AppContext);
  const FOOTER_DATA = FOOTER_DATA_EQUIRON[language];

  useEffect(() => {
    const shrinkHeader = () => {
      if (
        document.body.scrollTop >= 300 ||
        document.documentElement.scrollTop >= 300
      ) {
        waRef.current.classList.add("active");
      } else {
        waRef.current.classList.remove("active");
      }
    };
    window.addEventListener("scroll", shrinkHeader);
    return () => {
      window.removeEventListener("scroll", shrinkHeader);
    };
  }, []);

  return (
    <WaItemSite>
      <div ref={waRef} className="wa_content">
        <a
          href={FOOTER_DATA?.footer_whatsapp?.href}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="wa_text">{FOOTER_DATA?.footer_whatsapp?.text}</div>
          <div className="wa_icon"></div>
        </a>
      </div>
    </WaItemSite>
  );
};

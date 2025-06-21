"use client";

import styled from "styled-components";
import { devices } from "@/assets/scss/_respondTo";
import themeList from "@/config/themeList";

export const ClientsSite = styled.section`
  position: relative;
  width: 100%;
  max-width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 600px;
  background-color: ${({ theme: { theme } }) =>
    theme === themeList.light ? "#fff" : "var(--dark-background)"};

  ${devices.smartphone} {
    align-items: center;
    justify-content: center;
  }

  ${devices.ipads} {
    padding: 160px 40px;
  }

  .clients-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    z-index: 3;

    ${devices.smartphone} {
      padding: 160px 40px;
      height: max-content;
    }

    ${devices.ipads} {
      padding: 160px 40px;
      height: max-content;
    }

    ${devices.tablet} {
      padding: 80px 100px;
    }

    ${devices.laptop} {
      max-width: 950px;
    }
  }

  .clients-content-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    flex-direction: column;
    max-width: 1350px;

    ${devices.smartphone} {
      justify-content: space-between;
    }

    ${devices.ipads} {
      justify-content: space-between;
    }
  }

  .clients-desc {
    width: 100%;
    padding: 0px 20px;
    text-align: center;
    font-weight: 500;

    ${devices.smartphone} {
      padding: 0px 0px;
    }

    ${devices.ipads} {
      padding: 0px 0px;
    }

    ${devices.tablet} {
      padding: 0px 0px;
    }

    .clients-title {
      color: #b68c5a;
      margin-bottom: 25px;
      position: relative;
      padding-top: 0;
      letter-spacing: normal;
      font-size: 20px;
      text-transform: capitalize;
      display: block;
    }

    .clients-subtitle {
      color: ${({ theme: { theme } }) =>
        theme === themeList.light
          ? "var(--light-text-black)"
          : "var(--dark-text-white)"};
      text-transform: none;
      font-weight: 700;
      line-height: 1.4;
      margin: 0 0 24px 0;
      font-size: 54px;
      line-height: 1.185;

      ${devices.smartphone} {
        line-height: 1.3;
        font-size: 34px;
      }

      ${devices.ipads} {
        line-height: 1.3;
        font-size: 34px;
      }
    }
  }

  .clients-content {
    width: 100%;
    padding: 0px 20px;

    ${devices.smartphone} {
      padding: 0px;
    }

    ${devices.ipads} {
      padding: 0px;
    }
  }

  .client-card {
    display: flex;
    flex-direction: column;
    gap: 16px;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 200px;
    border-radius: 24px;
    overflow: hidden;
    border: 1px solid #000;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 15px;
    border: 1px solid #fafafa;
    background-color: #f8f8f8;

    .content-img {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100%;

      img {
        max-width: 80%;
        max-height: 80%;
        object-fit: contain;
      }
    }
  }

  .shape-mockup-clients-left {
    position: absolute;
    left: 0;
    top: 0;
    z-index: 1;
    pointer-events: none;
    opacity: 0.5;

    ${devices.smartphone} {
      width: 40%;
    }
  }

  .shape-mockup-clients-right {
    position: absolute;
    right: 0;
    bottom: 0;
    z-index: 1;
    pointer-events: none;
    opacity: 0.5;

    ${devices.smartphone} {
      width: 40%;
    }
  }

  .jump-clients {
    animation: jumpClients 7s linear infinite;
  }

  @keyframes jumpClients {
    0%,
    100% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-15px);
    }
  }

  .swiper-button-prev,
  .swiper-button-next {
    color: #fff;
    background-color: rgba(0, 0, 0, 0.5);
    width: 40px;
    height: 40px;
    border-radius: 50%;
    top: 50%;
    transform: translateY(-50%);
    z-index: 10;
  }

  .swiper-button-prev::after,
  .swiper-button-next::after {
    font-size: 16px;
    font-weight: bold;
  }

  .swiper-pagination {
    display: none !important;
  }

  .swiper-slide {
    max-width: 100%; // ini bisa batasi total
  }
`;

"use client";

import styled from "styled-components";
import themeList from "@/config/themeList";
import { devices } from "@/assets/scss/_respondTo";

import "@/assets/scss/_index.scss";

export const HeroSite = styled.section`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  margin: 0px;
  max-width: 100%;
  width: 100%;
  padding: 0px 0px 0px 0px;

  .background-container {
    position: absolute;

    ${devices.laptop} {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
    }

    ${devices.desktops} {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
    }

    ${devices.screen_large} {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
    }
  }

  .background-images-hero {
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    width: 100%;

    ${devices?.smartphone} {
      height: 135vh;
    }

    ${devices?.ipads} {
      height: 135vh;
    }

    @media only screen and (min-width: 801px) and (max-width: 1024px) {
      height: 150vh;
    }
  }

  .overlay {
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.4);
    z-index: 1;
  }

  .hero-content {
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 50%;

    ${devices?.smartphone} {
      width: 100%;
    }

    ${devices?.ipads} {
      width: 100%;
    }

    ${devices?.tablet} {
      width: 100%;
    }

    ${devices?.laptop} {
      width: 100%;
    }

    h1 {
      font-weight: 500;
      font-size: 20px;
    }
  }

  .hero-content-images {
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 45%;

    ${devices.smartphone} {
      align-items: center;
      width: 100%;
    }

    ${devices.ipads} {
      align-items: center;
      width: 100%;
    }

    ${devices.tablet} {
      align-items: center;
      width: 100%;
    }

    ${devices?.laptop} {
      width: 100%;
    }
  }

  h1 {
    color: var(--colorMain);
    font-weight: 500;
    font-size: 14px;
  }

  span {
    font-size: 14px;
  }

  p {
    color: ${({ theme: { theme } }) =>
      theme === themeList.light
        ? "var(--dark-text-white)"
        : "var(--dark-text-white)"};
    max-width: 540px;
    line-height: 1.8;

    ${devices.smartphone} {
      font-size: 14px;
    }
  }

  .big-heading {
    color: ${({ theme: { theme } }) =>
      theme === themeList.light
        ? "var(--dark-text-white)"
        : "var(--dark-text-white)"};
    font-weight: 600;
    font-size: 60px;
    margin: 0px;

    ${devices.smartphone} {
      font-size: 34px;
    }

    ${devices.ipads} {
      font-size: 34px;
    }
  }

  .big-heading-one {
    color: ${({ theme: { theme } }) =>
      theme === themeList.light ? "#fff" : "#fff"};
    font-weight: 600;
    font-size: 60px;
    margin: 0px;

    ${devices.smartphone} {
      font-size: 34px;
    }

    ${devices.ipads} {
      font-size: 34px;
    }
  }

  .button-hero {
    display: flex;
    flex-direction: row;
    margin-top: 20px;
    gap: 20px;

    .button-my-course {
      display: flex;
      align-items: center;
      background-color: var(--colorMain);
      padding: 14px 20px;
      border-radius: 6px;
      max-height: 100%;
      cursor: pointer;
      font-size: 14px;
      color: #ffffff;
      gap: 10px;
      transition: 0.3s all ease;
      font-weight: 500;
      border: 2px solid #e37d00;

      ${devices.smartphone} {
        font-size: 12px;
      }

      &:hover {
        background-color: #b88649;
        transition: 0.3s all ease;
        transform: scale(1.05);
      }
    }
  }

  .hero-container {
    padding: 0 0px;
    display: flex;
    flex-direction: row;
    gap: 40px;
    max-width: 1250px;

    ${devices.smartphone} {
      flex-direction: column;
      padding: 80px 40px;
    }

    ${devices.ipads} {
      flex-direction: column;
      padding: 80px 40px;
    }

    ${devices.tablet} {
      flex-direction: column;
      padding: 80px 100px;
    }

    ${devices.laptop} {
      max-width: 950px;
    }
  }

  .images-hero {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 85%;
    height: 100%;

    ${devices.smartphone} {
      width: 80%;
    }

    ${devices.ipads} {
      width: 80%;
    }

    ${devices.laptop} {
      width: 100%;
    }

    .image-border-container {
      width: 100%;
      height: 100%;
      position: relative;
      display: inline-block;
      border-radius: 0 70px 0 70px;
      overflow: visible; // ← penting agar pseudo-element tidak terpotong
      border: 2px solid rgb(255, 255, 255); // ← warna emas elegan
      transition: transform 0.5s ease-in-out;

      &::after {
        content: "";
        position: absolute;
        top: -15px;
        left: -15px;
        width: 100%;
        height: 100%;
        border: 2px solid #caa768;
        border-radius: 0 70px 0 70px;
        z-index: 1;
        transition: border-color 0.5s ease-in-out, top 0.5s ease-in-out,
          left 0.5s ease-in-out;
      }

      &:hover::after {
        border-color: #e6c88d;
        top: -20px;
        left: -20px;
      }

      &:hover {
        transform: scale(1.02); // lebih lembut
      }
    }

    .main-image {
      display: block;
      width: 100%;
      height: 100%;
      border-radius: 0 70px 0 70px;
      position: relative;
      z-index: 2;
      background-color: white; // tambahan opsional jika gambar transparan
      transition: opacity 0.5s ease-in-out;
    }
  }

  .th-hero-bg {
    inset: 0;
    z-index: -4;

    ${devices.smartphone} {
      height: 820px;
    }

    ${devices.ipads} {
      height: 980px;
    }

    ${devices.laptop} {
      height: 670px;
    }
  }
`;

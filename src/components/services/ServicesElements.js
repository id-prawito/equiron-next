"use client";

import styled from "styled-components";
import { devices } from "@/assets/scss/_respondTo";
import themeList from "@/config/themeList";

export const ServicesSite = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  min-height: auto;
  padding: 0px;
  max-width: 1250px;

  ${devices.laptop} {
    max-width: 950px;
  }

  .services-container {
    padding: 100px 0px;
    width: 100%;

    ${devices.smartphone} {
      padding: 80px 25px;
    }

    ${devices.ipads} {
      padding: 80px 40px;
    }

    ${devices.tablet} {
      padding: 80px 100px;
    }
  }

  .services-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;

    .content-title {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 20px;

      h1 {
        line-height: 1.8;
        font-weight: 400;
        font-size: 14px;
        color: ${({ theme: { theme } }) =>
          theme === themeList.light ? "#6b7280" : "#bcbcbc"};

        width: 80%;
        text-align: center;

        ${devices.smartphone} {
          letter-spacing: 0px;
          width: 100%;
          text-align: center;
        }

        ${devices.ipads} {
          letter-spacing: 0px;
          width: 100%;
          text-align: center;
        }

        ${devices.tablet} {
          letter-spacing: 0px;
        }
      }

      .big-heading {
        font-weight: 600;
        font-size: 40px;
        margin: 0px;
        color: ${({ theme: { theme } }) =>
          theme === themeList.light
            ? "var(--light-text-black)"
            : "var(--dark-text-white)"};

        ${devices.smartphone} {
          font-size: 30px;
          line-height: 1.3;
          text-align: center;
        }

        ${devices.ipads} {
          font-size: 34px;
          line-height: 1.3;
          text-align: center;
        }
      }
    }
  }

  .content-service {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    width: 100%;
    gap: 24px 15px;
    color: #000000;

    ${devices.smartphone} {
      grid-template-columns: repeat(1, 1fr);
      row-gap: 30px;
    }

    @media only screen and (min-width: 490px) and (max-width: 600px) {
      grid-template-columns: repeat(2, 1fr);
      row-gap: 30px;
    }

    @media only screen and (min-width: 601px) and (max-width: 800px) {
      grid-template-columns: repeat(2, 1fr);
      row-gap: 30px;
    }

    ${devices.tablet} {
      grid-template-columns: repeat(2, 1fr);
      row-gap: 30px;
    }

    .custom-card {
      position: relative;
      overflow: hidden;
      background-color: #f5f5f5;
      border-radius: 24px;
      padding: 32px;
      width: 100%;
      box-shadow: 0 8px 0 #ce9849;
      transition: transform 0.3s ease;

      &::before {
        content: "";
        position: absolute;
        inset: 0;
        background-color: #2e4a4b;
        transform: scaleX(0);
        transform-origin: left;
        transition: transform 0.5s ease;
        z-index: 0;
      }

      &:hover::before {
        transform: scaleX(1);
      }

      > * {
        position: relative;
        z-index: 1;
        transition: color 0.3s ease, filter 0.3s ease;
      }

      .icon-wrapper {
        width: 80px;
        height: 80px;
        border-radius: 50%;
        background-color: white;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 24px;
        transition: background-color 0.3s ease;
        box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08), 0 1px 2px rgba(0, 0, 0, 0.06);

        img {
          width: 32px;
          height: 32px;
          filter: invert(44%) sepia(46%) saturate(4000%) hue-rotate(10deg)
            brightness(90%) contrast(90%);
          transition: filter 0.3s ease, transform 0.3s ease;
          transform: scaleX(1);
          opacity: 50%;
        }
      }

      .corner-icon {
        position: absolute;
        top: 0px;
        right: -25px;
        z-index: 1;
        opacity: 0.3;

        img {
          width: 110px;
          height: 110px;
          opacity: 1;
          filter: invert(95%) sepia(11%) saturate(7%) hue-rotate(20deg)
            brightness(105%) contrast(90%);
          opacity: 40%;
          transition: filter 0.3s ease;
        }
      }

      .card-title {
        font-size: 22px;
        font-weight: 700;
        margin-bottom: 16px;
        color: #002c2b;
        transition: color 0.3s ease;
      }

      .card-desc {
        font-size: 16px;
        line-height: 1.5;
        color: #666;
        margin-bottom: 24px;
        -webkit-transition: color 0.3s ease;
        transition: color 0.3s ease;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      .read-more {
        font-weight: 600;
        color: #002c2b;
        text-decoration: none;
        display: inline-flex;
        align-items: center;
        transition: color 0.3s ease;

        .arrow {
          margin-left: 8px;
          font-size: 18px;
          transition: margin-left 0.2s ease;
        }

        &:hover .arrow {
          margin-left: 12px;
        }
      }

      &:hover {
        .card-title,
        .card-desc,
        .read-more {
          color: #ffffff;
        }

        .icon-wrapper {
          background-color: #b78c5a;

          img {
            filter: brightness(0) invert(1);
            transform: scaleX(-1);
          }
        }

        .corner-icon img {
          filter: invert(95%) sepia(11%) saturate(7%) hue-rotate(20deg)
            brightness(105%) contrast(90%) !important;
          transform: none !important;
          opacity: 20%;
        }
      }
    }
  }
`;

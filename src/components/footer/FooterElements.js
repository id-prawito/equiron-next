"use client";

import styled from "styled-components";
import { devices } from "@/assets/scss/_respondTo";
import themeList from "@/config/themeList";
import { whatsApp } from "@/config/_equironImages";

export const FooterSite = styled.footer`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  text-align: center;
  min-height: 70px;
  padding: 15px;
  height: auto;
  background-color: #021c1a;

  ${devices.smartphone} {
    padding: 0px;
    min-height: 480px;
  }

  ${devices.ipads} {
    padding: 0px;
    min-height: 480px;
  }

  ${devices.tablet} {
    padding: 0px;
    min-height: 480px;
  }

  .footer-container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    width: 100%;
    max-width: 1350px;
    margin: 0 auto;
    align-items: center;
    gap: 40px;
    padding: 20px;

    ${devices.smartphone} {
      grid-template-areas:
        "services"
        "company"
        "info";
      grid-template-columns: 1fr;
      gap: 40px;
      padding: 60px 40px;
    }

    ${devices.ipads} {
      grid-template-areas:
        "services"
        "company"
        "info";
      grid-template-columns: 1fr;
      gap: 40px;
      padding: 60px 40px;
    }

    ${devices.tablet} {
      grid-template-areas:
        "services services"
        "company info";
      grid-template-columns: 1fr 1fr;
      gap: 20px;
      padding: 80px 100px;
    }

    ${devices.laptop} {
      max-width: 950px;
      padding: 20px 0px;
    }

    .footer-services {
      display: flex;
      flex-direction: column;
      gap: 16px;
      height: 100%;
      justify-content: flex-start;

      ${devices.smartphone} {
        grid-area: services;
        align-items: center;
        gap: 8px;
      }

      ${devices.ipads} {
        grid-area: services;
        align-items: center;
        gap: 8px;
      }

      ${devices.tablet} {
        grid-area: services;
        align-items: center;
        margin-bottom: 30px;
      }

      .footer-services-text {
        font-size: 16px;
        font-weight: bold;
        text-align: left;
        margin-bottom: 20px;
      }

      .service {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 20px;

        ${devices.ipads} {
          gap: 10px;
        }

        ${devices.tablet} {
          gap: 10px;
        }

        .text {
          font-size: 12px;
          font-weight: 400;
          position: relative;
          text-align: left;
          max-width: 200px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;

          color: ${({ theme: { theme } }) =>
            theme === themeList.light
              ? "rgb(145, 145, 145)"
              : "var(--dark-text-white)"};

          &::after {
            content: "";
            position: absolute;
            top: 0;
            right: -20px;
            height: 100%;
            width: 1px;
            background-color: rgb(145, 145, 145);
            margin: 0 20px;

            ${devices.smartphone} {
              content: none;
            }

            ${devices.ipads} {
              content: none;
            }

            ${devices.tablet} {
              content: none;
            }
          }

          &:last-child::after {
            display: none;
          }
        }
      }
    }

    .footer-service-flex {
      display: flex;
      flex-direction: column;
      gap: 16px;
      height: 100%;
      justify-content: flex-start;

      ${devices.smartphone} {
        flex-direction: column;
      }

      ${devices.ipads} {
        flex-direction: column;
      }

      ${devices.tablet} {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
      }
    }

    .footer-company {
      display: flex;
      flex-direction: column;
      gap: 10px;
      align-items: center;

      ${devices.smartphone} {
        grid-area: company;
      }

      ${devices.ipads} {
        grid-area: company;
      }

      ${devices.tablet} {
        grid-area: company;
      }

      &-logo {
        width: 130px;
        /* height: 100px; */

        img {
          width: 100%;
          height: 100%;
        }
      }

      &-desc {
        font-size: 13px;
        width: 100%;
        line-height: 2;

        color: ${({ theme: { theme } }) =>
          theme === themeList.light
            ? "rgb(145, 145, 145)"
            : "var(--dark-text-white)"};
      }

      &-social {
        display: flex;
        flex-direction: row;
        gap: 10px;
        align-items: center;

        .social-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          border-radius: 12px;
          background-color: #1a3331;
          color: #a8b2d1;
          cursor: pointer;

          a {
            display: flex;
            align-items: center;
            justify-content: center;
          }

          &:hover {
            background-color: rgb(43, 82, 79);
          }
        }
      }
    }

    .footer-info {
      display: flex;
      flex-direction: column;
      gap: 20px;
      align-items: flex-start;
      justify-content: flex-start;
      height: 100%;

      ${devices.smartphone} {
        grid-area: info;
        justify-content: center;
      }

      ${devices.ipads} {
        grid-area: info;
        justify-content: center;
      }

      ${devices.tablet} {
        grid-area: info;
        justify-content: center;
      }

      &-card {
        display: flex;
        border-radius: 8px;
        align-items: flex-start;
        flex-direction: row;
        gap: 20px;
        width: 100%;

        ${devices.smartphone} {
          height: 70%;
        }

        ${devices.laptop} {
          height: 70%;
        }

        ${devices.desktops} {
          height: 70%;
        }

        ${devices.screen_large} {
          height: 70%;
        }

        .card-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 50px;
          border-radius: 12px;
          background-color: #1a3331;
          color: rgb(150, 111, 4);
          cursor: pointer;
          font-size: 24px;
          transition: transform 0.4s ease, background-color 0.3s ease;
          width: 12%;

          ${devices.smartphone} {
            width: 50px;
          }

          ${devices.ipads} {
            width: 50px;
          }

          ${devices.tablet} {
            width: 50px;
          }

          ${devices.laptop} {
            width: 50px;
          }

          &:hover {
            background-color: rgb(43, 82, 79);
          }

          .icon {
            font-size: 24px;
            transition: transform 0.5s ease;

            :hover {
              transform: rotateY(180deg);
            }
          }
        }

        .card-info {
          display: flex;
          flex-direction: column;
          gap: 10px;
          align-items: flex-start;
          width: 80%;
          text-align: left;

          .text {
            font-size: 16px;
            font-weight: bold;
            color: rgb(233, 234, 238);
          }

          .desc {
            font-size: 12px;
            color: #a8b2d1;
            line-height: 1.6;
          }
        }
      }
    }
  }

  .footer_item {
    color: ${({ theme: { theme } }) =>
      theme === themeList.light
        ? "var(--light-text-grey)"
        : "var(--dark-text-white)"};
    transition: 0.1s all ease;
    letter-spacing: 0.4px;
    font-size: 12px;
    line-height: 1.4;

    &:hover {
      color: #6c62e2;
      transition: 0.1s all ease;
    }
  }
`;

export const WaItemSite = styled.div`
  .wa {
    &_content {
      position: fixed;
      background: #1bd741aa;
      border-radius: 50px;
      text-align: right;
      overflow: hidden;
      bottom: 15px;
      width: 150px;
      height: 50px;
      right: 15px;
      z-index: 99;
      box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;

      a {
        display: flex;
        align-items: center;
        height: 50px;
        width: 100%;
      }
    }

    &_text {
      display: inline-block;
      color: ${({ theme: { theme } }) =>
        theme === themeList.light ? "#fff" : "#000"};
      letter-spacing: 0.2px;
      padding-left: 20px;
      text-align: center;
      line-height: 1.2;
      background: 0 0;
      font-size: 10px;
      width: 90px;
    }

    &_icon {
      display: inline-block;

      background: url(${whatsApp}) #1bd741 center center no-repeat;
      background-size: 90%;
      border-radius: 50px;
      margin-left: auto;
      height: 50px;
      width: 50px;
    }
  }
`;

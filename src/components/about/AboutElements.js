"use client";

import styled from "styled-components";
import { devices } from "@/assets/scss/_respondTo";
import themeList from "@/config/themeList";

export const AboutSite = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 130vh;
  max-width: 1250px;
  padding: 0;
  position: relative;

  ${devices.smartphone} {
    padding: 40px 0px;
    min-height: 0px;
  }

  ${devices.ipads} {
    min-height: 0px;
    padding: 40px 0px;
  }

  ${devices.laptop} {
    max-width: 950px;
    min-height: 0px;
    padding: 160px 0px;
  }

  ${devices.desktops} {
    min-height: 0px;
    padding: 160px 0px;
  }

  .shape-mockup {
    &-about-left {
      position: absolute;
      top: 50px;
      left: -50px;
      z-index: 1;
      pointer-events: none;
    }

    &-about-right {
      position: absolute;
      bottom: 50px;
      right: -50px;
      z-index: 1;
      pointer-events: none;
      opacity: 0.6;

      ${devices.smartphone} {
        right: 100px;
        width: 60%;
      }

      ${devices.ipads} {
        right: 100px;
        width: 60%;
      }

      ${devices.tablet} {
        right: 100px;
      }

      ${devices.laptop} {
        right: 100px;
      }
    }
  }

  .jump_about {
    animation: jumpAbout 7s linear infinite;
  }

  @keyframes jumpAbout {
    0% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(-30px);
    }
    100% {
      transform: translateY(0);
    }
  }

  .about-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 80px;
    position: relative;
    z-index: 2;

    ${devices.smartphone} {
      padding: 80px 40px;
    }

    ${devices.ipads} {
      padding: 80px 40px;
    }

    ${devices.tablet} {
      padding: 80px 100px;
      gap: 24px;
    }

    ${devices.laptop} {
      padding: 40px 0px;
    }
  }

  .about-content {
    display: flex;
    gap: 20px;

    ${devices.smartphone} {
      flex-direction: column;
    }

    ${devices.ipads} {
      flex-direction: column;
    }

    ${devices.tablet} {
      flex-direction: column;
    }

    h1 {
      color: var(--colorMain);
      font-weight: 500;
      font-size: 14px;
    }
  }

  .about-details {
    display: flex;
    flex-direction: column;
    flex: 0 0 40%;
    gap: 20px;
    margin-right: 20px;
    line-height: 1.4;

    ${devices.smartphone} {
      width: 100%;
      margin-bottom: 40px;
    }

    ${devices.ipads} {
      width: 100%;
      margin-bottom: 40px;
    }

    ${devices.tablet} {
      width: 100%;
      margin-bottom: 40px;
    }

    ${devices.laptop} {
      width: 100%;
    }

    p {
      line-height: 1.8;
      font-weight: 400;
      font-size: 14px;
      color: ${({ theme: { theme } }) =>
        theme === themeList.light ? "#6b7280" : "#bcbcbc"};
    }

    .title-equ {
      color: ${({ theme: { theme } }) =>
        theme === themeList.light
          ? "var(--light-text-black)"
          : "var(--dark-text-white)"};
    }

    .big-heading-about {
      color: ${({ theme: { theme } }) =>
        theme === themeList.light
          ? "var(--light-text-black)"
          : "var(--dark-text-white)"};
      font-weight: 600;
      font-size: 40px;
      margin: 0px;

      ${devices.smartphone} {
        font-size: 30px;
      }

      ${devices.ipads} {
        font-size: 34px;
      }

      span {
        color: var(--colorMain);
        font-size: 40px;

        ${devices.smartphone} {
          font-size: 30px;
        }
      }
    }

    .text-skill {
      display: flex;
      flex-direction: column;
      font-weight: 600;
      font-size: 15px;
      color: rgb(67, 69, 75);
      gap: 1rem;

      li {
        display: flex;
        align-items: center;
        gap: 14px;

        svg {
          color: var(--colorMain);
          font-size: 20px;
        }

        span {
          font-weight: 600;
          font-size: 15px;

          color: ${({ theme: { theme } }) =>
            theme === themeList.light ? "var(--lightText)" : "#fff"};
        }
      }
    }
  }

  /* .card_item {
    background-color: ${({ theme: { theme } }) =>
    theme === themeList.light
      ? "var(--darkCardComponent)"
      : "var(--lightCardComponent)"};
    border-radius: 0.75rem 0.75rem 0 0.75rem;
    max-width: 215px;
    cursor: pointer;
    padding: 20px;
    height: 100%;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

    &:hover {
      transform: scale(1.08);
    }
  } */

  /* .item_logo {
    border-radius: 0.75rem 0.75rem 0 0.75rem;
    display: inline-block;
    padding: 10px;

    img {
      width: 32px;
    }
  } */

  .content-card-images {
    display: grid;
    flex: 0 0 57%;
    gap: 25px;
    grid-template-columns: 1fr 1fr; // Bagi rata 50% - 50%
    grid-template-areas: "cardImagesArea cardImagesArea2";

    ${devices.smartphone} {
      width: 100%;
      justify-content: center;
    }

    ${devices.ipads} {
      justify-content: center;
      /* width: 100%; */
    }

    ${devices.tablet} {
      justify-content: center;
      width: 100%;
    }

    ${devices.laptop} {
      width: 100%;
    }

    @media only screen and (min-width: 580px) and (max-width: 768px) {
      justify-content: center;
    }

    ${devices.laptop} {
      flex: 0 0 55%;
    }

    .cardImagesArea {
      grid-area: cardImagesArea;
      display: flex;
      flex-direction: column;
      height: 100%;

      ${devices.smartphone} {
        height: 100%;
      }

      ${devices.ipads} {
        height: 100%;
      }

      ${devices.tablet} {
        height: 100%;
      }

      ${devices.laptop} {
        height: 80%;
      }

      .image-wrapper {
        position: relative;
        width: 100%;
        height: 600px;
        border-radius: 80px 0 80px 80px;
        overflow: visible;

        ${devices.smartphone} {
          border-radius: 60px 0 60px 60px;
          height: 100%;
        }

        ${devices.ipads} {
          border-radius: 60px 0 60px 60px;
          height: 100%;
        }

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 80px 0 80px 80px;
          display: block;
          position: relative;
          z-index: 1;

          ${devices.smartphone} {
            border-radius: 60px 0 60px 60px;
          }

          ${devices.ipads} {
            border-radius: 60px 0 60px 60px;
          }

          &:hover {
            animation: shake 0.5s ease-in-out;
          }

          @keyframes shake {
            0% {
              transform: translate(0);
            }
            25% {
              transform: translate(-5px, 0);
            }
            50% {
              transform: translate(5px, 0);
            }
            75% {
              transform: translate(-5px, 0);
            }
            100% {
              transform: translate(0);
            }
          }
        }
      }

      .image-border {
        position: absolute;
        top: -25px; // geser ke atas
        left: -25px; // geser ke kiri
        width: 100%; // supaya lebih besar dari gambar
        height: 100%;
        border-radius: 80px 0 80px 80px;
        border: 1px solid #003333;
        z-index: -1;
        box-sizing: border-box;

        ${devices.smartphone} {
          top: -15px; // geser ke atas
          left: -15px;
        }
      }
    }

    .cardImagesArea2 {
      display: flex;
      flex-direction: column;
      height: 100%;
      gap: 20px;

      ${devices.smartphone} {
        height: 100%;
      }

      ${devices.ipads} {
        height: 100%;
      }

      ${devices.tablet} {
        height: 100%;
      }

      ${devices.laptop} {
        height: 80%;
      }

      .images-card-area {
        height: 100%;
        position: relative;

        &.one {
          border-radius: 80px 80px 80px 0;
        }

        &.two {
          border-radius: 0 80px 80px 80px;
        }

        .images-card-area-two {
          position: absolute;
          height: 100%;
          width: 100%;
          border-radius: inherit;
          overflow: hidden;

          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            display: block;
          }

          &:hover {
            animation: shake 0.5s ease-in-out;
          }

          @keyframes shake {
            0% {
              transform: translate(0);
            }
            25% {
              transform: translate(-5px, 0);
            }
            50% {
              transform: translate(5px, 0);
            }
            75% {
              transform: translate(-5px, 0);
            }
            100% {
              transform: translate(0);
            }
          }
        }
      }
    }
  }

  .about_count {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    width: 100%;
    gap: 40px;
    background-color: #003333;
    border: 1px solid #003333;
  }

  .stats-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #b88649;
    opacity: 90%;
    color: white;
    border-radius: 32px;
    padding: 80px;
    font-family: sans-serif;
    gap: 30px;
    width: 100%;

    ${devices.smartphone} {
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      gap: 30px;
      width: 100%;
      max-width: 1000px;
      margin: 0 auto;
      padding: 40px 30px;
    }

    ${devices.ipads} {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 30px;
      width: 100%;
      max-width: 1000px;
      margin: 0 auto;
      padding: 40px 30px;
    }

    ${devices.tablet} {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 40px;
      width: 100%;
      max-width: 1000px;
      margin: 0 auto;
      padding: 40px 20px;
    }

    .stat-item {
      text-align: center;
      flex: 1;
      min-width: 150px;
      display: flex;
      flex-direction: row;
      gap: 10px;
      justify-content: center;
      align-items: center;

      ${devices.smartphone} {
        align-items: center;
        justify-content: flex-start;
      }

      .content {
        display: flex;
        text-align: left;
        flex-direction: column;
        gap: 10px;
      }

      .icon {
        font-size: 70px;
        display: flex;
        align-items: center;

        ${devices.smartphone} {
          font-size: 40px;
        }
      }

      h3 {
        font-size: 28px;
        margin: 0;
      }

      p {
        font-size: 16px;
        margin: 0;
      }
    }
  }

  .divider {
    width: 1px;
    height: 60px;
    background-color: rgba(255, 255, 255, 0.3);
  }
`;

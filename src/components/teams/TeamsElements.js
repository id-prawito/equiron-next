"use client";

import styled from "styled-components";
import { devices } from "@/assets/scss/_respondTo";

export const TeamsSite = styled.section`
  position: relative;
  width: 100%;
  overflow: hidden;
  padding: 0px;
  max-width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 80px 0px 0px 0px;

  .th-hero-bg-teams {
    position: relative;
    width: 100%;
    height: 500px;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    z-index: 0;

    &::after {
      content: "";
      position: absolute;
      inset: 0;
      background-color: #011c1a;
      opacity: 0.8;
      z-index: 2;
      pointer-events: none;
    }

    ${devices.smartphone} {
      height: 640px;
    }

    ${devices.ipads} {
      height: 640px;
    }

    ${devices.tablet} {
      height: 640px;
    }

    ${devices.laptop} {
      height: 500px;
    }
  }

  .teams-container {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 500px;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 3;
    padding: 0 1rem;

    ${devices.smartphone} {
      padding: 80px 40px;
      height: 100%;
    }

    ${devices.ipads} {
      padding: 80px 40px;
      height: 100%;
    }

    ${devices.tablet} {
      padding: 80px 100px;
    }
  }

  .team-content-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    flex-direction: row;
    max-width: 1350px;

    ${devices.smartphone} {
      flex-direction: column;
      justify-content: space-between;
    }

    ${devices.ipads} {
      flex-direction: column;
      justify-content: space-between;
    }

    ${devices.tablet} {
      flex-direction: column;
      justify-content: space-between;
    }

    ${devices.laptop} {
      max-width: 950px;
    }
  }

  .teams-desc {
    width: 35%;
    padding: 0px 20px;

    ${devices.smartphone} {
      width: 100%;
      padding: 20px 0px;
    }

    ${devices.ipads} {
      width: 100%;
      padding: 20px 0px;
    }

    ${devices.tablet} {
      width: 100%;
      padding: 20px 0px;
    }

    .subtitle {
      color: #b68c5a;
      margin-bottom: 25px;
      position: relative;
      padding-top: 0;
      letter-spacing: normal;
      font-size: 20px;
      text-transform: capitalize;
      font-weight: 500;
      display: block;
    }

    .text-content {
      text-transform: capitalize;
      font-size: 34px;
      margin-bottom: 20px;
      font-weight: 600;
      line-height: 1.3;

      ${devices.smartphone} {
        margin-bottom: 0px;
      }

      ${devices.ipads} {
        margin-bottom: 0px;
      }

      ${devices.tablet} {
        margin-bottom: 0px;
      }
    }
  }

  .teams-content {
    max-width: 1200px;
    width: 75%;

    ${devices.smartphone} {
      width: 100%;
    }

    ${devices.ipads} {
      width: 100%;
    }

    ${devices.tablet} {
      width: 100%;
    }
  }

  .team-card {
    position: relative;
    overflow: hidden;
    background-color: #314e52;
    border-radius: 24px;
    transition: 0.4s ease;
    border-bottom: 6px solid #b68c5a;

    .team-img {
      overflow: hidden;
      position: relative;
      border-radius: 24px 24px 34px 34px;
      height: 230px;
      transition: 0.4s;
      display: flex;
      justify-content: center;
      align-items: center;

      .img-hero {
        border-radius: 24px 24px 34px 34px;
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: top;
        transition: 0.4s;
        height: 135%;
        position: absolute;
        top: 0%;
      }
    }

    .team-content {
      padding: 16px 16px 16px;
      text-align: center;
      background: #314e52;
      border-radius: 0 0 24px 24px;
      transition: 0.4s;
      z-index: 1;
      position: relative;

      .box-title {
        margin-bottom: 2px;
        font-size: 20px;
        color: #fff;
        font-weight: 600;
        transition: 0.4s;
      }

      .desc {
        font-size: 14px;
        color: #ccc;
      }
    }

    .team-content-hover-wrap {
      position: absolute;
      inset: 0;
      visibility: hidden;
      opacity: 0;
      transition: 0.4s ease-in-out;
      z-index: 10;

      .team-content-hover {
        width: 100%;
        height: 100%;
        position: relative;
        text-align: center;
        overflow: hidden;

        &::before {
          content: "";
          position: absolute;
          inset: 0;
          background-color: #b68c5a;
          opacity: 0.8;
          z-index: 1;
          border-radius: 24px;
          transition: 0.4s;
        }

        .team-img {
          height: 100%;
          img {
            border-radius: 24px;
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: top;
            transition: 0.4s;
          }
        }

        .hover-inner {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          z-index: 2;
          color: white;
          width: 100%;
          padding: 0 1rem;

          .box-title {
            font-size: 20px;
            color: #fff;
            font-weight: 600;
            margin-bottom: 4px;
          }

          .team-desig {
            font-size: 14px;
            color: #fff;
            margin-bottom: 12px;
            display: block;
          }

          .team-social {
            display: flex;
            justify-content: center;
            gap: 16px;

            .th-social a {
              color: #fff;
              font-size: 16px;
              transition: color 0.3s;
            }

            .th-social a:hover {
              color: #314e52;
            }
          }

          .team-social-media {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            width: 100%;
            height: 100%;
            gap: 10px;

            .card-media {
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
                height: 100%;
              }

              &:hover {
                background-color: rgb(43, 82, 79);
              }
            }
          }
        }
      }
    }

    &:hover {
      .team-content-hover-wrap {
        visibility: visible;
        opacity: 1;
      }
    }
  }

  .shape-mockup-teams {
    position: absolute;
    left: -50px;
    top: 0;
    z-index: 1;
    pointer-events: none;
  }

  .jump_teams {
    animation: jumpTeams 7s linear infinite;
  }

  @keyframes jumpTeams {
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
    max-width: 250px; // ini bisa batasi total
  }
`;

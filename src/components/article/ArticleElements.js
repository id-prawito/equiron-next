"use client";

import styled from "styled-components";
import { devices } from "@/assets/scss/_respondTo";
import themeList from "@/config/themeList";

export const ArticleSite = styled.section`
  position: relative;
  width: 100%;
  max-width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 800px;
  background-color: ${({ theme: { theme } }) =>
    theme === themeList.light ? "#fff" : "var(--dark-background)"};

  ${devices.smartphone} {
    align-items: center;
    justify-content: center;
  }

  ${devices.ipads} {
    height: 120vh;
  }

  .article-container {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 3;

    ${devices.smartphone} {
      padding: 80px 40px;
      height: max-content;
    }

    ${devices.ipads} {
      padding: 80px 40px;
    }

    ${devices.tablet} {
      padding: 80px 100px;
    }

    ${devices.laptop} {
      max-width: 950px;
      padding: 0px;
    }
  }

  .article-content-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    flex-direction: column;
    max-width: 1350px;
  }

  .article-desc {
    width: 100%;
    padding: 0px 20px;
    margin-top: 80px;

    ${devices.smartphone} {
      margin-top: 0px;
      padding: 0px;
    }

    ${devices.ipads} {
      margin-top: 0px;
      padding: 0px;
    }

    ${devices.tablet} {
      padding: 0px;
    }

    ${devices.laptop} {
      padding: 0px;
    }

    .article-title {
      color: #b68c5a;
      margin-bottom: 25px;
      position: relative;
      padding-top: 0;
      letter-spacing: normal;
      font-size: 20px;
      text-transform: capitalize;
      display: block;
      font-weight: 500;
    }

    .article-subtitle {
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
        font-size: 34px;
        line-height: 1.3;
      }

      ${devices.ipads} {
        font-size: 34px;
        line-height: 1.3;
      }
    }
  }

  .article-content {
    width: 100%;
    padding: 0px 20px;

    ${devices.smartphone} {
      padding: 0px;
    }

    ${devices.ipads} {
      padding: 0px;
    }

    ${devices.tablet} {
      padding: 0px;
    }

    ${devices.laptop} {
      padding: 0px;
    }
  }

  .blog-card {
    border-radius: 24px;
    border: 1px solid #b68c5a;
    border-bottom: 6px solid #b68c5a;
    -webkit-transition: 0.4s;
    transition: 0.4s;
    background-color: #fff;

    .blog-img {
      border-radius: 24px;
      overflow: hidden;
      max-height: 280px;

      a {
        color: #b68c5a;
        text-decoration: none;
        outline: 0;
        -webkit-transition: all ease 0.4s;
        transition: all ease 0.4s;
      }

      img {
        width: 100%;
        -webkit-transition: 0.4s ease-in-out;
        transition: 0.4s ease-in-out;
      }
    }

    .blog-content {
      padding-top: 30px;
      position: relative;
      z-index: 3;
      padding: 28px;
      border-radius: 0 0 24px 24px;
      padding-bottom: 10px;

      .blog-meta {
        margin: -0.4em 0 15px 0;
        display: flex;
        align-items: center;
        justify-content: flex-start;

        ${devices.smartphone} {
          justify-content: space-between;
        }

        ${devices.tablet} {
          justify-content: space-between;
        }

        a {
          display: inline-block;
          font-size: 12px;
          color: #868686;
          position: relative;
          margin-right: 26px;
          position: relative;

          ${devices.smartphone} {
            margin-right: 4px;
            font-size: 8px;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 2px;
          }

          ${devices.tablet} {
            margin-right: 4px;
            font-size: 8px;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 2px;
          }

          svg {
            font-size: 10px;
            margin-right: 4px;
            color: #868686;
          }

          &::before {
            content: "";
            position: absolute;
            right: -15px;
            height: 16px;
            width: 1px;
            background: #e0e0e0;
            top: 2px;

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

          &:last-child::before {
            content: none;

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
        }
      }

      .box-title {
        font-size: 24px;
        line-height: 1.417;
        font-weight: 600;
        margin-top: -0.32em;
        margin-bottom: 12px;

        color: #011c1a;
        text-transform: none;
        margin: 0 0 15px 0;

        display: -webkit-box;
        -webkit-line-clamp: 2; /* Batas 2 baris */
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;

        ${devices.smartphone} {
          line-height: 1.2;
          font-size: 18px;
        }

        ${devices.ipads} {
          line-height: 1.2;
          font-size: 18px;
        }

        ${devices.tablet} {
          line-height: 1.2;
          font-size: 18px;
        }

        a {
          background-image: -webkit-linear-gradient(right, #b68c5a, #b68c5a);
          background-image: linear-gradient(to left, #b68c5a, #b68c5a);
          background-repeat: no-repeat;
          background-position: bottom left;
          background-size: 0 2px;
          -webkit-transition: 0.3s ease-in-out;
          transition: 0.3s ease-in-out;
        }
      }
    }
  }

  .shape-mockup-article-left {
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

  .shape-mockup-article-right {
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

  .jump-article {
    animation: jumpArticle 7s linear infinite;
  }

  @keyframes jumpArticle {
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

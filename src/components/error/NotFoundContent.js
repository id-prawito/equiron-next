// components/NotFoundContent.js
"use client";

import { FaRegThumbsUp } from "react-icons/fa";
import Link from "next/link";
import { background_og } from "@/config/_equironImages";
import styled from "styled-components";
import { devices } from "@/assets/scss/_respondTo";

const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 80vh;
  gap: 10px;

  .angka {
    font-size: 180px;
    font-weight: 600;
    color: var(--colorTextMain);

    ${devices.smartphone} {
      font-size: 100px;
    }

    ${devices.ipads} {
      font-size: 140px;
    }

    span {
      color: var(--colorMain);
    }
  }

  .text {
    font-size: 35px;
    font-weight: 500;
    color: var(--colorTextMain);

    ${devices.smartphone} {
      font-size: 20px;
    }

    ${devices.ipads} {
      font-size: 28px;
    }
  }

  .button_hero {
    display: flex;
    flex-direction: row;
    margin-top: 20px;
    gap: 20px;

    .button_my-course {
      display: flex;
      align-items: center;
      justify-content: center;
      border: 0.2px solid var(--colorMain);
      background-color: transparent;
      color: var(--colorMain);
      padding: 14px 32px;
      border-radius: 14px;
      cursor: pointer;
      font-size: 14px;
      gap: 10px;
      text-decoration: none;
      position: relative;
      overflow: hidden;

      &:hover {
        background-color: #b88649;
        transform: scale(1.05);
        color: #ffffff;
      }

      .item_content {
        position: relative;
        z-index: 1;
        display: flex;
        gap: 10px;
        font-size: 18px;
        font-weight: 500;
        padding: 8px;
      }

      .class-img-og {
        position: absolute;
        top: 0;
        left: 0;
        z-index: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        opacity: 0.3;
      }
    }
  }
`;

export default function NotFoundContent() {
  return (
    <NotFoundContainer>
      <div className="angka">
        4<span>0</span>4
      </div>
      <div className="text">Sorry, Page Not Found</div>
      <div className="button_hero">
        <Link href="/" className="button_my-course">
          <div className="item_content">
            <FaRegThumbsUp />
            Back to Home
          </div>
          <div className="class-img-og">
            <img src={background_og} alt="background" />
          </div>
        </Link>
      </div>
    </NotFoundContainer>
  );
}

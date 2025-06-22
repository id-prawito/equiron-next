"use client";

import styled from "styled-components";
import themeList from "@/config/themeList";
import { devices } from "@/assets/scss/_respondTo";

export const ContactSite = styled.section`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: center;
  min-height: 40vh;
  padding: 0px;
  max-width: 1250px;

  ${devices.smartphone} {
    padding: 80px 40px;
    justify-content: center;
    min-height: 0px;
  }

  ${devices.ipads} {
    padding: 80px 40px;
    justify-content: center;
    min-height: 0px;
  }

  ${devices.tablet} {
    padding: 80px 100px;
  }

  ${devices.laptop} {
    max-width: 950px;
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
        ? "var(--light-text-black)"
        : "var(--dark-text-white)"};
    text-align: center;
    max-width: 540px;
    line-height: 1.8;
    font-size: 14px;

    ${devices.smartphone} {
      font-size: 14px;
    }

    ${devices.ipads} {
      font-size: 14px;
    }
  }

  .hero-container {
    padding: 0 100px;
    padding-top: 60px;

    ${devices.smartphone} {
      padding: 0px 25px;
    }

    ${devices.ipads} {
      padding: 0px 25px;
    }

    ${devices.tablet} {
      padding: 0px 25px;
    }
  }

  .contact-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;

    h1 {
      font-size: 20px;
    }
  }

  .big-heading {
    color: ${({ theme: { theme } }) =>
      theme === themeList.light
        ? "var(--light-text-black)"
        : "var(--dark-text-white)"};
    font-weight: 600;
    font-size: 40px;
    margin: 0px;
    margin-bottom: 30px;

    ${devices.smartphone} {
      font-size: 30px;
    }

    ${devices.smartphone} {
      font-size: 30px;
    }

    ${devices.ipads} {
      line-height: 1.3;
      font-size: 34px;
    }
  }

  .contact-container {
    display: grid;
    grid-template-columns: 58% 40%;
    width: 100%;
    gap: 25px;
    margin-bottom: 50px;

    ${devices.smartphone} {
      display: flex;
      flex-direction: column;
      margin-bottom: 0px;
    }

    ${devices.ipads} {
      display: flex;
      flex-direction: column;
      margin-bottom: 0px;
    }

    ${devices.tablet} {
      display: flex;
      flex-direction: column;
    }
  }
`;

export const ButtonContent = styled.div`
  display: initial;
  z-index: 2;
  .button_my-course {
    display: flex;
    align-items: center;
    background-color: #038100;
    padding: 14px 24px;
    border-radius: 20px;
    max-height: 100%;
    cursor: pointer;
    font-size: 14px;
    color: #ffffff;
    gap: 10px;
    transition: 0.3s all ease;

    &:hover {
      background-color: #038100;
      transition: 0.3s all ease;
      transform: scale(1.05);
    }
    a {
      background-color: transparent;
    }
  }

  .button_organisasi {
    display: flex;
    align-items: center;
    font-weight: 400;

    background-color: ${({ theme: { theme } }) =>
      theme === themeList.light ? "#f4f4f4" : "var(--mediumColor)"};

    padding: 8px 15px;
    border-radius: 8px;
    width: max-content;
    color: var(--colorMain);
    margin: auto;
    margin-top: 60px;
    gap: 10px;

    &:hover {
      text-decoration: underline;
      cursor: pointer;
    }
  }
`;

export const FormContents = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 100%;

  .card-form {
    height: max-content;
    background-color: ${({ theme: { theme } }) =>
      theme === themeList.light
        ? "var(--dark-text-white)"
        : "var(--dark-text-white)"};
    border: 1px solid
      ${({ theme: { theme } }) =>
        theme === themeList.light ? "#bdbdbd" : "#bdbdbd"};
    box-sizing: border-box;
    border-radius: 20px;
    transition: box-shadow 1s;
    margin-right: 30px;

    ${devices.smartphone} {
      width: 100% !important;
    }

    ${devices.ipads} {
      width: 100% !important;
    }

    ${devices.laptop} {
      width: 100% !important;
    }

    &:hover {
      border: 1px solid var(--colorMain);
      box-shadow: 0 0 10px rgb(0 0 0 / 15%);
    }
  }

  .content {
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 30px;
    height: 100%;

    .title-text {
      font-size: 24px;
      font-weight: 700;
      color: #000;
    }

    p {
      color: ${({ theme: { theme } }) =>
        theme === themeList.light ? "#000" : "#000"};
      text-align: left;
      font-size: 14px;
      line-height: 1.5;
      font-weight: 300;

      padding-bottom: 10px;
      border-bottom: 1px solid #a5a5a5;
    }
  }

  .content-form {
    display: flex;
    flex-direction: row;
    gap: 20px;
    width: 100%;
  }

  .inputan {
    display: flex;
    gap: 20px;
    align-items: flex-start;
    justify-content: center;
    width: 100%;

    ${devices.smartphone} {
      flex-direction: column;
    }

    ${devices.ipads} {
      flex-direction: column;
    }

    ${devices.laptop} {
      flex-direction: column;
    }

    ${devices.desktops} {
      flex-direction: column;
    }

    ${devices.screen_large} {
      flex-direction: column;
    }
  }

  .form-content-input {
    display: flex;
    flex-direction: column;
    gap: 20px;
    text-align: left;
    width: 100%;

    .text {
      font-weight: 500;
      font-size: 14px;
      color: #000;
      width: 100%;

      &::after {
        content: "*";
        color: red;
      }
    }

    textarea {
      &::placeholder {
        color: #aeaeae;
      }
    }
  }

  .contact-item {
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 100%;
    color: #000;
  }

  .form-input {
    padding: 14px 20px;
    /* border: 1.2px solid #aaa; */

    border: 1px solid
      ${({ theme: { theme } }) =>
        theme === themeList.light ? "#bdbdbd" : "#bdbdbd"};
    box-sizing: border-box;
    border-radius: 8px;
    color: #00193e;

    font-size: 14px;
    font-weight: 500;

    ::placeholder {
      color: #aeaeae;
      font-size: 14px;
      font-weight: 300;
      text-transform: capitalize;
    }

    :focus {
      border: 1px solid #aaa;
      outline: none;
    }
  }

  .radio-group {
    display: flex;
    flex-direction: row;
    gap: 30px;
    align-items: flex-start;
    justify-content: flex-start;
    width: 50%;

    ${devices.smartphone} {
      width: 80%;
      flex-direction: column;
      gap: 10px;
    }

    ${devices.ipads} {
      width: 80%;
    }

    ${devices.laptop} {
      width: 70%;
    }

    .text {
      color: #000;
      font-size: 14px;
      margin-right: 16px;
      display: flex;
      align-items: center;
    }
  }

  .radio-group input[type="radio"] {
    accent-color: #b88649;
    margin-right: 6px;

    width: 16px;
    height: 16px;
  }

  .item_contactNew {
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: flex-start;
    font-size: 14px;

    ${devices.smartphone} {
      flex-direction: column;
    }

    &:last-child {
      align-items: flex-start;
    }

    .icon_text {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 10px;
      font-weight: 500;
      width: 120px;
    }

    .label {
      text-align: end;
      overflow-wrap: anywhere;
      width: 100%;
    }
  }

  .informasi-text {
    display: flex;
    flex-direction: column;
    gap: 20px;
    color: #000;

    .text-contant {
      font-weight: 700;
      font-size: 16px;
    }

    .text-desc {
      font-size: 12px;
      font-weight: 400;
      line-height: 1.5;
      display: flex;
      flex-direction: row;
      justify-content: space-between;

      ${devices.smartphone} {
        flex-direction: column;
      }

      ${devices.ipads} {
        flex-direction: column;
      }

      ${devices.laptop} {
        flex-direction: column;
      }

      .informasi-kantor {
        display: flex;
        flex-direction: row;
        width: 100%;
        gap: 6px;
      }
    }

    .style-email {
      font-size: 12px;
      font-weight: 500;
      line-height: 1.5;
      color: #b88649;
      cursor: pointer;

      &:hover {
        color: #000;
      }
    }

    .maps {
      font-size: 12px;
      font-weight: 500;
      line-height: 1.5;
      color: #000;
      cursor: pointer;

      &:hover {
        color: #b88649;
      }
    }
  }

  .informasi {
    font-size: 12px !important;
    border-bottom: none;
    padding: 10px 20px;
    background-color: #709fff;
    border-radius: 10px;
    width: max-content;
    color: #fff;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;

    ${devices.smartphone} {
      width: 100%;
    }

    ${devices.ipads} {
      width: 100%;
    }

    button {
      display: flex;
      background: none;
      color: #fff;
      margin: auto;
      padding: 0px;
      cursor: pointer;
      transition: all 0.4s ease-in-out;
    }
  }

  textarea {
    padding: 12px 20px;
    border: 1px solid
      ${({ theme: { theme } }) =>
        theme === themeList.light ? "#bdbdbd" : "#bdbdbd"};
    box-sizing: border-box;
    border-radius: 8px;
    color: #00193e;

    font-size: 14px;
    font-weight: 400;
    font-family: "Rubik", sans-serif;

    :focus {
      border: 1px solid #aaa;
      outline: none;
    }
  }

  select:required:invalid {
    color: #aeaeae;
    font-size: 14px;
    font-weight: 300;
    text-transform: capitalize;
  }
  option[value=""][disabled] {
    display: none;
  }
  option {
    color: #7227f3;
  }

  select {
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    background-image: url("data:image/svg+xml;utf8,<svg stroke='currentColor' fill='none' stroke-width='2' viewBox='0 0 24 24' stroke-linecap='round' stroke-linejoin='round' height='1em' width='1em' xmlns='http://www.w3.org/2000/svg'><polyline points='6 9 12 15 18 9'></polyline></svg>");
    background-repeat: no-repeat;
    background-position-x: 97%;
    background-position-y: 15px;
    border-radius: 2px;
    padding: 14px 20px;
    border: 1.2px solid #aaa;
    box-sizing: border-box;
    border-radius: 8px;
    font-size: 14px;
    font-weight: 600;

    :focus {
      outline: none;
    }
  }

  .style_selectNew {
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    background-image: url("data:image/svg+xml;utf8,<svg stroke='currentColor' fill='none' stroke-width='2' viewBox='0 0 24 24' stroke-linecap='round' stroke-linejoin='round' height='1em' width='1em' xmlns='http://www.w3.org/2000/svg'><polyline points='6 9 12 15 18 9'></polyline></svg>");
    background-repeat: no-repeat;
    background-position-x: 97%;
    background-position-y: 15px;
    border-radius: 2px;
    padding: 14px 20px;
    border: 1.2px solid #aaa;
    box-sizing: border-box;
    border-radius: 8px;
    font-size: 14px;
    font-weight: 500;

    :focus {
      outline: none;
    }
  }

  .form_input {
    padding: 14px 20px;
    /* border: 1.2px solid #aaa; */

    border: 1px solid
      ${({ theme: { theme } }) =>
        theme === themeList.light ? "#bdbdbd" : "#000"};
    box-sizing: border-box;
    border-radius: 8px;
    color: #00193e;

    font-size: 14px;
    font-weight: 500;

    ::placeholder {
      color: #aeaeae;
      font-size: 14px;
      font-weight: 300;
      text-transform: capitalize;
    }

    :focus {
      border: 1px solid #aaa;
      outline: none;
    }
  }

  .class_file {
    padding: 10px 20px;
  }

  .button_my-course {
    display: flex;
    align-items: center;
    background-color: var(--colorMain);
    padding: 14px 20px;
    border-radius: 20px;
    max-height: 100%;
    cursor: pointer;
    font-size: 14px;
    color: #ffffff;
    gap: 10px;
    transition: 0.3s all ease;

    &:hover {
      background-color: #038100;
      transition: 0.3s all ease;
      transform: scale(1.05);
    }
  }

  .form_content {
    display: flex;
    flex-direction: column;
    gap: 20px;
    text-align: left;
    width: 100%;

    .text {
      font-weight: 500;
      font-size: 14px;
      color: #000;
      width: 100%;

      ::after {
        content: "*";
        color: red;
      }
    }

    .form_currency {
      padding: 14px 20px;
      /* border: 1.2px solid #aaa; */

      border: 1px solid
        ${({ theme: { theme } }) =>
          theme === themeList.light ? "#bdbdbd" : "#bdbdbd"};
      box-sizing: border-box;
      border-radius: 8px;
      color: #00193e;

      font-size: 14px;
      font-weight: 600;

      ::placeholder {
        color: #aeaeae;
        font-size: 14px;
        font-weight: 300;
        text-transform: capitalize;
      }

      :focus {
        border: 1px solid #aaa;
        outline: none;
      }
    }
  }

  .form_content_input {
    display: flex;
    flex-direction: column;
    gap: 20px;
    text-align: left;
    width: 100%;

    .text {
      font-weight: 500;
      font-size: 14px;
      width: 100%;
      color: #000;

      ::after {
        content: "*";
        color: red;
      }
    }

    .text_keterangan {
      font-size: 10px;
      margin-top: -10px;
      color: #a5a5a5;
    }

    textarea::-webkit-input-placeholder {
      color: #aeaeae;
    }
  }

  .form_style {
    width: 100%;
    display: flex;
    gap: 20px;
    flex-direction: column;
    justify-content: flex-start;
    height: 100%;
  }

  .button_flex {
    display: flex;
    gap: 20px;
    align-items: flex-start;
  }

  table {
    width: 100%;
    border-collapse: collapse;
    overflow: hidden;
    border-radius: 8px;
    border: 1px solid #fff;
    ${devices.smartphone} {
      width: 600px;
    }

    thead {
      tr {
        .text {
          font-size: 12px;
        }
        th {
          padding: 0.75rem;
          border: 1px solid
            ${({ theme: { theme } }) =>
              theme === themeList.light ? "#fff" : "#fff"} !important;
          font-size: 14px;
          font-weight: 400;
          text-align: center;
          color: #fff;
        }
      }
    }
  }

  tbody {
    border: 1px solid #fff;
    font-size: 13px;
    background: #f0f0f0;

    tr:nth-child(even) {
      background: #f7f7f7;
    }

    td {
      border: 1px solid
        ${({ theme: { theme } }) =>
          theme === themeList.light ? "#fff" : "#fff"};
      padding: 0.75rem;
      color: #000;
      line-height: 1.3;
      font-weight: 500;
      text-align: center;

      ${devices.smartphone} {
        text-align: left;
      }

      :nth-child(1) {
        text-align: center;

        ${devices.smartphone} {
          text-align: center;
        }
      }
    }
  }

  .heading {
    font-size: 16px;
    font-weight: 500;
    text-align: left;
    width: 100%;
  }

  .body {
    width: 100%;
  }

  .footer {
    font-size: 12px;
    font-weight: 400;
    text-align: left;
    width: 100%;
    margin-top: 20px;
  }
`;

"use client";

import React, { useContext, useEffect, useState } from "react";
import { ButtonContent, ContactSite, FormContents } from "./ContactElements";
import { CONTACT_DATA_EQUIRON } from "@/config/Data";
import { useInView } from "react-intersection-observer";
import { useAnimation, motion } from "framer-motion";
import { FaAccusoft } from "react-icons/fa";
import { FiX } from "react-icons/fi";
import AppContext from "@/config/AppContext";

const Contact = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.8,
        staggerChildren: 0.6,
      },
    },
  };

  const item_nya = {
    hidden: { y: -20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
    area_praktek: "",
    request_type: "",
  });

  const [berhasil, setBerhasil] = useState(false);

  const whatsappNumber = "6287777000919";

  const set = (name) => {
    return ({ target: { value } }) => {
      setForm((oldValues) => ({ ...oldValues, [name]: value }));
    };
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = `LAPORAN KONSULTASI

Informasi Pelapor:
Nama          : ${form.name}
No. HP        : ${form.phone}
Email         : ${form.email}
Area Praktek  : ${form.area_praktek}
Tipe Request  : ${form.request_type}

-------------------------

Detail Konsultasi:
${form.message}

Pesan ini dikirim melalui formulir konsultasi online.
Mohon segera ditindaklanjuti oleh tim terkait.

Terima kasih.`;

    const encodedText = encodeURIComponent(text);
    const url = `https://wa.me/${whatsappNumber}?text=${encodedText}`;
    window.open(url, "_blank");

    setForm({
      name: "",
      phone: "",
      email: "",
      message: "",
      area_praktek: "",
      request_type: "",
    });
    setBerhasil(true);

    // Setelah 3 detik, set kembali ke false
    setTimeout(() => {
      setBerhasil(false);
    }, 3000);
  };

  const { language } = useContext(AppContext); // 'en' atau 'id'
  const CONTACT_DATA = CONTACT_DATA_EQUIRON[language];

  return (
    <ContactSite ref={ref} id="contact">
      <motion.div
        variants={container}
        initial="hidden"
        animate={controls}
        className="hero-container"
      >
        <motion.div variants={item_nya} className="contact-content">
          <motion.h1 variants={item_nya}>{CONTACT_DATA.contact_text}</motion.h1>
          <motion.div variants={item_nya} className="big-heading">
            {CONTACT_DATA.contact_title}
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        animate={controls}
        className="contact-container"
      >
        <motion.div variants={item_nya} className="content-form">
          <FormContents>
            <motion.div
              variants={container}
              initial="hidden"
              animate={controls}
              ref={ref}
              className="card-form"
            >
              <div className="content">
                <div className="title-text">
                  {CONTACT_DATA?.contact_form_title}
                </div>
                <p
                  dangerouslySetInnerHTML={{
                    __html: CONTACT_DATA?.contact_form_desc,
                  }}
                ></p>
                <div className="content-form">
                  <form
                    className="form_style"
                    onSubmit={handleSubmit}
                    id="form_baru"
                  >
                    <div className="inputan">
                      {CONTACT_DATA?.contact_form_inputs?.map(
                        (field, index) => {
                          if (field.type === "select") {
                            return (
                              <FormInputSelectNew
                                key={index}
                                option={field.value_select}
                                onChange={set(field.value)}
                                placeholder={field.placeholder}
                                value={form[field.value]}
                              />
                            );
                          } else if (field.type === "textarea") {
                            return (
                              <FormTextArea
                                key={index}
                                value={form[field.value]}
                                onChange={set(field.value)}
                                placeholder={field.placeholder}
                              />
                            );
                          } else if (field.type === "radio") {
                            return (
                              <div className="form-content-input" key={index}>
                                <div className="text">{field.title_fields}</div>
                                <div
                                  className="radio-group"
                                  style={{ marginBottom: "16px" }}
                                >
                                  {field.value_radio?.map((option, i) => (
                                    <div className="text" key={i}>
                                      <input
                                        type="radio"
                                        name={field.value}
                                        value={option.value}
                                        checked={
                                          form[field.value] === option.value
                                        }
                                        onChange={set(field.value)}
                                      />
                                      {option.label}
                                    </div>
                                  ))}
                                </div>
                              </div>
                            );
                          } else {
                            return (
                              <FormInput
                                key={index}
                                judul={field.label}
                                placeholder={field.placeholder}
                                type={field.type}
                                value={form[field.value]}
                                onChange={set(field.value)}
                              />
                            );
                          }
                        }
                      )}
                    </div>

                    <p style={{ fontSize: "12px", borderBottom: "none" }}>
                      <b>{CONTACT_DATA?.contact_note?.label}</b>{" "}
                      {CONTACT_DATA?.contact_note?.text}
                    </p>
                    {berhasil ? (
                      <p className="informasi">
                        {CONTACT_DATA?.contact_success_info}
                        <button onClick={() => setBerhasil(false)}>
                          <FiX />
                        </button>
                      </p>
                    ) : (
                      ""
                    )}

                    <div className="button_flex">
                      <Button
                        id="form_baru"
                        icon={FaAccusoft}
                        label={CONTACT_DATA?.contact_button}
                        style={{ fontSize: "12px" }}
                      ></Button>
                    </div>
                  </form>
                </div>
              </div>
            </motion.div>
          </FormContents>
        </motion.div>

        <motion.div variants={item_nya} className="content-info-new">
          <FormContents>
            <motion.div
              variants={container}
              initial="hidden"
              animate={controls}
              ref={ref}
              className="card-form"
            >
              <div className="content">
                <div className="title-text">
                  {CONTACT_DATA?.contact_title_contact}
                </div>
                <div className="content-form">
                  <div className="contact-item">
                    {CONTACT_DATA_EQUIRON?.contact_media_sosial?.map(
                      (item, i) => (
                        <div key={i} className="item_contactNew">
                          <div className="icon_text">
                            <item.icon />
                            {item?.label}
                          </div>
                          <div
                            className="label"
                            style={{ textDecoration: "underline" }}
                          >
                            {item?.to ? (
                              <a href={item?.to}>{item?.title}</a>
                            ) : (
                              item?.title
                            )}
                          </div>
                        </div>
                      )
                    )}
                  </div>
                </div>

                <div className="title-text">
                  {CONTACT_DATA?.contact_title_address}
                </div>
                {CONTACT_DATA?.contact_title_address_data?.map((branch, i) => (
                  <div className="informasi-text" key={i}>
                    <div className="text-contant">{branch.title}</div>
                    <div className="text-desc">{branch.address}</div>

                    <div className="text-desc">
                      {branch.information.map((info, index) => (
                        <div className="informasi-kantor" key={index}>
                          {info.label}
                          <div className="style-email">
                            <a href={info.href}>{info.value}</a>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="maps">
                      <a href={branch?.maps?.href}>{branch?.maps?.text}</a>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </FormContents>
        </motion.div>
      </motion.div>
    </ContactSite>
  );
};

export default Contact;

export const Button = (item) => {
  return (
    <ButtonContent>
      <button
        type="submit"
        style={item.style}
        onClick={item.onClick}
        id={item.id}
        to={item.to}
        className="button_my-course"
      >
        <a href={item.to}>{item.label}</a>
      </button>
    </ButtonContent>
  );
};

export const FormInputSelect = (item) => {
  return (
    <div className="form_content">
      <label>{item.placeholder}</label>
      <select
        className="style_select"
        onChange={item.onChange}
        required
        value={item.value}
      >
        <option value="" disabled>
          {item.placeholder}
        </option>
        {item?.data &&
          item.data?.map((item, i) => (
            <option key={i} value={item.value}>
              {item.name}
            </option>
          ))}
      </select>
    </div>
  );
};

export const FormInput = (item) => {
  return (
    <div className="form-content-input">
      <div className="text">{item.judul}</div>
      <input
        name={item.name}
        id={item.judul}
        className={`form-input ${item.class}`}
        type={item.type}
        placeholder={item.placeholder}
        required
        onChange={item.onChange}
        value={item.value}
        ref={item.innerRef}
      />
    </div>
  );
};

export const FormTextArea = (item) => {
  const { language } = useContext(AppContext); // 'en' atau 'id'
  return (
    <div className="form-content-input">
      <div className="text">{language === "en" ? "Message" : "Pesan"}</div>
      <textarea
        placeholder={item.placeholder}
        required
        value={item.value}
        onChange={item.onChange}
        name="pesan"
        id="pesan"
        cols="30"
        rows="10"
      ></textarea>
    </div>
  );
};

export const FormInputSelectNew = (item) => {
  return (
    <div className="form-content-input">
      <div className="text">{item.placeholder}</div>
      <select
        className="style_selectNew"
        onChange={item.onChange}
        required
        value={item.value}
      >
        <option value="" disabled>
          {item.placeholder}
        </option>
        {item?.option &&
          item?.option.map((item, i) => (
            <option key={i} value={item.value}>
              {item.name}
            </option>
          ))}
      </select>
    </div>
  );
};

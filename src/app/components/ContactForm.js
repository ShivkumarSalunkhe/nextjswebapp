"use client";
import React, { useState } from "react";
import { Mulish } from "next/font/google";
import styles from "@/app/contact/contact.module.css";
const mulish = Mulish({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});

const ContactForm = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUser((values) => ({ ...values, [name]: value }));
  };
  console.log(user);

  const handleSubmit = () => {};

  return (
    <>
      <form className={styles.contact_form} onSubmit={handleSubmit}>
        <div className={styles.input_field}>
          <label htmlFor="username" className={styles.label}>
            Enter your name
            <input
              type="text"
              name="username"
              id="username"
              placeholder="Enter your name"
              className={mulish.className}
              onChange={handleChange}
              value={user.username}
              autoComplete="off"
              required
            />
          </label>
        </div>

        <div className={styles.input_field}>
          <label htmlFor="email" className={styles.label}>
            Enter your email
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
              className={mulish.className}
              onChange={handleChange}
              value={user.email}
              autoComplete="off"
              required
            />
          </label>
        </div>

        <div className={styles.input_field}>
          <label htmlFor="phone" className={styles.label}>
            Enter your phone number
            <input
              type="number"
              name="phone"
              id="phone"
              placeholder="Enter your phone number"
              className={mulish.className}
              onChange={handleChange}
              value={user.phone}
              autoComplete="off"
              required
            />
          </label>
        </div>

        <div className={styles.input_field}>
          <label htmlFor="message" className={styles.label}>
            Message
            <textarea
              type="text"
              name="message"
              id="message"
              rows={4}
              placeholder="Enter your message"
              className={mulish.className}
              onChange={handleChange}
              value={user.message}
              autoComplete="off"
              required
            />
          </label>
        </div>

        <div>
          <button type="submit" className={mulish.className}>
            Send Message
          </button>
        </div>
      </form>
    </>
  );
};

export default ContactForm;

import dotenv from "dotenv";
import path from "path";
dotenv.config({ path: path.resolve(__dirname, ".env") });

import { adjectives, nouns } from "./words";
import nodemailer from "nodemailer";
import sgTransport from "nodemailer-sendgrid-transport";

export const sendMail = email => {
  const options = {
    auth: {
      api_user: process.env.SENDGRID_USERNAME,
      api_key: process.env.SENDGRID_PASSWORD
    }
  };
  const client = nodemailer.createTransport(sgTransport(options));
  return client.sendMail(email);
};

export const generateSecret = () => {
  const randomNumber = Math.floor(Math.random() * adjectives.length);
  return `${adjectives[randomNumber]} ${nouns[randomNumber]}`;
};

export const sendSecretMail = (address, secret) => {
  const email = {
    from: "sangheonBnB@sangheonBnB.com",
    to: address,
    subject: "🔒Login Secret for SangheonBnB🔒",
    html: `Hello Your Login Secret key ${secret}.<br /> 로그인을 위해 웹/앱에 복사 후 붙여넣기 하세요`
  };
  return sendMail(email);
};

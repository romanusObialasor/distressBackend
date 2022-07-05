const crypto = require("crypto");
const nodemailer = require("nodemailer");
const jwt = require("jsonwebtoken");

const { google } = require("googleapis");
const fs = require("fs");
const { promisify } = require("util");
const readFile = promisify(fs.readFile);

const Client_ID =
  "409424743001-kd4ftt0qcf8ajh5hfulkqr71dumf5u11.apps.googleusercontent.com";
const Client_Secret = "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";
const refresh_Token =
  "1//04FZqzkNfjO5TCgYIARAAGAQSNwF-L9Ir-rg6Vvcc39WuF1-YqTxEtIHVOMGv6J9boIihlYHdcqNeIBBoydcprdNso0OK6AZYRcA";
const redirect_URL = "https://developers.google.com/oauthplayground";

const oAuthPass = new google.auth.OAuth2(
  Client_ID,
  Client_Secret,
  redirect_URL
);

oAuthPass.setCredentials({ refresh_token: refresh_Token });

const SendMail = async (emailer, userName) => {
  try {
    const hour = new Date().getHours();
    const minute = new Date().getMinutes();
    const seconds = new Date().getSeconds();
    const createToken = await oAuthPass.getAccessToken();
    const datatoken = await crypto.randomBytes(34).toString("hex");
    const token = await jwt.sign({ datatoken }, "TheSecret", {
      expiresIn: "1d",
    });
    const transport = nodemailer.createTransport({
      service: "gmail",
      auth: {
        type: "OAuth2",
        user: "distress065@gmail.com",
        clientId: Client_ID,
        clientSecret: Client_Secret,
        refresh_token: refresh_Token,
        accessToken: createToken.token,
      },
    });
    const mailOptions = {
      from: "Romanus Obialasor",
      to: emailer,
      subject: "Distress Signal",
      html: `
           <h4>This is ${userName}, am currently in danger. My location as at ${hour}:${minute}:${seconds} is Locaiton</h4>
           `,
    };

    const result = transport.sendMail(mailOptions);
    return result;
  } catch (error) {
    return error;
  }
};

module.exports = SendMail;

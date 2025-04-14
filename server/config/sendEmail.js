import dotenv from "dotenv";
import nodemailer from "nodemailer";
dotenv.config();

if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
  console.log("Provide Gmail credentials inside the .env file");
  process.exit(1);
}

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

const sendEmail = async ({ sendTo, subject, html }) => {
  const info = await transporter.sendMail({
    from: `"Ecommerce 👻" <${process.env.EMAIL_USER}>`,
    to: sendTo,
    subject: subject,
    html: html,
  });

//   console.log("Message sent: %s", info.messageId);
};

export default sendEmail;

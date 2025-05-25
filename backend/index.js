import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";

const app = express();
const PORT = 8080;

app.use(cors());
app.use(express.json());

const sendEmail = async (email, message, name) => {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "poojanpatel2121@gmail.com",
        pass: "eoreksfymuidupfp",
      },
    });

    const mailOptions = {
      from: "poojanpatel2121@gmail.com",
      to: "poojanpatel2121@gmail.com",
      replyTo: email,
      subject: `Portfolio Contact: Message from ${name}`,
      html: `
          <div style="font-family: Arial, sans-serif; padding: 20px; border: 1px solid #e0e0e0; border-radius: 8px; background: #f9f9f9;">
            <h2 style="color: #333;">You've received a new message from your portfolio site</h2>
            <hr />
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <p><strong>Message:</strong></p>
            <div style="padding: 10px; background: #fff; border-radius: 5px; border: 1px solid #ddd;">
              <p style="white-space: pre-line; margin: 0;">${message}</p>
            </div>
            <hr />
            <p style="font-size: 12px; color: #999;">This message was sent from your portfolio contact form.</p>
          </div>
        `,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent: ", info.response);
    return { success: true, info: info.response };
  } catch (error) {
    console.error("Error sending email: ", error);
    return { success: false, error };
  }
};

app.get("/", (req, res) => {
  console.log("hello");
  return res.json({ Message: "Test" });
});

app.post("/getMessage", async (req, res) => {
  try {
    const { email, message, name } = req.body;
    console.log("Received data:", req.body);
    console.log({ email, message });
    const result = await sendEmail(email, message, name);
    return res.json(result);
  } catch (error) {
    console.error(error);
    return res.json({ success: false, error });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

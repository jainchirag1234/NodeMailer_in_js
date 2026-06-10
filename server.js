require("dotenv").config();
const express = require("express");
const sendEmail = require("./mailer");

const app = express();

// 🔥 VERY IMPORTANT (DON'T REMOVE)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Test route (check server working)
app.get("/", (req, res) => {
  res.send("Server is running ✅");
});

// Send email route
app.post("/send-email", async (req, res) => {
  console.log("BODY:", req.body);

  const to = req.body.to || "test@gmail.com";
  const subject = req.body.subject || "Default Subject";
  const message = req.body.message || "Default Message";

  try {
    await sendEmail(to, subject, message);

    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Start server
app.listen(3000, () => {
  console.log("Server running on port 3000 🚀");
});

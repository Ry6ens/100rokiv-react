const express = require("express");
const dotenv = require("dotenv");

const { appendSpreadsheet } = require("./googleSheet");
const { appendTelegram } = require("./telegram");
const { appendSendGrid } = require("./sendGrid");

dotenv.config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/api/google", async (req, res) => {
  appendSpreadsheet(req.body);
});

app.post("/api/telegram", async (req, res) => {
  appendTelegram(req.body);
});

app.post("/api/email", (req, res) => {
  appendSendGrid(req.body);
});

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`server at http://localhost:${port}`);
});

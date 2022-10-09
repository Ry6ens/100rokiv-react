const axios = require("axios");
const dotenv = require("dotenv");

dotenv.config();

const { TELEGRAM_TOKEN, TELEGRAM_CHAT_ID } = process.env;

const URI_API = `https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage`;

const appendTelegram = (message) => {
  const { name, tel, sum, date } = message;

  axios.post(URI_API, {
    chat_id: TELEGRAM_CHAT_ID,
    parse_mode: "html",
    text: `
    <b style="color:red;">Подарунковий сертифікат</b>

    <b>Ім'я:</b> ${name}
    <b>Телефон:</b> ${tel}
    <b>Сума:</b> ${sum.label}
    <b>Дата:</b> ${date}
    `,
  });
};

module.exports = { appendTelegram };

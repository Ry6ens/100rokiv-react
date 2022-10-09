const sgMail = require("@sendgrid/mail");
const dotenv = require("dotenv");

dotenv.config();

const { SENDGRID_API_KEY } = process.env;

sgMail.setApiKey(SENDGRID_API_KEY);

const appendSendGrid = async (message) => {
  const { name, tel, sum, date } = message;

  const msg = {
    to: "ry6ens@gmail.com",
    from: "rest100years@gmail.com", // Use the email address or domain you verified above
    subject: `Куплен сертифікат на сумму ${sum.value}грн`,
    // text: `Куплен сертифікат на ім'я ${name} на сумму ${sum.value}грн. Контактний номер покупця ${tel}`,
    html: `
    <html lang="uk">
  <head>
    <meta charset="UTF-8" />
    <title>Сертифікат</title>
    <style>
td,
th {
    border: 1px solid hsl(0deg, 0%, 80%);
    padding: 10px;
}

td {
    text-align: center;
    background-color: #fdfbf8;
}

.scopeCol {
    background-color: #43291b;
    color: #fff;
}

.scopeRow {
    background-color: #fdfbf8;
}

caption {
    padding: 10px;
    font-size: 20px;
}

table {
    border-collapse: collapse;
    border: 2px solid hsl(0deg, 0%, 80%);
    letter-spacing: 1px;
    font-family: sans-serif;
    font-size: 12px;
}
</style>
  </head>
  <body>
    <table>
      <caption>Сертифікат</caption>
      <tr>
        <th scope="col" class="scopeCol">Дата</th>
        <th scope="col" class="scopeCol">Ім'я</th>
        <th scope="col" class="scopeCol">Телефон</th>
        <th scope="col" class="scopeCol">Сума, грн</th>
    </tr>
    <tr>
        <th scope="row" class="scopeRow">${date}</th>
        <td >${name}</td>
        <td >${tel}</td>
        <td >${sum.value}</td>
    </tr>
    </table>
  </body>
</html>
    
      `,
  };

  sgMail.send(msg).then(
    () => {},
    (error) => {
      console.error(error);

      if (error.response) {
        console.error(error.response.body);
      }
    }
  );
};

module.exports = { appendSendGrid };

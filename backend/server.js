const express = require("express");
const dotenv = require("dotenv");
const sgMail = require("@sendgrid/mail");

dotenv.config();

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/api/email", (req, res) => {
  console.log(req.body);
  const { name, tel, sum, date } = req.body;
  const msg = {
    to: "ry6ens@gmail.com",
    from: "rest100years@gmail.com", // Use the email address or domain you verified above
    subject: `Куплен сертифікат на сумму ${sum.value}`,
    text: `Куплен сертифікат на ім'я ${name} на сумму ${sum.value}грн. Контактний номер покупця ${tel}`,
    // html: `<strong>Куплен сертифікат на імґя ${name} на сумму ${sum.value}грн. Контактний номер покупця ${tel}</strong>`,
    html: `
    <html lang="en-US">
  <head>
    <meta charset="UTF-8" />
    <title>Test page</title>
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
        <th scope="col" class="scopeCol">Сума, грн</th>
    </tr>
    <tr>
        <th scope="row" class="scopeRow">${date}</th>
        <td >${name}</td>
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
});

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`server at http://localhost:${port}`);
});

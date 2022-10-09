const { GoogleSpreadsheet } = require("google-spreadsheet");
const dotenv = require("dotenv");

dotenv.config();

const {
  GOOGLE_SHEET_PRIVATE_KEY,
  GOOGLE_SHEET_CLIENT_EMAIL,
  GOOGLE_SHEET_SPREADSHEET_ID,
  GOOGLE_SHEET_TITLE,
} = process.env;

const doc = new GoogleSpreadsheet(GOOGLE_SHEET_SPREADSHEET_ID);

const appendSpreadsheet = async (row) => {
  const { name, tel, sum, date } = row;

  try {
    await doc.useServiceAccountAuth({
      client_email: GOOGLE_SHEET_CLIENT_EMAIL,
      private_key: GOOGLE_SHEET_PRIVATE_KEY,
    });
    await doc.loadInfo();
    const sheet = doc.sheetsByTitle[GOOGLE_SHEET_TITLE];
    const result = await sheet.addRow({
      name: name,
      tel: tel,
      sum: sum.value,
      date: date,
    });
    return result;
  } catch (error) {
    console.error("Error: ", error);
  }
};
module.exports = { appendSpreadsheet };

import axios from "axios";

export const instance = axios.create({
  baseURL: "https://script.google.com/macros/s/",
});

export const axiosGetGiftVoucher = async (userData) => {
  const id =
    "AKfycbwiVNBuOPvVWDsvPMvCli6S01c_3pCJwwqMSA5yOHhszCoTdNUlIXjORkJnjKcmknwf";

  let axiosConfig = {
    headers: {
      "Content-Type": "application/json;charset=UTF-8",
      "Access-Control-Allow-Methods": "GET, OPTIONS, POST, PUT",
      "Access-Control-Allow-Origin": "http://localhost:3000",
    },
  };

  const { data } = await instance.post(`${id}/exec`, userData, axiosConfig);

  return data;
};

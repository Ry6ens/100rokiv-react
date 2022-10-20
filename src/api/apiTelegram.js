import axios from "axios";

export const axiosTelegram = async (formData) => {
  console.log(formData);
  const { data } = axios.post(`/api/telegram`, formData);
  return data;
};

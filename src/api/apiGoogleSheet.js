import axios from "axios";

export const axiosGoogleSheet = async (formData) => {
  console.log(formData);
  const { data } = axios.post(`/api/google`, formData);
  return data;
};

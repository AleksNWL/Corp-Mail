import axios from "axios";

const API_URL = "http://localhost:5000"; // Адрес бэкенда

export const getUsers = async () => {
  const response = await axios.get(`${API_URL}/users`);
  return response.data;
};

export const sendEmail = async (emailData) => {
  const response = await axios.post(`${API_URL}/send-email`, emailData);
  return response.data;
};

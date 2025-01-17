import axios from "axios";

const user = JSON.parse(localStorage.getItem("persist:root"))?.user;
const currentUser = user && JSON.parse(user).currentUser;
const forgetPassword = user && JSON.parse(user).forgetPassword;
const TOKEN = currentUser?.accessToken;
const FORGOTTOKEN = forgetPassword?.forgotToken;

export const userRequest = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: { token: `Bearer ${TOKEN}` },
});

export const forgotRequest = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: { token: `Bearer ${FORGOTTOKEN}` },
});

export const ambassadorsRequest = axios.create({
  baseURL: "https://api2.premiummodelsapp.com/api/v2/",
  headers: { token: `Bearer ${TOKEN}` },
});

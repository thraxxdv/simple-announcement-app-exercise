import axios from "axios";
import { GetToken } from "../utils/GetToken";

export const login = (email, password) => {
  return axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/v1/auth/login`, {
    email: email,
    password: password,
  });
};

export const authCheck = () => {
  return axios.post(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/v1/auth/check`,
    {},
    {
      headers: {
        Authorization: `Bearer ${GetToken()}`,
      },
    }
  );
};

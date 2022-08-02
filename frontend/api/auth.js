import axios from "axios";

export const login = (email, password) => {
  return axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/v1/auth/login`, {
    email: email,
    password: password,
  });
};

export const authCheck = () => {
    let token;
  if (typeof window !== "undefined") {
    // Perform localStorage action
    token = localStorage.getItem("token");
  }
  return axios.post(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/v1/auth/check`,
    {},
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};

import axios from "axios";
import { GetToken } from "../utils/GetToken";
import { AuthHeader } from "./config";

export const getAnnouncements = () => {
  return axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/v1/announcements`, {
    headers: {
      ...AuthHeader,
    },
  });
};

export const createAnnouncement = (title, content, startDate, endDate) => {
  return axios.post(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/v1/announcements`,
    {
      title: title,
      content: content,
      start_date: startDate,
      end_date: endDate,
    },
    {
      headers: {
        ...AuthHeader,
      },
    }
  );
};

export const getAnnouncement = (id) => {
  return axios.get(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/v1/announcements/${id}`,
    {
      headers: {
        ...AuthHeader,
      },
    }
  );
};

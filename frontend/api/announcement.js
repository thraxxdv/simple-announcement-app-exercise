import axios from "axios";
import {GetToken} from "../utils/GetToken"

export const getAnnouncements = () => {
    

    return axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/v1/announcements`, {
        headers: {
            'Authorization': `Bearer ${GetToken()}`
        }
    });
};

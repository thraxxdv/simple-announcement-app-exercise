import axios from "axios"

export const login = (email, password) => {
    return axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/v1/auth/login`, {
        email: email,
        password: password
    })
}
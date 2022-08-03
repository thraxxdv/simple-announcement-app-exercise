import { GetToken } from "../utils/GetToken";

export const AuthHeader = {
    "Authorization": `Bearer ${GetToken()}`
}
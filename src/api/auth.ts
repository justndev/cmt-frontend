import axios from 'axios';
import {BACKEND_URL} from "@/config";
import {LoginPayload, LoginResponse, RegisterPayload, RegisterResponse} from "@/utils/constants/types";


export async function registerUser(userData: RegisterPayload): Promise<RegisterResponse> {
    const response = await axios.post(`${BACKEND_URL}/auth/register`, userData, {
        headers: {
            'Content-Type': 'application/json',
        },
    });
    return response.data;
}

export async function loginUser(credentials: LoginPayload): Promise<LoginResponse> {
    const response = await axios.post(`${BACKEND_URL}/auth/login`, credentials, {
        headers: {
            'Content-Type': 'application/json',
        },
    });
    return response.data;
}

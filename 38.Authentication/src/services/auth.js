import {
    API
} from "../config/axios"

export const RegisterCall = async (params) => {
    let {data} = await API.post('/api/app/register',params)
    return data
}
export const LoginCall = async (params) => {
    let {data} = await API.post('/api/app/login',params)
    return data
}
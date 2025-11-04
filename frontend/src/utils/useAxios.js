import axios from "axios"
import { getRefreshedToken, isAccessTokenExpierd, setAuthUser } from "./auth"
import { API_BASE_URL } from "./constants"
import Cookies from "js-cookie"

const useAxios = () => {
    const accessToken =  Cookies.get("access_token");
    const refreshToken = Cookies.get("refresh_token");
// Create a pre-configured Axios instance with base URL and authorization key
    const axiosInstance = axios.create({
        baseURL: API_BASE_URL,
        headers:{
            Authorization:`Bearer ${accessToken}`
        }
    });
  //if tokej has not exppiered return request
    axiosInstance.interceptors.request.use(async (req) =>{
        if (!isAccessTokenExpierd){
             return req;
        }
//else return a new refreshd token
    const response = await getRefreshedToken(refreshToken);
    setAuthUser(response.access, response.refresh);
    req.headers.Authorization = `Bearer ${response.data?.access}`;
    return req;

    })

    return axiosInstance
}

export default useAxios;
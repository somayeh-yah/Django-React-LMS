import {userAuthInformationStore} from "../store/auth"
import axios from "../utils/axios";
import jwt_decode from "jwt-decode";
import Cookie from "js-cookie";
import Swal from "sweetalert2";

export const login = async (email, password) => {
  try{
  const {data, status} = await axios.post("user/token/", {
    email,
    password,
  });
  if (status == 200){
    setUserAuth(data.access, data.refresh);
    alert("You logged in Successfully");
  }

  return { data, error: null};

  }catch(error){
    return{
     data: null,
     error: error.response.data?.detail || "Something went wrong, please try again.",
    }
  
   
  }
};

//register a new user and logged in them
export const register = async (full_name, email, password, password2) => {
  try {
    const {data} = await axios.post("user/register/", {
      full_name,
      email,
      password,
      password2,
    })

    await login(email, password);
    alert("Registration successfull");
    return {data, error: null};
  } catch (error) {
     return{
     data: null,
     error: error.response.data?.detail || "Something went wrong, please try again.",
    }
    
  }
}

//logout a user
//remove access and refresh token from Cookies, remove data from Store state
export const logout = () => {
  Cookie.remove("access_token");
  Cookie.remove("refresh_token");
  userAuthInformationStore.getState().setUser(null);
  return <p>You have been logged out successfully</p>
  alert("You have been logged out successfully");
};


export const setUser =  async() => {
  const access_token = Cookie.get("access_token");
  const refresh_token = Cookie.get("refresh_token");
//check if token exists else refresh token
  if(!access_token || !refresh_token){
    alert("Token dose not exists");
    return;
  }

  if(isAccessTokenExpierd(access_token)){

    const response = getRefreshedToken(refresh_token);
    setAuthUser(response.access, response.refresh);

  }else{

    setAuthUser(access_token, refresh_token)

  }
};

//save tokens i cookies and update user in Store
export const setAuthUser = (access_token, refresh_token) => {
  Cookie.set("access_token", access_token, {
    expires: 1,
    secure: true,
  });

    Cookie.set("refresh_token", refresh_token, {
    expires: 7,
    secure: true,
  })

  //decoding user data else null
  const user = jwt_decode(access_token) ?? null

  if (user){
    userAuthInformationStore.getState().setUser(user);
  } else {
   userAuthInformationStore.getState().setLoading(false);
  }
};

export const getRefreshedToken = async () => {
  const refresh_token = Cookie.get("refresh_token");
  const response = await axios.post("user/token/refresh/",{
    refresh: refresh_token,
  });
  return response.data;
};

//checking if access token has expiered
export const isAccessTokenExpierd = (access_token) =>{
try {
  const decodedToken = jwt_decode(access_token)
  return decodedToken.exp < Date.now() / 1000
} catch (error) {
  console.log(error);
  
  return true;
}
}
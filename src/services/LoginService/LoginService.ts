import { LoginRequest } from "../../interfaces/LoginRequest.ts";
import axios from 'axios';
import { ApiConfig } from "../../api.config.ts";
import { LoginResponse } from "../../interfaces/LoginResponse.ts";

const LoginService = (props:LoginRequest) => {

  const API = new ApiConfig();
  return axios.post<LoginResponse>(API.login, props);

};

export default LoginService;
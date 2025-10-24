import { LoginRequest } from "../../interfaces/LoginRequest.ts";
import { toast } from 'react-toastify';
import axios from 'axios';
import { ApiConfig } from "../../api.config.ts";

const LoginService = (props:LoginRequest) => {

  const API = new ApiConfig();

  axios.post(API.login, props).then((response) => {
    if (response.status === 200) {
      toast.success("Accesso effettuato...");
    }
  }).catch(() => {
    toast.error("Email o password errati...");
  })
};

export default LoginService;
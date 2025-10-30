import { RegisterRequest } from "../../interfaces/RegisterRequest.ts";
import { ApiConfig } from "../../api.config.ts";
import axios from "axios";

const RegisterService = (props:RegisterRequest) => {

  const API = new ApiConfig();
  return axios.post(API.register, props);

};

export default RegisterService;
import configEnv from "../config/config";

const baseURL = configEnv.apiBaseUrl;

export const API_PUBLIC_PATH = {
  USER_LOGIN: `${baseURL}/login`,
  USER_REGISTRATION: `${baseURL}/registration`,
};

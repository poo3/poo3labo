import axios from "axios";

const axiosMicro = axios.create({
  baseURL: process.env.NUXT_ENV_MICRO_CMS_BASE_URL
});

export default axiosMicro;

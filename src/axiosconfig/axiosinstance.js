import axios from "axios";
const axiosInstance = axios.create({
  baseURL: "https://api.themoviedb.org/3/",

  params:{
  api_key:"e1cf38b1aece01944246db6a4bda8484"
  }
});
export default axiosInstance;

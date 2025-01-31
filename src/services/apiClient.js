import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://backendrequestvacantproperty.onrender.com/api",
});

export default apiClient;

import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://localhost:9000",
});

export default apiClient;

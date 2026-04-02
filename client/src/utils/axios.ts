import axios from "axios";

const customFetch = axios.create({
  baseURL: import.meta.env.PROD
    ? "https://fullstackprojectsportfolio-production.up.railway.app/api/v1"
    : "http://localhost:4000/api/v1",
});

export default customFetch;

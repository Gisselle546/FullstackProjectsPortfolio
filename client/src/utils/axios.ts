import axios from "axios";

export const isProduction = () => process.env.NODE_ENV === "production";

const customFetch = axios.create({
  baseURL: isProduction()
    ? "https://fullstackprojectsportfolio-production.up.railway.app/api/v1"
    : "http://localhost:4000/api/v1",
});

export default customFetch;

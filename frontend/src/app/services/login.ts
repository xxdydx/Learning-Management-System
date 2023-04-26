import axios from "axios";
const baseUrl = "http://localhost:3001/api/login";

interface credentials {
  username: string;
  password: string;
}

const login = async (credentials: credentials) => {
  const response = await axios.post(baseUrl, credentials);
  return response.data;
};

export default { login };

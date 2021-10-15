import axios from "axios";
const baseUrl = "http://challenge-react.alkemy.org";

const login = async (credentials = {}) => {
  const auth = await axios.post(baseUrl, { ...credentials });

  return auth;
};

const authService = {
  login,
};

export default authService;

import axios from "axios";
const baseUrl = "http://challenge-react.alkemy.org";

const login = async (
  credentials = {
    email: "challenge@alkemy.org",
    password: "react",
  }
) => {
  const auth = await axios.post(baseUrl, { ...credentials });

  return auth;
};

const authService = {
  login,
};

export default authService;

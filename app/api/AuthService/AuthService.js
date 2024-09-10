 
import axios from 'axios';

const API_URL = 'https://logical-quiz-backend-43lpx.ondigitalocean.app';  



const AuthService = {
  register: async (credentials) => {
    try {
      const res = await axios.post(`${API_URL}/signup`, credentials);
      console.log("User signed up successfully:", res.data);
      return res.data;
    } catch (error) {
      throw new Error(error.response?.data || 'An unexpected error occurred.');    }
  },

  login: async (credentials) => {
    try {
      const res = await axios.post(`${API_URL}/login`, credentials);
      console.log("User logged in successfully:", res.data);
      return res.data;
    } catch (error) {
      throw new Error(error.response.data);
    }
  },

  logout: async () => {
    try {
      await axios.post(`${API_URL}/logout`);
      console.log("User logged out successfully");
    } catch (error) {
      throw new Error(error.response.data);
    }
  },

  forgetPassword: async (email) => {
    try {
      await axios.post(`${API_URL}/forget-password`, { email });
    } catch (error) {
      throw new Error(error.response.data);
    }
  },

  resetPassword: async (email, token, password) => {
    try {
      await axios.post(`${API_URL}/reset-password`, { email, token, password });
    } catch (error) {
      throw new Error(error.response.data);
    }
  },
};


// export default AuthService ;
export { AuthService };

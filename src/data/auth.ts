import axios from 'axios';

export const login = async (email: any, password: any) => {
  const response = await axios.post("http://[::1]:3000/user/login", { email, password }, { 
    headers: { 
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PATCH, PUT, DELETE, OPTIONS",
      "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token"
    }
  });
  return response;
};
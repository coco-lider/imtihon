import axios from "axios";

export const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/users",
  timeout: 3000,
  headers: {
    "Content-Type": "application/json",
  },
});

// export const getUsers = () => api.get('/users').then(res => res.data);
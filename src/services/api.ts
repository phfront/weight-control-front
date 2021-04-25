import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://localhost:4000/api/',
  headers: {
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MDgzMTU4NGM5NGM3MjUxYWNkZTAyNTIiLCJpYXQiOjE2MTkyOTM1OTcsImV4cCI6MTYxOTg5ODM5N30.KJUXhYUzv_CP5ePtZ31LQArJhJJsaC3NaUIax6ea8bo'
  }
});

import axios from 'axios';

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MDg1OWUzZmJiZWM1ODYxOThiZWE2YWIiLCJpYXQiOjE2MjA1NzA3NTQsImV4cCI6MTYyMTE3NTU1NH0.W8JsZewhtaBvAXcVnNfyqTfXxN0e1-5oZmWdpPH3eUc'
  }
});

import axios from 'axios';

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MDg1YzljZTEwNDBjZDMzMGM0Mjc0YmQiLCJpYXQiOjE2MjA1NjUwODgsImV4cCI6MTYyMTE2OTg4OH0.av55ZdRqhw2cSQKnL8e1EPAoTCgD36fxPR0c9Gl_KZk'
  }
});

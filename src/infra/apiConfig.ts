import axios from 'axios'

const apiConfig = {
  baseURL: process.env.HOST_BACKEND,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
}

export const instance = axios.create(apiConfig)

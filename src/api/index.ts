import axios from './apiConfig';
import { endPoints } from './endPoints';

export const endPoint = {
  login: (data: any) => axios.post(endPoints.auth.url, data),
};
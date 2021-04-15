import axios from 'axios';

export const getAllDogs = () => {
  return axios.get('API/dogs');
}
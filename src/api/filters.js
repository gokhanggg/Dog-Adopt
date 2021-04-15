import axios from 'axios';

export const getAllFilters = () => {
  return axios.get('API/filters');
}

export const filter = (age, city, gender) => {
  return axios.get(`API/filter?age=${JSON.stringify(age)}&city=${JSON.stringify(city)}&gender=${JSON.stringify(gender)}`);
}
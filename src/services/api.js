import axios from 'axios';

const api = axios.create({
  baseURL: 'https://backendnodejs-production-8ed1.up.railway.app', // URL вашего бекенда
});

// Пример функции для API-запроса
export const getResourceList = async () => {
  const response = await api.get('/resources');
  return response.data;
};

export default api;
import axios from 'axios';

export const apiInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

export const campersFetch = async (page = 1) => {
  const { data } = await apiInstance.get('/adverts', {
    params: {
      page,
      limit: 4,
    },
  });

  return data;
};

// export const campersFetch = async () => {
//   const { data } = await apiInstance.get('/adverts');
//   return data;
// };

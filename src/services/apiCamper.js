import axios from 'axios';

export const apiInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

export const campersFetch = async (page, locationFilter) => {
  const { data } = await apiInstance.get('/adverts', {
    params: {
      page,
      limit: 4,
      location: locationFilter,
    },
  });

  return data;
};

export const campersPost = async form => {
  const { data } = await apiInstance.post('/adverts', form);

  return data;
};

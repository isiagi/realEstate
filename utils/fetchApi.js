import axios from 'axios';

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
  const {data} = await axios.get(url, {
    headers: {
      'x-rapidapi-host': 'bayut.p.rapidapi.com',
      'x-rapidapi-key': '0f4d155417msha0ad04541f87d97p1af13cjsnd4cb14188512',
    },
  });

  return data;
};

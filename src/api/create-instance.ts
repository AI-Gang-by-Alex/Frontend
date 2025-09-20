import axios from 'axios';

export const createInstance = (path: string) => {
  const service = axios.create({
    baseURL: `${process.env.SERVER_HOST}${path[0] === '/' ? path : `/${path}`}`,
  });

  return service;
};

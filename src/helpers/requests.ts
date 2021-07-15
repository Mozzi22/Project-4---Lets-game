import { routes } from '../constants/routes';
import { TUrl } from './types';

const { baseUrl } = routes;

export const getRequest = async (url: TUrl) => {
  const options = { method: 'GET' };
  const answer = await fetch(`${baseUrl}${url}`, options);
  return answer;
};

export const postRequest = async (url: TUrl, body) => {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  };
  const answer = await fetch(`${baseUrl}${url}`, options);
  return answer;
};

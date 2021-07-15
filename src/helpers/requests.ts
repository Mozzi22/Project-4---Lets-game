import { routes } from '../constants/routes';

const { baseUrl } = routes;

export const getRequest = async (url: string) => {
  const options = { method: 'GET' };
  const answer = await fetch(`${baseUrl}${url}`, options);
  return answer;
};

export const postRequest = async <T>(url: string, body:T) => {
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

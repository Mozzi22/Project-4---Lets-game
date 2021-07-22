import { routes } from '../constants/routes';

const { baseUrl, baseWebSocketUrl } = routes;

export const getRequest = async (url, optionalHeaders = {}) => {
  const headers = Object.assign({}, optionalHeaders);
  const options = { method: 'GET', headers };
  const answer = await fetch(`${baseWebSocketUrl}${url}`, options);
  if (!answer.ok) throw new Error(await answer.json());
  const result = await answer.json();
  console.log(result);
  return result;
};

// export const getRequest = async (url: string) => {
//   const options = { method: 'GET' };
//   const answer = await fetch(`${baseUrl}${url}`, options);
//   return answer;
// };

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

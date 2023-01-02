import {Method} from "./consts";

export const createOptions = (method: Method, data: object | undefined, token?: string) => {
  return {
    method,
    headers: {
      'Content-Type': 'application/json',
      Authorization: token || '',
    },
    body: JSON.stringify(data),
  };
};

export const checkResponse = (response: Response) => {
  if (response.ok) {
    return response.json();
  }
  return Promise.reject(response);
};

export const request = (url: string, options?: ReturnType<typeof createOptions>) =>
  fetch(url, options).then(checkResponse);

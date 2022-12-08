export const createOptions = (method, data, token) => {
  return {
    method,
    headers: {
      'Content-Type': 'application/json',
      Authorization: token || '',
    },
    body: JSON.stringify(data),
  };
};

export const checkResponse = res => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(res);
};

export const request = (url, options) =>
  fetch(url, options).then(checkResponse);

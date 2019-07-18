import 'isomorphic-unfetch';
import getConfig from 'next/config';
import { stringify } from 'query-string';

const {
  publicRuntimeConfig: { API_KEY, API_URL }
} = getConfig();

const BaseUrl = `${API_URL}/api`;

const Http = {
  Request: async (methodType, url, params, payload) => {
    return new Promise((resolve, reject) => {
      const query = params
        ? `?${stringify({ ...params, api_key: API_KEY })}`
        : '';

      fetch(`${BaseUrl}${url}${query}`, {
        body: JSON.stringify(payload),
        cache: 'no-cache',
        headers: {
          'content-type': 'application/json'
        },
        method: `${methodType}`
      })
        .then(async response => {
          if (response.status === 200) {
            return response.json().then(resolve);
          } else {
            return reject(response);
          }
        })
        .catch(e => {
          reject(e);
        });
    });
  }
};

export default Http;

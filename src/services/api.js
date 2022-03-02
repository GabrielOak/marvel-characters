import axios from 'axios';

const publicKey = '26e8c0b1e5491563872ac42e6da1b020';
const ts = 'gabriel';
const hash = '963e48e2ab4a8cd2f93677972e1401cd';

const api = axios.create({
  baseURL: 'https://gateway.marvel.com/v1/public/',
  timeout: 5000,
  params: {
    ts: ts,
    hash: hash,
    apikey: publicKey,
  },
});

export default api;

import axios from 'axios';

const publicKey = '';
const ts = '';
const hash = '';

const api = axios.create({
  baseURL: 'http://gateway.marvel.com/v1/public/',
  timeout: 5000,
  params: {
    ts: ts,
    hash: hash,
    apikey: publicKey,
  },
});

export default api;

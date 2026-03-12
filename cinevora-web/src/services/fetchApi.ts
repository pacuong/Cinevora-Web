import { BASE_URL } from '@/src/constants/baseUrl';
import axios from 'axios';

const fetchApi = axios.create({
  baseURL: BASE_URL,
});

export default fetchApi;
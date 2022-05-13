import axios, { Method, AxiosResponse } from 'axios';
import md5 from 'js-md5';

const { APP_URL } = process.env;
const { MARVEL_PUBLIC_KEY } = process.env;
const { MARVEL_PRIVATE_KEY } = process.env;

export interface IHttpClient {
  url: string;
  method: Method;
  data?: any;
  offset: number;
  params?: any;
}

export default async function httpClient({
  url,
  method,
  data,
  offset,
  params,
}: IHttpClient): Promise<AxiosResponse> {
  try {
    const timestamp = Number(new Date());
    const hash = md5.create();
    hash.update(timestamp + MARVEL_PRIVATE_KEY + MARVEL_PUBLIC_KEY);
    // 'https://gateway.marvel.com:443/v1/public/characters?limit=10&offset=10&apikey=766ff2f0eef25bf9e7513fd0997b995b'
    return await axios({
      url: `${APP_URL}/${url}?limit=10&offset=${offset}&ts=${timestamp}&apikey=${MARVEL_PUBLIC_KEY}&hash=${hash.hex()}`,
      // url: `${APP_URL}/${url}?ts=${timestamp}&apikey=${MARVEL_PUBLIC_KEY}&hash=${hash.hex()}`,
      method,
      data,
      params,
    });
  } catch (error) {
    throw error;
  }
}


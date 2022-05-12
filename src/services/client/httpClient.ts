import axios, { Method, AxiosResponse } from 'axios';
import md5 from 'js-md5';

const { APP_URL } = process.env;
const { MARVEL_PUBLIC_KEY } = process.env;
const { MARVEL_PRIVATE_KEY } = process.env;

export interface IHttpClient {
  url: string;
  method: Method;
  data?: any;
  params?: any;
}

export default async function httpClient({
  url,
  method,
  data,
  params,
}: IHttpClient): Promise<AxiosResponse> {
  try {
    const timestamp = Number(new Date());
    const hash = md5.create();
    hash.update(timestamp + MARVEL_PRIVATE_KEY + MARVEL_PUBLIC_KEY);

    return await axios({
      url: `${APP_URL}/${url}?ts=${timestamp}&apikey=${MARVEL_PUBLIC_KEY}&hash=${hash.hex()}`,
      method,
      data,
      params,
    });
  } catch (error) {
    throw error;
  }
}


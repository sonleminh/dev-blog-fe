import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';

export const privateInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_HOST,
});

privateInstance.interceptors.request.use(
  (config) => {
    // const accessToken = Cookies.get(ACCESS_TOKEN_KEY);
    // if (accessToken) {
    //   config.headers.Authorization = `Bearer ${accessToken}`;
    // }

    return config;
  },
  async (error) => Promise.reject(error)
);

privateInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    // const originalReq = error.config;
    // if (error.response.status === 401) {
    //   const { data } = await privateInstance.get('/auth/refresh-token');
    //   localStorage.setItem(ACCESS_TOKEN_KEY, data.accessToken);
    //   return privateInstance(originalReq);
    // }

    return Promise.reject(error);
  }
);

export async function getRequest<T>(
  url: string,
  config?: AxiosRequestConfig,
  errCallback?: () => void
): Promise<AxiosResponse<T>> {
  try {
    const response: AxiosResponse<T> = await privateInstance.get(url, config);
    return response;
  } catch (error) {
    errCallback?.();
    await logger(error as AxiosError);
    throw error;
  }
}

export async function postRequest<T>(
  url: string,
  data: any,
  config?: AxiosRequestConfig,
  errCallback?: () => void
): Promise<AxiosResponse<T>> {
  try {
    const response: AxiosResponse<T> = await privateInstance.post(
      url,
      data,
      config
    );
    return response;
  } catch (error) {
    errCallback?.();
    await logger(error as AxiosError);
    throw error;
  }
}

export async function putRequest<T>(
  url: string,
  data: any,
  config?: AxiosRequestConfig,
  errCallback?: () => void
): Promise<AxiosResponse<T>> {
  try {
    const response: AxiosResponse<T> = await privateInstance.put(
      url,
      data,
      config
    );

    return response;
  } catch (error) {
    errCallback?.();
    await logger(error as AxiosError);
    throw error;
  }
}

export async function deleteRequest<T>(
  url: string,
  config?: AxiosRequestConfig,
  errCallback?: () => void
): Promise<AxiosResponse<T>> {
  try {
    const response: AxiosResponse<T> = await privateInstance.delete(
      url,
      config
    );
    return response;
  } catch (error) {
    errCallback?.();
    await logger(error as AxiosError);
    throw error;
  }
}

export async function patchRequest(
  url: string,
  data: any,
  config?: AxiosRequestConfig,
  errCallback?: () => void
) {
  try {
    const response = await privateInstance.patch(url, data, config);
    return response;
  } catch (error) {
    errCallback?.();
    await logger(error as AxiosError);
    throw error;
  }
}

async function logger(error: AxiosError) {
  if (error.response) {
    // The request was made and the server responded with a status code
    console.error('Response Error', error.response.status, error.response.data);
  } else if (error.request) {
    // The request was made but no response was received
    console.error('Request Error', error.request);
  } else {
    // Something happened in setting up the request that triggered an Error
    console.error('Error', error.message);
  }
}

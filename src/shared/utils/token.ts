import { appConfig } from '#/configs/config';

const LOCAL_STORAGE_TOKEN_KEY = `${appConfig.name}_access_token`;
const LOCAL_STORAGE_REFRESH_TOKEN_KEY = `${appConfig.name}_refresh_token`;

export const getToken = () => {
  if (localStorage) {
    return localStorage.getItem(LOCAL_STORAGE_TOKEN_KEY);
  }
};

export const setToken = (accessToken: string) => {
  if (localStorage) {
    localStorage.setItem(LOCAL_STORAGE_TOKEN_KEY, accessToken);
  }
};

export const clearToken = () => {
  if (localStorage) {
    localStorage.removeItem(LOCAL_STORAGE_TOKEN_KEY);
  }
};

export const getRefreshToken = () => {
  if (localStorage) {
    return localStorage.getItem(LOCAL_STORAGE_REFRESH_TOKEN_KEY);
  }
};

export const setRefreshToken = (refreshToken: string) => {
  if (localStorage) {
    localStorage.setItem(LOCAL_STORAGE_REFRESH_TOKEN_KEY, refreshToken);
  }
};

export const clearRefreshToken = () => {
  if (localStorage) {
    localStorage.removeItem(LOCAL_STORAGE_REFRESH_TOKEN_KEY);
  }
};

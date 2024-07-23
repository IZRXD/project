import * as request from "../lib/request";

const baseUrl = 'http://localhost:3030/jsonstore/wallpapers'

export const getAll = async () => {
    const result = await request.get(baseUrl);

    return Object.values(result);
};


export const getLatest = async () => {
  const result = await request.get(baseUrl);

  return Object.values(result).slice(2);
};

export const getOne = async (wallpaperId) => {
    const result = await request.get(`${baseUrl}/${wallpaperId}`, );

    return result;
}

export const create = async (wallpaperData) => {
    const result = await request.post(baseUrl, wallpaperData);

    return result;
};



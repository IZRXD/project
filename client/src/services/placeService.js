import * as request from "../api/requester";

const baseUrl = 'http://localhost:3030/jsonstore/places'

export const getAll = async () => {
    const result = await request.get(baseUrl);

    return Object.values(result);
};


export const getLatest = async () => {
  const result = await request.get(baseUrl);

  return Object.values(result).slice(2);
};

export const getOne = async (placeId) => {
    const result = await request.get(`${baseUrl}/${placeId}`, );

    return result;
}

export const create = async (placeData) => {
    const result = await request.post(baseUrl, placeData);

    return result;
};



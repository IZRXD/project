import {get,post, put,del} from "../api/requester";

const baseUrl = 'http://localhost:3030/jsonstore/places/'

export const getAll = async () => {
    const result = await get(baseUrl);

    return Object.values(result);
};


export const getLatest = async () => {
  const result = await get(baseUrl);

  return Object.values(result).slice(2);
};

export const getOne = async (placeId) => {
    const result = await get(`${baseUrl}/${placeId}`, );

    return result;
}

export const create = async (placeData) => {
    const result = await post(baseUrl, placeData);

    return result;
};
export const deleting = async (placeId) => {
    const result = await del(baseUrl+placeId);

    return result;
};
export const edit = async (placeId,placeData) => {
  const result = await put(baseUrl+placeId, placeData);

  return result;
};



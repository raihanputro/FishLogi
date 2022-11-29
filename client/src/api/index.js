import axios from 'axios';

const url = 'http://localhost:5000/fishes';


export const fecthFishPost = () => axios.get(url);
export const createFishPost = (newFishPost) => axios.post(url, newFishPost);
export const updateFishPost = (id, updatedFishPost) => axios.patch(`${url}/${id}`, updatedFishPost);
export const deleteFishPost = (id) => axios.delete(`${url}/${id}`)
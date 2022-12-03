import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000'});

API.interceptors.request.use((req) => {
    if(localStorage.getItem('profile')) {
        req.headers.authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
    }

    return req;
});

export const fetchFishPostsBySearch = (searchQuery) => API.get(`/fishes/search?searchQuery=${searchQuery.search}`);
export const fetchFishPost = (id) => API.get(`/fishes/${id}`);
export const fetchFishPosts = () => API.get('/fishes');
export const createFishPost = (newFishPost) => API.post('/fishes', newFishPost);
export const updateFishPost = (id, updatedFishPost) => API.patch(`/fishes/${id}`, updatedFishPost);
export const deleteFishPost = (id) => API.delete(`/fishes/${id}`);

export const signIn = (formData) => API.post('/users/signIn', formData);
export const signUp = (formData) => API.post('/users/signUp', formData);
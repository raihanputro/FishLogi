import * as api from '../api';

export const getFishPosts = () => async ( dispatch ) => {
    try {
        const { data } = await api.fecthFishPost();

        dispatch({ type: 'FETCH_ALL', payload: data });
    } catch (error) {
        console.log(error)
    }
}

export const createFishPost = ( fishPost ) => async (dispatch) => {
    try {
        const { data } = await api.createFishPost(fishPost);
      
        dispatch({ type: 'CREATE', payload: data})
    } catch (error) {
        console.log(error)
    }
};

export const updateFishPost = (id, fishPost) => async (dispatch) => {
    try {
        const { data } = await api.updateFishPost(id, fishPost);
        dispatch({ type: 'UPDATE', payload: data})
    } catch (error) {
        console.log(error);
    }
}

export const deleteFishPost = (id) => async (dispatch) => {
    try {
        await api.deleteFishPost(id);

        dispatch({ type: 'DELETE', payload: id})
    } catch (error) {
        console.log(error)
    }
}
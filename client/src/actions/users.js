import * as api from "../api";

export const getUsers = () => async ( dispatch ) => {
    try {
        const { data } = await api.fetchUsers();
        dispatch({ type: 'FETCH_ALL_USERS', payload: data });
    } catch (error) {
        console.log(error)
    }
};

export const logoutUser = (id) => async ( dispatch ) => {
    try {
        const { data } = await api.logoutUser(id);
        dispatch({ type: 'LOGOUTED_USER', payload: data})
    } catch (error) {
        console.log(error)
    }
}
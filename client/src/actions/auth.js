import * as api from "../api";

export const signIn = (formData, navigate) => async(dispatch) => {
    try {
        const { data } = await api.signIn(formData);

        window.location.reload();
        dispatch({ type: 'AUTH', data });
        navigate('/');
    } catch (error) {
        console.log(error);
    }
}

export const signUp = (formData, navigate) =>async(dispatch) => {
    try {
        const { data } = await api.signUp(formData);
        window.location.reload();   

        dispatch({ type: 'AUTH', data});
        navigate('/');
    } catch (error) {
        console.log(error);
    }
}
const userReducer = (users = [], action ) => {
    switch (action.type) {
        case 'FETCH_ALL_USERS':
            return action.payload;
        case 'LOGOUTED_USER':
            return action.payload;
        default:
            return users;
    }
}

export default userReducer;
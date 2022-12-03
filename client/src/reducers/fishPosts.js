const fishPostReducer = (fishPosts = [], action ) => {
    switch ( action.type ) {
        case 'FETCH_ALL':
            return action.payload;
        case 'FETCH_BY_ID':
            return {fishPost: action.payload.fishPost};
        case 'FETCH_BY_SEARCH':
            return action.payload;
        case 'CREATE':
            return [ ...fishPosts, action.payload ];
        case 'UPDATE':
            return fishPosts.map((fishPost) => (fishPost.id === action.payload.id ? action.payload : fishPost));    
        case 'DELETE':
            return fishPosts.filter((fishPost) => fishPost.id !== action.payload);    
        default:
            return fishPosts;
    }
};

export default fishPostReducer;
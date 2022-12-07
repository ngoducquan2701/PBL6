export const rootReducer = (state, action) => {
    switch(action.type) {
        case 'login-pending':
            return {
                ...state,
                isFetching : true
            };
        case 'login-fullfill':
            return {
                ...state,
                user : action.payload
            };
        case 'login-error':
            return {
                ...state,
                error : true
            }
        case 'logout':
            return {
                ...state,
                user: null
            }
        default: return state;
    }
};
const initialState = {
    user: 'frederick',
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'SETUSER':
            return {
                ...state,
                user: action.payload
            };
        default: return state;
    };
};
export const reducerFactory = (initialState: any, handlers: any) => {
    return function (state = initialState, action: any) {
        if (handlers.hasOwnProperty(action.type)) {
            return handlers[action.type](state, action);
        } else {
            return state;
        }
    }
};
const initialState = {
    books: [
        {
            id: 0,
            title: 'C# for beginers'
        }
    ]
};

export default (state = initialState, action) => {

    switch (action.type) {
        case 'SET_BOOK':
            return {
                books: action.payload
            };
        case 'ADD_BOOK':
            return {
                books: [
                    ...state,
                    action.payload
                ]
            }
        default:
            return state;
    }
}
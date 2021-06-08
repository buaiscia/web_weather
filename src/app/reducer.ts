
export interface InitialState {
    location: string;
    weather: string;
    input: string;
    error: string;
}

interface InputAction {
    type: string
    payload: string
}

const initialState = {
    location: '',
    weather: '',
    input: '',
    error: ''
}

const reducer = (state = initialState, action: InputAction) => {
    switch (action.type) {
        case 'SET_INPUT':
            return { ...state, input: action.payload };
        case 'SET_LOCATION':
            return { ...state, location: action.payload };
        case 'SET_WEATHER':
            return { ...state, weather: action.payload };
        case 'SET_ERROR':
            return { ...state, error: action.payload };
        default:
            return state;
    }
};
export default reducer;

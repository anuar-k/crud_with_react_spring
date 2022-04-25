import {getAuthUserData} from "./authReducer";

const SET_DATA = "SET_DATA"

const initialState = {
    data: null
}

const footerReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_DATA: {
            return {
                ...state, data
            }
        }
        default:
            return state
    }
}

const getDataSuccess = () => ({type: SET_DATA, data});


export default footerReducer
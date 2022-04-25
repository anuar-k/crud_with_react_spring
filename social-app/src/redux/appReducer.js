import {getAuthUserData} from "./authReducer";

const SET_INITIALIZED = "SET_INITIALIZED"

const initialState = {
    initialized: false
}

const appReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case SET_INITIALIZED: {
            return {
                ...state, initialized: true
            }
        }
        default:
            return state
    }
}

const setInitializedSuccess = () => ({type: SET_INITIALIZED});

export const initializeApp = () => (dispatch: any) => {
    let promise = dispatch(getAuthUserData())
    Promise.all([promise]).then(()=>{
        dispatch(setInitializedSuccess())
    })
}

export default appReducer
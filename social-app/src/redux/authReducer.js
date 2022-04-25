import {authAPI, securityAPI,} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = "SET_USER_DATA"
const SET_CAPTCHA_URL_SUCCESS = "SET_CAPTCHA_URL_SUCCESS"
const TOKEN_SUCCESS = "TOKEN_SUCCESS"

const initialState = {
    userId: null,
    email: null,
    login: null,
    isFetching: false,
    isAuth: false,
    captchaUrl: null,
    token: null
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                isAuth: action.payload.isAuth,
                ...action.payload
            }
        case SET_CAPTCHA_URL_SUCCESS:
            return {
                ...state,
                captchaUrl: action.payload.captchaUrl
            }
        case TOKEN_SUCCESS:
            return {
                ...state, token: action.payload.token
            }
        default :
            return state
    }
}

export const setAuthUserData = (userId, email, login, isAuth) => ({
    type: SET_USER_DATA,
    payload: {userId, email, login, isAuth}
})


export const setCaptchaUrl = (captchaUrl) => ({
    type: SET_CAPTCHA_URL_SUCCESS,
    payload: {captchaUrl}
})

export const setToken = (token) => ({
    type: TOKEN_SUCCESS,
    payload: {token}
})

//thunk creator
export const getAuthUserData = () => async (dispatch) => {
    const response = await authAPI.me();
    if (response.data.resultCode === 0) {
        const {id, email, login} = response.data.data;
        dispatch(setAuthUserData(id, email, login, true))
    }
}
export const login = (email, password, rememberMe, captcha = null) => async (dispatch) => {
    const response = await authAPI.login(email, password, rememberMe, captcha);
    if (response.data.resultCode === 0) {
        dispatch(getAuthUserData())
    } else {
        if (response.data.resultCode === 10) dispatch(getCaptchaUrl())
        const message = response.data.messages.length > 0 ? response.data.messages[0] : "some error"
        dispatch(stopSubmit("login", {_error: message}))
    }
}

// export const login = (email, password, rememberMe, captcha = null) => async (dispatch) => {
//     const response = await authAPI.login(email , password);
//     dispatch(setToken(response.data.access_token))
// }

export const logout = () => async (dispatch) => {
    const response = await authAPI.logout()
    if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false))
    }
}

export const getCaptchaUrl = () => async (dispatch) => {
    const response = await securityAPI.getCaptchaURI()
    const captchaUrl = response.data.url
    dispatch(setCaptchaUrl(captchaUrl))
}

export default authReducer
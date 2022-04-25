import {profileAPI, usersAPI} from "../api/api";
import {stopSubmit} from "redux-form"

const ADD_POST = "ADD_POST"
const UPDATE_POST = "UPDATE_POST"
const SET_PROFILE = "SET_PROFILE"
const SET_STATUS = "SET_STATUS"
const SAVE_PHOTO_SUCCESS = "SAVE_PHOTO_SUCCESS"
const SAVE_PROFILE_INFO_SUCCESS = "SAVE_PROFILE_INFO_SUCCESS"

let initialState = {
    newPostText: "default text",
    profile: null,
    posts: [
        {
            id: 1,
            message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis dolorem eaque fuga itaque laborum mollitia, nisi optio quas rerum voluptate. Aut expedita maxime perspiciatis tempore. Aspernatur cum necessitatibus neque sit!\n",
            likesCount: 4
        },
        {
            id: 2,
            message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis dolorem eaque fuga itaque laborum mollitia, nisi optio quas rerum voluptate. Aut expedita maxime perspiciatis tempore. Aspernatur cum necessitatibus neque sit!\n",
            likesCount: 10
        },
        {
            id: 3,
            message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis dolorem eaque fuga itaque laborum mollitia, nisi optio quas rerum voluptate. Aut expedita maxime perspiciatis tempore. Aspernatur cum necessitatibus neque sit!\n",
            likesCount: 5
        },
        {
            id: 4,
            message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis dolorem eaque fuga itaque laborum mollitia, nisi optio quas rerum voluptate. Aut expedita maxime perspiciatis tempore. Aspernatur cum necessitatibus neque sit!\n",
            likesCount: 12
        },
        {
            id: 5,
            message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis dolorem eaque fuga itaque laborum mollitia, nisi optio quas rerum voluptate. Aut expedita maxime perspiciatis tempore. Aspernatur cum necessitatibus neque sit!\n",
            likesCount: 90
        }
    ],
    index: 10,
    status: null
};

const profilePageReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                posts: [...state.posts, {id: state.index, message: action.postBody, likesCount: 0}],
                index: ++state.index
            }
        case UPDATE_POST:
            return {
                ...state,
                newPostText: action.text
            }
        case SET_PROFILE:
            return {...state, profile: action.profile}
        case SET_STATUS: {
            return {...state, status: action.status}
        }
        case SAVE_PHOTO_SUCCESS: {
            return {...state, profile: {...state.profile, photos: action.photos}}
        }
        case SAVE_PROFILE_INFO_SUCCESS: {
            return {...state, profile: {...state.profile, ...action.profileInfo}}
        }
        default :
            return state
    }
}

export const updatePostActionCreator = (newText) => ({type: UPDATE_POST, text: newText})
export const addPostActionCreator = (postBody) => ({type: ADD_POST, postBody})
export const setProfile = (profile) => ({type: SET_PROFILE, profile})
export const setStatus = (status) => ({type: SET_STATUS, status})
export const savePhotoSuccess = (photos) => ({type: SAVE_PHOTO_SUCCESS, photos})
export const saveProfileSuccess = (profileInfo) => ({type: SAVE_PROFILE_INFO_SUCCESS, profileInfo})

//thunk for getProfile
export const getProfile = (userId) => async (dispatch) => {
    const response = await usersAPI.getProfile(userId);
    dispatch(setProfile(response.data))
}
//thunk for getStatus
export const getStatus = (userId) => async (dispatch) => {
    const response = await profileAPI.getStatus(userId)
    dispatch(setStatus(response.data))
}

//thunk for updateStatus
export const updateStatus = (status) => async (dispatch) => {
    const response = await profileAPI.updateStatus(status);
    if (response.data.resultCode === 0) {
        dispatch(setStatus(status))
    }
}

export const savePhoto = (file) => async (dispatch) => {
    const response = await profileAPI.savePhoto(file);
    if (response.data.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.data.photos))
    }
}

export const saveProfileInfo = (profileInfo) => async (dispatch, getState) => {
    const userId = getState().auth.userId;
    const response = await profileAPI.saveProfileInfo(profileInfo);
    if (response.data.resultCode === 0) {
        dispatch(getProfile(userId))
    } else {
        // const length = (response.data.messages[0].split("->")[1]).length - 1
        // const n = (response.data.messages[0].split("->")[1]).substring(0, length) + ""
        // dispatch(stopSubmit("profileInfo"), {
        //     "contacts.facebook": "errr"
        // });
        dispatch(stopSubmit("profileInfo"),  {_error: "dadadad"});
        return Promise.reject(response.data.messages[0])
        // console.log((response.data.messages[0].split("->")[1]).substring(0, length))
        // dispatch(stopSubmit("profileInfo"), {_error: (response.data.messages[0].split("->")[1]).substring(0, length)})
        // const message = response.data.messages.length > 0 ? response.data.messages[0] : "some error"
        // dispatch(stopSubmit("profileInfo", {_error: message}))
        // dispatch(stopSubmit("profileInfo"), {_error: response.data.messages[0]})
    }
}

export default profilePageReducer
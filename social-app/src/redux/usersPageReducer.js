import {usersAPI} from "../api/api";

const SET_USERS = "SET_USERS"
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE"
const SET_TOTAL_USER_COUNT = "SET_TOTAL_USER_COUNT"
const SET_IS_FETCHING = "SET_IS_FETCHING"
const TOGGLE_IS_FOLLOWING_PROGRESS = "TOGGLE_IS_FOLLOWING_PROGRESS"
const FOLLOW_UNFOLLOW_TOGGLE = "FOLLOW_UNFOLLOW_TOGGLE"

const initialState = {
    users: [],
    pageSize: 100,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
}

const usersPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW_UNFOLLOW_TOGGLE:{
            return {
                ...state,
                users: state.users.map(user => user.id === action.userId ? ({...user, followed: !user.followed}) : user)
            }
        }
        case SET_USERS:
            // return {...state, users: [...state.users, ...action.users]}
            return {...state, users: action.users}
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            }
        case SET_TOTAL_USER_COUNT:
            return {
                ...state,
                totalUsersCount: action.count
            }
        case SET_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }
        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }
        default:
            return state
    }
}

export const followUnfollowSuccess = (userId) => ({type: FOLLOW_UNFOLLOW_TOGGLE, userId})
export const setUsers = (users) => ({type: SET_USERS, users})
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})
export const setTotalUserCount = (count) => ({type: SET_TOTAL_USER_COUNT, count})
export const setIsFetching = (isFetching) => ({type: SET_IS_FETCHING, isFetching})
export const toggleFollowingInProgress = (isFetching, userId) => ({
    type: TOGGLE_IS_FOLLOWING_PROGRESS,
    isFetching,
    userId
})

// thunkCreator
export const getUsers = (currentPage, pageSize) => async (dispatch) => {
    dispatch(setIsFetching(true));
    const data = await usersAPI.getUsers(currentPage, pageSize);
    dispatch(setIsFetching(false));
    dispatch(setUsers(data.items));
    dispatch(setTotalUserCount(data.totalCount))
    dispatch(setCurrentPage(currentPage));
}
//other method for follow and unFollow thunk
export const followUnfollowFlow = async (dispatch, userId, apiMethod) => {
    dispatch(toggleFollowingInProgress(true, userId));
    const response = await apiMethod(userId);
    if (response.data.resultCode === 0) {
        dispatch(followUnfollowSuccess(userId));
    }
    dispatch(toggleFollowingInProgress(false, userId));
}
//thunk for follow
export const follow = (userId) => async (dispatch) => {
    await followUnfollowFlow(dispatch, userId, usersAPI.follow.bind(usersAPI) )
}
//thunk for unfollow
export const unFollow = (userId) => async (dispatch) => {
    await followUnfollowFlow(dispatch, userId, usersAPI.unFollow.bind(usersAPI))
}

export default usersPageReducer
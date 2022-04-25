import React from "react"
import {addPostActionCreator, updatePostActionCreator} from "../../../redux/profilePageReducer";
import MyPosts from "./MyPosts";
import {connect} from 'react-redux'

const mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        onPostChange: (text) => {
            let action = updatePostActionCreator(text)
            dispatch(action)
        },

        addPostHandler: (postBody) => {
            dispatch(addPostActionCreator(postBody));
            dispatch(updatePostActionCreator(''))
        }
    }
}

const MyPostContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);
export default MyPostContainer
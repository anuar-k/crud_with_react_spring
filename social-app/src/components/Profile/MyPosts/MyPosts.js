import React from "react"
import classes from "./MyPosts.module.css"
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";
import {required, maxLengthCreator} from "../../../util/validators";
import {Textarea} from "../../common/FormsControls/FormControls";
import Button from "../../common/Button/Button";

const maxLength10 = maxLengthCreator(10)
const AddPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field
                component={Textarea}
                name="postBody"
                placeholder={'enter message'}
                validate={[required, maxLength10]}
                cols="100" rows="2"
            />
            <Button>Добавить</Button>
        </form>
    )
}

const AddPostFormRedux = reduxForm({form: "post"})(AddPostForm)

const MyPost = ({posts, newPostText, onPostChange, addPostHandler}) => {
    // const newPostElement = React.createRef();
    const onSubmit = (data) => {
        addPostHandler(data.postBody)
    }
    let postElements = posts.map((item, index) => {
        return (
            <Post
                key={index * Math.random()}
                number={item.id}
                likeCount={item.likesCount}
                message={item.message}
            />
        )
    });
    return (
        <>
            <div className={classes.MyPosts}>
                My posts
                <AddPostFormRedux onSubmit={onSubmit}/>
                {/*<div>*/}
                {/*    <textarea name="postBody" id="a" cols="100" rows="2"*/}
                {/*              onChange={() => onPostChange(newPostElement.current.value)}*/}
                {/*              ref={newPostElement}*/}
                {/*              value={newPostText}*/}
                {/*    />*/}
                {/*    <button onClick={addPostHandler}>Добавить</button>*/}
                {/*</div>*/}
                {postElements}
            </div>
        </>
    )
}
export default MyPost
import React from "react"
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {
    return (
        <>
            <ProfileInfo
                isOwner={props.isOwner}
                {...props}/>
            <MyPostContainer {...props}/>
        </>
    )
}
export default Profile
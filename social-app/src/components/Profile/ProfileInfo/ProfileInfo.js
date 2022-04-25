import React, {useState} from "react"
import sea from "../Sea_panorama_-_panoramio.jpg"
import classes from "./ProfileInfo.module.css"
import PreLoader from "../../common/PreLoader";
import ProfileStatus from "./ProfileStatus";
import userPhoto from "../../../assets/images/user.png"
import Button from "../../common/Button/Button";
import ProfileDataReduxForm from "./ProfileDataForm";

const ProfileInfo = (props) => {
    const [editMode, setEditMode] = useState(false);

    if (!props.profile) {
        return <PreLoader/>
    }

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            props.savePhoto(e.target.files[0]);
        }
    }
    const onSubmit = (formData) => {
        props.saveProfileInfo(formData).then(
            () => setEditMode(false)
        );
    }
    return (
        <>
            <div className={classes.ProfileInfo}>

                <img className={classes.profileImage} src={sea} alt="sea"/> <br/>
                <div>
                    <div style={{display: "flex", justifyContent: "space-evenly"}}>
                        <div>
                               <img className={classes.userPhoto} src={props.profile.photos.large || userPhoto}
                                    alt="userPhoto"/>
                            {props.isOwner && <span>
                             {/*<input className={classes.fileInput} type="file" onChange={onMainPhotoSelected}/>*/}
                            </span>
                            } <br/>
                        </div>
                        <div style={{marginTop:20}}>
                            <ProfileStatus {...props} />
                            {editMode ?
                                <ProfileDataReduxForm initialValues={props.profile}
                                                      profile={props.profile}
                                                      onSubmit={onSubmit}
                                                      onMainPhotoSelected={onMainPhotoSelected}
                                />
                                : <ProfileData profile={props.profile}
                                               isOwner={props.isOwner}
                                               activateEditMode={() => setEditMode((true))}
                                />
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

const ProfileData = ({profile, isOwner, activateEditMode}) => {
    return <div style={{lineHeight: 1.7}}>
        <div style={{display: "flex"}}>
            <div style={{width: 480}}>
                <b>Full name:</b> {profile.fullName}<br/>
                <b> Looking for a job: </b> {profile.lookingForAJob ? 'yes' : 'no'}<br/>
                {
                    profile.lookingForAJob &&
                    <div><b>My professional skills:</b>{profile.lookingForAJobDescription}</div>
                }
                <b>About me:</b>
                {profile.aboutMe}
                <br/>
                <b>Contacts: </b>
                {Object.keys(profile.contacts)
                    .filter(key => profile.contacts[key] !== null && profile.contacts[key].trim() !== "")
                    .map(key =>
                        <Contact key={key + Math.random()}
                                 contactTitle={key}
                                 contactValue={profile.contacts[key]}
                        />
                    )}
            </div>
            <span style={{padding: 16}}> {isOwner && <Button onClick={activateEditMode}>edit</Button>}</span>
        </div>
    </div>
}
const Contact = ({contactTitle, contactValue}) => {
    return <div style={{paddingLeft: 15}}><b>{contactTitle}: </b> {contactValue}</div>
}
export default ProfileInfo
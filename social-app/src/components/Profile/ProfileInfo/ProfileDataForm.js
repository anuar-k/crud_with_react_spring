import React from "react";
import classes from "./ProfileInfo.module.css";
import {Field, reduxForm} from "redux-form";
import {Input, Textarea} from "../../common/FormsControls/FormControls";
import Button from "../../common/Button/Button";

const ProfileDataForm = ({profile, handleSubmit, error,onMainPhotoSelected}) => {
    return <form onSubmit={handleSubmit} style={{width: 550}}>
        {error && <span className={classes.error}>{error}</span>}
        <div style={{display: "flex"}}>
            <div>
                {profile.fullName}
                    <Field
                        // validate={[required]}
                        placeholder={"full name"}
                        name={"fullName"}
                        component={Input}
                    />
                <br/>
                Looking for a job
                <Field
                    // validate={[required]}
                    placeholder={"lookingForAJob"}
                    name={"lookingForAJob"}
                    component={Input}
                    type={'checkbox'}
                />
                <br/>
                My professional skills:
                <Field
                    // validate={[required]}
                    placeholder={"My professional skills"}
                    name={"lookingForAJobDescription"}
                    component={Textarea}
                />
                About me:
                <Field
                    // validate={[required]}
                    placeholder={"about me"}
                    name={"aboutMe"}
                    component={Textarea}
                />
                <div>Фото профиля:</div>
                <input type="file" onChange={onMainPhotoSelected}/>

                <Button>save</Button>
            </div>
            <div style={{marginLeft: 80}}>
                <b>Contacts:</b>
                {Object.keys(profile.contacts).map(key =>
                    <div key={key} className={classes.contact} style={{marginLeft: 20}}>
                        <b>{key}</b> <Field placeholder={key} component={Input} name={'contacts.' + key}/>
                        {error && <span className={classes.error}>{error}</span>}
                    </div>
                )}
            </div>
        </div>
    </form>
}

const ProfileDataReduxForm = reduxForm({form: "profileInfo"})(ProfileDataForm)

export default ProfileDataReduxForm
import React from "react"
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfile, getStatus, savePhoto, updateStatus, saveProfileInfo} from "../../redux/profilePageReducer";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component {
    refreshProfile() {
        let profileId = this.props.match.params.profileId
        if (!profileId) {
            profileId = this.props.authorizedUserId
            if (!profileId) {
                this.props.history.push("/news")
            }
        }
        this.props.getProfile(profileId);
        this.props.getStatus(profileId);
    }

    componentDidMount() {
        this.refreshProfile()
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.match.params.profileId !== prevProps.match.params.profileId)
            this.refreshProfile()
    }

    render() {
        return (
            <>
                <Profile isOwner={!this.props.match.params.profileId}
                         {...this.props}
                />
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        authorizedUserId: state.auth.userId
    }
}

export default compose(
    connect(mapStateToProps, {getProfile, getStatus, updateStatus, savePhoto, saveProfileInfo}),
    withAuthRedirect,
    withRouter)(ProfileContainer)
import React from "react";
import {connect} from "react-redux";
import {
    follow,
    unFollow,
    toggleFollowingInProgress,
    getUsers
} from "../../redux/usersPageReducer";
import Users from "./Users";
import PreLoader from "../common/PreLoader";

class UsersAPIComponent extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    onChangePage = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize);
    }

    render() {

        return (
            <>
                {
                    this.props.isFetching ? <PreLoader/> :
                        <Users
                            users={this.props.users}
                            currentPage={this.props.currentPage}
                            totalUsersCount={this.props.totalUsersCount}
                            pageSize={this.props.pageSize}
                            onChangePage={this.onChangePage}
                            setIsFetching={this.setIsFetching}
                            follow={this.props.follow}
                            unFollow={this.props.unFollow}
                            isFetching={this.props.isFetching}
                            followingInProgress={this.props.followingInProgress}
                        />
                }
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}
export default connect(mapStateToProps,
    {follow, unFollow, toggleFollowingInProgress, getUsers})(UsersAPIComponent);
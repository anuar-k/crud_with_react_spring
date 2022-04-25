import * as React from "react";
import classes from "./Users.module.css"
import User from "./User";
import Paginator from "../common/Paginator/Paginator";

const Users = (props) => {
    return (
        <>
            <Paginator  currentPage={props.currentPage}
                        onChangePage={props.onChangePage}
                        totalItemsCount={props.totalUsersCount}
                        pageSize={props.pageSize}
                        portionSize={23}
            />
            <div className={classes.Users}>
                {props.users.map(user =>
                    <User key={user.id} user={user}
                          followingInProgress={props.followingInProgress}
                          unFollow={props.unFollow}
                          follow={props.follow}
                    />)
                }
            </div>
        </>
    )
}

export default Users
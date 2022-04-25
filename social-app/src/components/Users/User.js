import React from "react";
import {NavLink} from "react-router-dom";
import classes from "./User.module.css"
import Button from "../common/Button/Button";

const User = ({user, ...props}) => {
    return (
        <div key={user.id + Math.random() * 10} className={classes.User}>
            <div>
                <div style={{display: "flex", justifyContent: "space-around"}} >
                    <NavLink to={"/profile/" + user.id}>
                        {user.photos.small === null
                            ? <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUhbcBoGQfshS-wrsGVe8egbkz1Ba_aNyHCQ&usqp=CAU"}
                            />
                            :
                            <img src={user.photos.small}/>
                        }
                    </NavLink>
                    {user.followed
                        ?
                        <Button disabled={props.followingInProgress.some(id => id === user.id)}
                                onClick={() => props.unFollow(user.id)}
                        > unFollow </Button>
                        :
                        <Button disabled={props.followingInProgress.some(id => id === user.id)}
                                onClick={() => props.follow(user.id)}
                        > follow</Button>
                    }
                </div>
                <div>
                    <span>{user.name}</span><br/>
                    <span>{user.status}</span>
                </div>
            </div>
        </div>
    )
}

export default User
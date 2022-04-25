import React from "react"
import classes from "./Header.module.css"
import {NavLink} from "react-router-dom";
import Button from "../common/Button/Button";

const Header = (props) => {
    return (
        <>
            <header className={classes.Header}>
                <NavLink to={"/"} exact>
                    <img src="https://cdn.logo.com/hotlink-ok/logo-social.png" alt="company"/>
                </NavLink>
                {props.isAuth
                    ? <div>

                        {props.login}
                        <Button onClick={props.logout} > logout</Button>
                        {/*<button onClick={() => props.logout()}>logout</button>*/}
                    </div>
                    : <NavLink to={"/login"}>Login</NavLink>}
            </header>
        </>
    )
}
export default Header
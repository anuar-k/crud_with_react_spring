import React, {Component} from "react";
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import {Redirect, Route, Switch, withRouter} from "react-router-dom"
import Footer from "./components/Footer/Footer";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {compose} from "redux";
import {connect} from "react-redux";
import {initializeApp} from "./redux/appReducer";
import PreLoader from "./components/common/PreLoader";

class App extends Component {
    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        if (this.props.initialized) {
           return <PreLoader />
        }
        return (
            <>
                <div className="container">
                    <div className="app-wrapper">
                        <HeaderContainer/>
                        <Navbar/>
                        <div className="app-wrapper-content">
                            <Switch>
                                <Route exact path={"/"} render={()=> <Redirect to={"/profile"} /> } />
                                <Route exact path="/profile/:profileId?" render={() => <ProfileContainer/>}/>
                                <Route path="/dialogs/" render={() => <DialogsContainer/>}/>
                                <Route path="/users/" render={() => <UsersContainer/>}/>
                                <Route path="/login/" render={() => <Login/>}/>
                                <Route path="*" render={() => <div>404 Not Found </div>}/>
                            </Switch>
                        </div>
                        <Footer/>
                    </div>
                </div>
            </>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        initialized: state.app.initialized
    }
}
export default compose(
    withRouter,
    connect(mapStateToProps, {initializeApp})
)(App);
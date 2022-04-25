import * as React from "react";
import {connect} from "react-redux";
import Dialogs from "./Dialogs";
import {sendMessageActionCreator, updateMessageActionCreator,} from "../../redux/dialogPageReducer";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

const mapStateToProps = (state) => {
    return {
        dialogs: state.dialogPage.dialogs
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        onChangeMessage: (message) => {
            dispatch(updateMessageActionCreator(message))
        },
        sendMessage: (newMassage, dialogId) => {
            dispatch(sendMessageActionCreator(newMassage, dialogId))
        }
    }
}
export default compose(
    withAuthRedirect,
    connect(mapStateToProps, mapDispatchToProps)
)(Dialogs)
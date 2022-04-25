import React from "react"
import classes from "./Message.module.css"
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../../common/FormsControls/FormControls";
import {required, maxLengthCreator} from "../../../util/validators";
import Button from "../../common/Button/Button";

const maxLength100 = maxLengthCreator(100)
const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field
                component={Textarea}
                name={"newMessageBody"}
                id="" cols="80" rows="2"
                placeholder="Введите сообщение"
                validate={[required, maxLength100]}
            />
            <Button>Отправить</Button>
        </form>
    )
}
const AddMessageFormRedux = reduxForm({form: "message"})(AddMessageForm)


const Message = ({messages, dialogId, onChangeMessage, sendMessage}) => {
    // const newMessage = React.createRef();

    const sendMessageHandler = (data) => {
        if (data.newMessageBody) {
            sendMessage(data.newMessageBody, dialogId - 1)
        }
    }
    // const sendMessageHandler = () => {
    //     if (newMessage.current.value) {
    //         sendMessage(data.newMessageBody, dialogId - 1)
    //         newMessage.current.value = ''
    //     }
    // }

    return (
        <div className={classes.Message}>
            {
                messages.map(message => {
                    const messageStyle = {'width': 15 * message.text.length}
                    if (message.sendUser === 1) {
                        return (
                            <div key={message.text.length + "_" + message.text}
                                 style={messageStyle}
                                 className={classes.my}>
                                <span>{message.text}</span>
                            </div>
                        )
                    } else {
                        return (
                            <div key={message.length + "_" + message.text}
                                 style={messageStyle}
                                 className={classes.red}>
                                <span> {message.text}</span>
                            </div>
                        )
                    }
                })
            }
            <AddMessageFormRedux onSubmit={sendMessageHandler}/>
        </div>
    )
}
export default Message
const SEND_MESSAGE = "SEND_MESSAGE"
const UPDATE_MESSAGE = "UPDATE_MESSAGE"

let initialState = {
    newMessage: '',
    newMessageIDSeq: 100,
    dialogs: [
        {
            id: 1, name: 'Dimych', messages: [
                {
                    messageId: 11, sendUser: 1, text: "reprehenderit ", timestamp: ""
                },
                {
                    messageId: 12, sendUser: 2, text: "reprehenderit velit vero. Culpa, natu", timestamp: ""
                },
                {
                    messageId: 14,
                    sendUser: 1,
                    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis dolorem eaque fuga itaque laborum mollitia, n",
                    timestamp: ""
                },
                {
                    messageId: 12,
                    sendUser: 2,
                    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis dolorem eaque fuga itaque laborum mollitia, n",
                    timestamp: ""
                },
                {
                    messageId: 13,
                    sendUser: 1,
                    text: "reprehenderit velit vero. Culpa, natus, quis!",
                    timestamp: ""
                },
            ]
        },
        {
            id: 2, name: 'Andrey', messages: [
                {
                    messageId: 21,
                    sendUser: 1,
                    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis dolorem eaque fuga itaque laborum mollitia, n",
                    timestamp: ""
                },
                {
                    messageId: 22, sendUser: 3, text: "Culpa, natus, quis!", timestamp: ""
                },
                {
                    messageId: 23,
                    sendUser: 3,
                    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis dolorem eaque fuga itaque laborum mollitia, n",
                    timestamp: ""
                },
                {
                    messageId: 24,
                    sendUser: 1,
                    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis dolorem eaque fuga itaque laborum mollitia, n",
                    timestamp: ""
                },
                {
                    messageId: 12,
                    sendUser: 2,
                    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis dolorem eaque fuga itaque laborum mollitia, n",
                    timestamp: ""
                },
                {
                    messageId: 13,
                    sendUser: 1,
                    text: "reprehenderit velit vero. Culpa, natus, quis!",
                    timestamp: ""
                },
            ]
        },
        {
            id: 3, name: 'Sveta', messages: [
                {
                    messageId: 12,
                    sendUser: 1,
                    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis dolorem eaque fuga itaque laborum mollitia, n",
                    timestamp: ""
                },
                {
                    messageId: 12,
                    sendUser: 2,
                    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis dolorem eaque fuga itaque laborum mollitia, n",
                    timestamp: ""
                },
                {
                    messageId: 13,
                    sendUser: 1,
                    text: "reprehenderit velit vero. Culpa, natus, quis!",
                    timestamp: ""
                },
                {
                    messageId: 23,
                    sendUser: 5,
                    text: "sunt? Dolore, dolores maiores maxime molestiae placeat quaerat",
                    timestamp: ""
                },
                {
                    messageId: 24, sendUser: 1, text: "reprehenderit", timestamp: ""
                },
                {
                    messageId: 12,
                    sendUser: 2,
                    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis dolorem eaque fuga itaque laborum mollitia, n",
                    timestamp: ""
                },
                {
                    messageId: 13,
                    sendUser: 1,
                    text: "reprehenderit velit vero. Culpa, natus, quis!",
                    timestamp: ""
                },
                {
                    messageId: 12,
                    sendUser: 2,
                    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis dolorem eaque fuga itaque laborum mollitia, n",
                    timestamp: ""
                },
                {
                    messageId: 13,
                    sendUser: 1,
                    text: "reprehenderit velit vero. Culpa, natus, quis!",
                    timestamp: ""
                },
                {
                    messageId: 21,
                    sendUser: 1,
                    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis dolorem eaque fuga itaque laborum mollitia, n",
                    timestamp: ""
                },
                {
                    messageId: 22, sendUser: 4, text: "molestiae", timestamp: ""
                },
                {
                    messageId: 23, sendUser: 4, text: "s dolorem eaque fuga itaq", timestamp: ""
                },
                {
                    messageId: 24, sendUser: 1, text: "s dolorem eaque fuga itaq", timestamp: ""
                },
            ]
        },
        {
            id: 4,
            name: 'Vika',
            messages: [
                {
                    messageId: 12, sendUser: 1, text: "s dolorem eaque fuga itaq", timestamp: ""
                },
                {
                    messageId: 13,
                    sendUser: 5,
                    text: "reprehenderit velit vero. Culpa, natus, quis!",
                    timestamp: ""
                },
                {
                    messageId: 21, sendUser: 1, text: "s dolorem eaque fuga itaq", timestamp: ""
                },
                {
                    messageId: 22, sendUser: 5, text: "s dolorem eaque fuga itaq", timestamp: ""
                },
                {
                    messageId: 23, sendUser: 1, text: "s dolorem eaque fuga itaq!", timestamp: ""
                },
                {
                    messageId: 24, sendUser: 5, text: "s dolorem eaque fuga itaq", timestamp: ""
                },
            ]
        },
        {
            id: 5,
            name: 'Valera',
            messages: [
                {
                    messageId: 21, sendUser: 1, text: "Lorem ipsum dolor? ", timestamp: ""
                },
                {
                    messageId: 22, sendUser: 5, text: "sit amet", timestamp: ""
                },
                {
                    messageId: 12, sendUser: 2, text: "s dolorem eaque fuga itaq", timestamp: ""
                },
                {
                    messageId: 13,
                    sendUser: 1,
                    text: "reprehenderit velit vero. Culpa, natus, quis!",
                    timestamp: ""
                },
                {
                    messageId: 23,
                    sendUser: 5,
                    text: "sunt? Dolore, dolores maiores maxime molestiae placeat quaerat",
                    timestamp: ""
                },
                {
                    messageId: 24, sendUser: 1, text: "reprehenderit", timestamp: ""
                },
                {
                    messageId: 12,
                    sendUser: 2,
                    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis dolorem eaque fuga itaque laborum mollitia, n",
                    timestamp: ""
                },
                {
                    messageId: 13,
                    sendUser: 1,
                    text: "reprehenderit velit vero. Culpa, natus, quis!",
                    timestamp: ""
                },
                {
                    messageId: 12,
                    sendUser: 2,
                    text: "elit. Corporis dolorem eaque fuga itaque laborum mollitia, ",
                    timestamp: ""
                },
                {
                    messageId: 13,
                    sendUser: 1,
                    text: "reprehenderit velit vero. Culpa, natus, quis!",
                    timestamp: ""
                },
                {
                    messageId: 23,
                    sendUser: 5,
                    text: "sunt? Dolore, dolores maiores maxime molestiae placeat quaerat",
                    timestamp: ""
                },
                {
                    messageId: 24, sendUser: 1, text: "reprehenderit", timestamp: ""
                },
                {
                    messageId: 12,
                    sendUser: 2,
                    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis dolorem eaque fuga itaque laborum mollitia, n",
                    timestamp: ""
                },
                {
                    messageId: 13,
                    sendUser: 1,
                    text: "reprehenderit velit vero. Culpa, natus, quis!",
                    timestamp: ""
                },
                {
                    messageId: 13,
                    sendUser: 1,
                    text: "reprehenderit velit vero. Culpa, natus, quis!",
                    timestamp: ""
                },
                {
                    messageId: 23,
                    sendUser: 5,
                    text: "sunt? Dolore, dolores maiores maxime molestiae placeat quaerat",
                    timestamp: ""
                },
                {
                    messageId: 24, sendUser: 1, text: "reprehenderit", timestamp: ""
                },
                {
                    messageId: 12,
                    sendUser: 2,
                    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis dolorem eaque fuga itaque laborum mollitia, n",
                    timestamp: ""
                },
                {
                    messageId: 13,
                    sendUser: 1,
                    text: "reprehenderit velit vero. Culpa, natus, quis!",
                    timestamp: ""
                },
                {
                    messageId: 12,
                    sendUser: 2,
                    text: "elit. Corporis dolorem eaque fuga itaque laborum mollitia, ",
                    timestamp: ""
                },
                {
                    messageId: 13,
                    sendUser: 1,
                    text: "reprehenderit velit vero. Culpa, natus, quis!",
                    timestamp: ""
                },
                {
                    messageId: 23,
                    sendUser: 5,
                    text: "sunt? Dolore, dolores maiores maxime molestiae placeat quaerat",
                    timestamp: ""
                },
                {
                    messageId: 24, sendUser: 1, text: "reprehenderit", timestamp: ""
                },
                {
                    messageId: 12,
                    sendUser: 2,
                    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis dolorem eaque fuga itaque laborum mollitia, n",
                    timestamp: ""
                },
                {
                    messageId: 13,
                    sendUser: 1,
                    text: "reprehenderit velit vero. Culpa, natus, quis!",
                    timestamp: ""
                },
                {
                    messageId: 13,
                    sendUser: 1,
                    text: "reprehenderit velit vero. Culpa, natus, quis!",
                    timestamp: ""
                },
                {
                    messageId: 23,
                    sendUser: 5,
                    text: "sunt? Dolore, dolores maiores maxime molestiae placeat quaerat",
                    timestamp: ""
                },
                {
                    messageId: 24, sendUser: 1, text: "reprehenderit", timestamp: ""
                },
                {
                    messageId: 12,
                    sendUser: 2,
                    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis dolorem eaque fuga itaque laborum mollitia, n",
                    timestamp: ""
                },
                {
                    messageId: 13,
                    sendUser: 1,
                    text: "reprehenderit velit vero. Culpa, natus, quis!",
                    timestamp: ""
                },
                {
                    messageId: 12,
                    sendUser: 2,
                    text: "elit. Corporis dolorem eaque fuga itaque laborum mollitia, ",
                    timestamp: ""
                },
                {
                    messageId: 13,
                    sendUser: 1,
                    text: "reprehenderit velit vero. Culpa, natus, quis!",
                    timestamp: ""
                },
                {
                    messageId: 23,
                    sendUser: 5,
                    text: "sunt? Dolore, dolores maiores maxime molestiae placeat quaerat",
                    timestamp: ""
                },
                {
                    messageId: 24, sendUser: 1, text: "reprehenderit", timestamp: ""
                },
                {
                    messageId: 12,
                    sendUser: 2,
                    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis dolorem eaque fuga itaque laborum mollitia, n",
                    timestamp: ""
                },
                {
                    messageId: 13,
                    sendUser: 1,
                    text: "reprehenderit velit vero. Culpa, natus, quis!",
                    timestamp: ""
                },
            ]
        }
    ],
}
const dialogPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_MESSAGE:
            return {
                ...state,
                newMessage: action.message
            }

        case SEND_MESSAGE: {
            const newState = {...state}
            newState.dialogs = [...state.dialogs]

            newState.dialogs[action.dialogId].messages.push({
                messageId: ++state.newMessageIDSeq,
                sendUser: action.sendUser,
                text: action.newMassage,
                timestamp: ""
            });
            return newState;
        }
        default:
            return state;
    }
}

export default dialogPageReducer

export const sendMessageActionCreator = (newMassage, dialogId) => {
    return {
        type: SEND_MESSAGE,
        newMassage: newMassage,
        dialogId: dialogId,
        sendUser: 1
    }
}
export const updateMessageActionCreator = (newMassage) => {
    return {
        type: UPDATE_MESSAGE,
        message: newMassage,
    }
}
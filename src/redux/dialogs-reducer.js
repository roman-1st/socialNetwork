const SEND_MESSAGE = "SEND-MESSAGE"
const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY"

let initialState = {
    dialogs: [
        { id: 1, name: 'Roman', },
        { id: 2, name: 'Anton', },
        { id: 3, name: 'Dmitry', },
        { id: 4, name: 'Sveta', },
        { id: 5, name: 'Viktor', },
        { id: 6, name: 'Valery', }
    ],
    messages: [
        { id: 1, message: 'Hi!', },
        { id: 2, message: 'How are you Bro?)', },
        { id: 3, message: 'Ало пидор!', },
        { id: 4, message: 'I am fine!', },
        { id: 5, message: 'I am not fine!', },
    ],
    newMessageBody: '',
}

const dialogsReducer = (state = initialState, action) => {
    switch ( action.type ) {
        case SEND_MESSAGE:
            let newMessage = {
                id: state.messages.at(-1).id + 1,
                message: state.newMessageBody
            }

            state.newMessageBody = ''
            state.messages.push(newMessage)
            console.log(state.messages);
            return state

        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body
            console.log(action.body);
            return state

        default:
            
            return state
    }
}

export default dialogsReducer

export const sendMessageCreator = () => ({
    type: SEND_MESSAGE,
})
export const updateNewMessageBodyCreator = (body) => ({
    type: UPDATE_NEW_MESSAGE_BODY,
    body: body,
})

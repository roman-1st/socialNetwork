const SEND_MESSAGE = "SEND-MESSAGE"
const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY"

const dialogsReducer = (state, action) => {
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
            console.log(state.body);
            return state

        default:
            console.log('Неправильно указан type of dispatch dialogs')
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

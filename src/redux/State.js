<<<<<<< Updated upstream
import dialogsReducer from "./dialogs-reducer"
import profileReducer from "./profile-reducer"
import sidebarReducer from "./sidebar-reducer"

let store = {
    _state: {
        profilePage: {
            posts: [
                { id: 1, message: 'Hi!', likesCount: 12, },
                { id: 2, message: 'How are you Bro?)', likesCount: 22, },
                { id: 3, message: "It's my first post", likesCount: 9, },
                { id: 4, message: "It's my second post", likesCount: 40, },
                { id: 5, message: "It's my thirsd post", likesCount: 2, },
                { id: 6, message: "I love JS", likesCount: 34, },
                { id: 7, message: "Dima vedet sebyz kak baba", likesCount: 77, },
            ],
            newPostText: '',
        },
        dialogsPage: {
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
        },
        sidebar: {
            friends: [
                { name: 'Anton', age: 30, },
                { name: 'Demitry', age: 30, },
                { name: 'Vlad', age: 30, },
                { name: 'Slava', age: 30, },
                { name: 'Artem', age: 30, },
                { name: 'Anna', age: 30, },
            ]
        }
=======
let rerenderEntireThree = () => {
    console.log('state was changed');
}

let state = {
    profilePage: {
        posts: [
            { id: 1, message: 'Hi!', likesCount: 12, },
            { id: 2, message: 'How are you Bro?)', likesCount: 22, },
            { id: 3, message: "It's my first post", likesCount: 9, },
            { id: 4, message: "It's my second post", likesCount: 40, },
            { id: 5, message: "It's my thirsd post", likesCount: 2, },
            { id: 6, message: "I love JS", likesCount: 34, },
            { id: 7, message: "Dima vedet sebyz kak baba", likesCount: 77, },
        ],
        newPostText: 'itkamasutra',
>>>>>>> Stashed changes
    },
    _callSubscriber() {
        console.log('State was changed');
    },

    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },

    dispatch( action ){ // type: "String"
        // debugger

        // profileReducer( this._state.profilePage, action )
        // dialogsReducer( this._state.dialogsPage, action )
        // sidebarReducer()

        this._state.profilePage = profileReducer( this._state.profilePage, action )
        this._state.dialogsPage = dialogsReducer( this._state.dialogsPage, action )
        this._state.sidebar = sidebarReducer ( this._state.sidebar, action)

<<<<<<< Updated upstream
        this._callSubscriber()
        // if (action.type === ADD_POST) {
        //     let newPost = {
        //         id: this._state.profilePage.posts.at(-1).id + 1,
        //         message: this._state.profilePage.newPostText,
        //         likesCount: 0,
        //     }
        //     this._state.profilePage.newPostText = ''
=======
export const addPost = () => {
    let newPost = {
        id: 8,
        message: state.profilePage.newPostText,
        likesCount: 0,
    }
    state.profilePage.newPostText = ''
>>>>>>> Stashed changes
    
        //     this._state.profilePage.posts.push(newPost)
        //     this._state._callSubscriber(this._state)
        //     console.log(this._state.profilePage.posts);

<<<<<<< Updated upstream
        // } else if (action.type === UPDATE_NEW_POST_TEXT) {
        //     this._state.profilePage.newPostText = action.newText
        //     this._state._callSubscriber()
        //     // console.log(this._state.profilePage.newPostText);

        // }  else if (action.type === SEND_MESSAGE) {
        //     let newMessage = {
        //         id: this._state.dialogsPage.messages.at(-1).id + 1,
        //         message: this._state.dialogsPage.newMessageBody
        //     }

        //     this._state.dialogsPage.newMessageBody = ''

        //     this._state.dialogsPage.messages.push(newMessage)
        //     this._state._callSubscriber(this._state)
        //     console.log(this._state.dialogsPage.messages);


        // } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
        //     this._state.dialogsPage.newMessageBody = action.body
        //     this._state._callSubscriber()}

        // else console.log('Неправильно указан type of dispatch')
    }, 
=======
export const updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText 
    rerenderEntireThree(state)
};

export const subscribe = ( observer ) => {
    rerenderEntireThree = observer
>>>>>>> Stashed changes
}

window.store = store

export default store


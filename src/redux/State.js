import { rerenderEntireThree } from '../render'

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
}

window.state = state

export let addPost = () => {
    let newPost = {
        id: 8,
        message: state.profilePage.newPostText,
        likesCount: 0,
    }
    state.profilePage.newPostText = ''
    
    state.profilePage.posts.push(newPost)
    rerenderEntireThree(state)
};

export let updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText 
    rerenderEntireThree(state)
}

export default state


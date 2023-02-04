const ADD_POST = "ADD-POST"
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT"

let initialState =  {
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
}

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: state.posts.at(-1).id + 1,
                message: state.newPostText,
                likesCount: 0,
            }

            state.posts.push(newPost)
            console.log(state.posts);
            state.newPostText = ''
            return state

        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText
            console.log(state.newPostText);
            // debugger
            return state


        default:
            
            return state;
    }
}

export default profileReducer

export const addPostActionCreator = () => ({ type: ADD_POST })
export const updateNewPostTextActionCreator = (text) => ({ 
    type: UPDATE_NEW_POST_TEXT, 
    newText: text 
})
const ADD_POST = "ADD-POST"
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT"

const profileReducer = (state, action) => {
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
            console.log('Неправильно указан type of dispatch')
            return state;
    }
}

export default profileReducer

export const addPostActionCreator = () => ({ type: ADD_POST })
export const updateNewPostTextActionCreator = (text) => ({ 
    type: UPDATE_NEW_POST_TEXT, 
    newText: text 
})
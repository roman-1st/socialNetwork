import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
<<<<<<< Updated upstream
=======
import { addPost, 
  subscribe, 
  updateNewPostText } from './redux/State';
import state from './redux/State';
>>>>>>> Stashed changes

import store from './redux/State';

const root = ReactDOM.createRoot(document.getElementById('root'));

const root = ReactDOM.createRoot(document.getElementById('root'));


<<<<<<< Updated upstream

export let rerenderEntireThree = () => {
    root.render(
        <React.StrictMode>
            <App
                state={store.getState()}
                dispatch={store.dispatch.bind(store)}
                
            />
        </React.StrictMode>
    );
}

rerenderEntireThree(store.getState());

store.subscribe(rerenderEntireThree)
=======
let rerenderEntireThree = (state) => {
  root.render(
    <React.StrictMode>
      <App 
      state={state} 
      addPost={addPost}
      updateNewPostText={updateNewPostText}
      />
    </React.StrictMode>
  );
}

rerenderEntireThree(state);
>>>>>>> Stashed changes


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

subscribe(rerenderEntireThree)
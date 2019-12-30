import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import {fetchUsers, fetchUser, RECEIVE_USER } from './actions/user_actions';
import fetchBooks from './actions/book_actions';
 
document.addEventListener('DOMContentLoaded', ()=>{
  let store;
  if (window.currentUser){
    const preloadedState = {
      session: {currentUser: window.currentUser.id },
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      }
    };
    store = configureStore(preloadedState);
    // delete window.currentUser;
  } else {
    store = configureStore();
  }
 
  const root = document.getElementById("root");
  
  window.getState = store.getState;
  window.fetchUsers = store.fetchUsers;
  window.fetchBooks = store.fetchBooks; 
  // window.fetchUser = fetchUser; 
  // window.dispatch = store.dispatch; 
  // window.receiveUser = receiveUser; 
  console.log('hope')
  ReactDOM.render(<Root store={store}/>, root);
})



// window.dispatch = store.dispatch; 
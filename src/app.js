"use strict"

import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';

 import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';

//IMPORT COMBINED REDUCERS
import reducers from './reducers/index';

//IMPORT ACTIONS
import {addToCart} from './actions/cartActions';
import {postBooks, deleteBooks, updateBooks} from './actions/booksActions';



//STEP1 create the store
const store = createStore(
  reducers,
  applyMiddleware(logger)
);

// store.subscribe(() => {
//   console.log('current state is: ', store.getState());
//   //console.log('current price', store.getState()[1].price);
// })

import BooksList from './components/pages/BooksList';

render(
  <Provider store={store}>
    <BooksList/>
  </Provider>, document.getElementById('app')
)


//STEP 2 create and dispatch actions
// store.dispatch(postBooks(
//
// ))

//DELETE a book
// store.dispatch(deleteBooks(
//   {id: 1}
// ))

//UPDATE a book
// store.dispatch(updateBooks(
//   {
//     id: 2,
//     title: 'Learn React in 1 month'
//   }
// ))

//-->> CART ACTIONS <<--
//ADD to cart
// store.dispatch(addToCart([{id: 1}]))

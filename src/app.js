"use strict"

import { createStore } from 'redux';

//step 3 define reducers
const reducer = (state={books:[]}, action) => {
  switch(action.type) {


    case "POST_BOOK":
    //let books = state.books.concat(action.payload);
    //return {books};
    return {books: [...state.books, ...action.payload]}
    break;


    case "DELETE_BOOK":
    const currentBookToDelete = [...state.books]
    const indexToDelete = currentBookToDelete.findIndex(
      function(book) {
        return book.id === action.payload.id;
      }
    )
    return {books: [...currentBookToDelete.slice(0, indexToDelete),
    ...currentBookToDelete.slice(indexToDelete + 1)]}
    break;


    case "UPDATE_BOOK":
    const currentBookToUpdate = [...state.books]
    const indexToUpdate = currentBookToUpdate.findIndex(
      function(book){
        return book.id === action.payload.id;
      }
    )
    const newBookToUpdate = {
      ...currentBookToUpdate[indexToUpdate],
      title: action.payload.title
    }
    //console.log("What is it newBookToUpdate ", newBookToUpdate);

    return {books: [...currentBookToUpdate.slice(0, indexToUpdate), newBookToUpdate,
    ...currentBookToUpdate.slice(indexToUpdate + 1)]}
    break;


  }
  return state
}

//STEP1 create the store
const store = createStore(reducer);

store.subscribe(() => {
  console.log('current state is: ', store.getState());
  //console.log('current price', store.getState()[1].price);
})


//STEP 2 create and dispatch actions
store.dispatch({
  type:"POST_BOOK",
  payload: [{
    id: 1,
    title: 'this is the book title',
    description: 'this is the book description',
    price: 33.33
  },
  {
    id: 2,
    title: 'this is the second book title',
    description: 'this is the second book description',
    price: 50
  }]
})

//DELETE a book
store.dispatch({
  type:"DELETE_BOOK",
  payload: {id: 1}
})


//UPDATE a book
store.dispatch({
  type: "UPDATE_BOOK",
  payload:{
    id: 2,
    title: 'Learn React in 1 months'
  }
})

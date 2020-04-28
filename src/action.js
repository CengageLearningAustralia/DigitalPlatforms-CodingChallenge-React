//Here we create and export our actions.

import axios from 'axios';

export const GET_BOOKS = 'GET_BOOKS'

export const getBooks = (books) => ({
    type: GET_BOOKS,
    payload: books,
})

//Using an async action here. To bind this we will need to use a redux middleware. I have used Thunk.
export function getBooksData() {
    return async dispatch => {
      axios.get('https://my-json-server.typicode.com/0plus1/CodingChallenge-react/books')
      .then(res => {
        const books = res.data;
        dispatch(getBooks(books));
      })
    }
}
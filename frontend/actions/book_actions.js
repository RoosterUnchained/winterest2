import * as APIUtil from '../util/book_api_util';
export const RECEIVE_BOOK = 'RECEIVE_BOOK';
export const RECEIVE_BOOKS = 'RECEIVE_BOOKS';
export const REMOVE_BOOK = 'REMOVE_BOOK';

const receiveBook = book => {
    // debugger
    return {
        type: RECEIVE_BOOK,
        book
    }
}

const receiveBooks = books => {
    // debugger
    return {
        type: RECEIVE_BOOKS,
        payload: {books}
    }
}

const removeBook = bookId => {
    return {
        type: REMOVE_BOOK,
        bookId
    }
}

export const fetchBooks = () => {
    return dispatch => {
        return APIUtil.fetchBooks().then(books => {
            // debugger
            return dispatch(receiveBooks(books));
        },
        res => console.log(res))
    }
}

export const fetchBook = (id) => {
    return dispatch => {
        return APIUtil.fetchBook(id).then(book => dispatch(receiveBook(book)))
    }
}

export const createBook = (book) => {
    return dispatch => {
        return APIUtil.createBook(book).then(book => dispatch(receiveBook(book)))
    }
}

export const updateBook = (book) => {
    // debugger
    return dispatch => {
        return APIUtil.updateBook(book).then(book => dispatch(receiveBook(book)))
    }
}


export const deleteBook = (id) => {
    // debugger
    return dispatch => {
        return APIUtil.deleteBook(id).then(book => dispatch(removeBook(book)))
    }
}
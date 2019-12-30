import React from 'react';
import BookCreateForm from './book_create_form';
import {connect} from 'react-redux';
import {createBook} from '../../actions/book_actions'
import { openModal, closeModal } from '../../actions/modal_actions'

export const mapStateToProps = state => {
    return {
    currentUser: state.entities.users[state.session.currentUser],
    book: {name:'', description: ''}
    }
}

export const mapDispatchToProps = dispatch => {
    return {
    createBook: book => dispatch(createBook(book)),
    openModal: () => dispatch(openModal()),
    closeModal: () => dispatch(closeModal())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BookCreateForm)

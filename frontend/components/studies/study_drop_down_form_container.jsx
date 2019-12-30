import React from 'react';
import { connect } from 'react-redux';
import { openModal } from '../../actions/modal_actions'
import StudyDropDown from './study_drop_down_form';
import {fetchBooks} from '../../actions/book_actions';
import { Route, Redirect, Link, HashRouter, Switch } from 'react-router-dom';


export const mapStateToProps = state => {
  // debugger
  return {
    currentUser: state.entities.users[state.session.currentUser],
    books: Object.values(state.entities.books)
  }
}

export const mapDispatchToProps = dispatch => {
  
  return {
    openModal: () => dispatch(openModal('createBook')),
    fetchBooks: () => dispatch(fetchBooks())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(StudyDropDown)
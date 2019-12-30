import React from 'react';
import { connect } from 'react-redux';
import { openModal } from '../../actions/modal_actions'
import UserDropDown from './user_drop_down';
import {createBook} from '../../actions/book_actions'

export const mapStateToProps = state => {

  return {
    currentUser: state.entities.users[state.session.currentUser],
    formType: 'createBook',

  }
}

export const mapDispatchToProps = dispatch => {
  
  return {
    openModal: () => dispatch(openModal('createBook')),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserDropDown)
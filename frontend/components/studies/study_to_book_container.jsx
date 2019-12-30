import { connect } from 'react-redux';
import { fetchStudy, updateStudy } from '../../actions/study_actions';
import { createBookStudy } from '../../actions/book_study_actions'
import StudyToBook from './study_to_book';
import { closeModal, openModal } from '../../actions/modal_actions';
import { withRouter, Route, Redirect, Link, HashRouter, Switch } from 'react-router-dom';

export const mapStateToProps = (state, ownProps) => {
  return {
    errors: state.errors.session,
    study: state.entities.studies[ownProps.studyId],
    user: state.entities.users[state.session.currentUser] || -0 
  } 
}

const mapDispatchToProps = dispatch => {
  return {
    createBookStudy: (book_study) => dispatch(createBookStudy(book_study)),
    fetchStudy: id => dispatch(fetchStudy(id)),
    closeModal: () => dispatch(closeModal()), 
    openModal: () => dispatch(openModal('badStudyBook'))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(StudyToBook)
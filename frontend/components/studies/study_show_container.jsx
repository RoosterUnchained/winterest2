// import {fetchBooks} '../../actions/book_actions';
// import {openModal, closeModal} from '../../actions/modal_actions'
import { connect } from 'react-redux';
import StudyShow from './study_show';
import { fetchStudy, updateBook } from '../../actions/study_actions';
import { withRouter } from 'react-router-dom';
import { openModal, closeModal } from '../../actions/modal_actions'


const mapStateToProps = (state, ownProps) => {
    let books = (Object.getOwnPropertyNames(state.entities.studies).length !==  0) ? state.entities.studies[ownProps.match.params.studyId].book_ids.map(bookId => state.entities.books[bookId]) : -0;
  return {
    study: state.entities.studies[ownProps.match.params.studyId],
    user: state.entities.users[state.session.currentUser] || -0, 
    books: books 
    }
} 
const mapDispatchToProps = dispatch => {
  // debugger
  return {
    fetchStudy: id => dispatch(fetchStudy(id)),
    openModal: id => dispatch(openModal('editStudy', id))
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(StudyShow))
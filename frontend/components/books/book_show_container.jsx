// import {fetchBooks} '../../actions/book_actions';
// import {openModal, closeModal} from '../../actions/modal_actions'
import { connect } from 'react-redux';
import BookShow from './book_show';
import {fetchBook, updateBook} from '../../actions/book_actions';
import { withRouter } from 'react-router-dom';
import { openModal, closeModal } from '../../actions/modal_actions';
import {fetchStudies} from '../../actions/study_actions'


const mapStateToProps = (state, ownProps) => {
    let studies = (Object.getOwnPropertyNames(state.entities.books).length !== 0) ? state.entities.books[ownProps.match.params.bookId].study_ids.map(studyId => state.entities.studies[studyId]) : [];
    return {
    book: state.entities.books[ownProps.match.params.bookId],
    studies: studies,
    user: state.entities.users[state.session.currentUser] || -0
}

}

const mapDispatchToProps = dispatch => {
    // debugger
return {
    fetchBook: id => dispatch(fetchBook(id)),
    fetchStudies: () => dispatch(fetchStudies())
}
    
} 

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BookShow))
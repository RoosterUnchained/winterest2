import {connect} from 'react-redux';
import BookIndex from './book_index';
import { fetchBook } from '../../actions/book_actions';
import {fetchBooks, updateBook } from '../../actions/book_actions';
import {openModal} from '../../actions/modal_actions';
import { fetchStudy, fetchStudies } from '../../actions/study_actions'
import { fetchBookStudies } from '../../actions/book_study_actions';
import { withRouter, Route, Redirect, Link, HashRouter, Switch } from 'react-router-dom';


const mapStateToProps = (state, ownProps) => {
   let books = Object.values(state.entities.books);
//    let currentUser = state.entities.users[state.session.currentUser] || -0;
   let currentUser = state.entities.users[ownProps.match.params.userId] || -0; 
//    let studies = Object.values(state.entities.studies)
let demoUser = state.entities.users[state.session.currentUser]
    return {
        currentUser, 
        books,
        demoUser
        
    } 
}

const mapDispatchToProps = dispatch => {
    return {
    fetchBook: id => dispatch(fetchBook(id)),
    fetchBooks: () => dispatch(fetchBooks()),
    openModal: () => dispatch(openModal('updateBook')),
    fetchStudy: id => dispatch(fetchStudy(id)),
    fetchStudies: () => dispatch(fetchStudies()),
    fetchbBookStudies: () => dispatch(fetchBookStudies())
    } 
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BookIndex))
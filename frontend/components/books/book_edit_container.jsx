// import BookEditForm from './book_edit_form';
// import {connect} from 'react-redux';
// import { updateBook, fetchBook } from '../../actions/book_actions';
// import { openModal, closeModal } from '../../actions/modal_actions';
// import { withRouter, Route, Redirect, Link, HashRouter, Switch } from 'react-router-dom';

 
// const mapStateToProps = (state,ownProps) => {
//     debugger
//     let book = state.entities.books[ownProps.match.params.bookId]
//     let currentUser = state.entities.users[state.session.id]
//     return {
//     currentUser, 
//     book 
//     }
// }

// const mapDispatchToProps = dispatch => {
//     return {
//     updateBook: book => dispatch(updateBook(book)),
//     fetchBook: id => dispatch(fetchBook(id)),
//     openModal: () => dispatch(openModal('updateBook')),
//     closeModal: () => dispatch(closeModal())
//     }
// }

// export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BookEditForm))
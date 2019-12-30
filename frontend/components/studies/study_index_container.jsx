import {connect} from 'react-redux';
import StudyIndex from './study_index';
import {fetchStudies, fetchStudy} from '../../actions/study_actions';
import { fetchBooks } from '../../actions/book_actions'

const mapStateToProps = state => {
    let studies = Object.values(state.entities.studies); 
    let books = Object.values(state.entities.books);
    let user = state.entities.users[state.session.currentUser] || -0;
    return {
        studies, books, user 
    }
}

const mapDispatchToProps = dispatch => {
    return{
        fetchStudy: id => dispatch(fetchStudy(id)),
        fetchStudies: () => dispatch(fetchStudies()), 
        fetchBooks: () => dispatch(fetchBooks())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(StudyIndex)
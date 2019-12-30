import StudyDeleteForm from './study_delete_form'
import { connect } from 'react-redux'
import { deleteStudy } from '../../actions/study_actions'
import {closeModal} from '../../actions/modal_actions'
import {Link, Route, HashRouter, Switch, withRouter} from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
    return {
        study: state.entities.pins[ownProps.studyId],
        user: state.entities.users[state.session.currentUser]
    }
}

const mapDispatchToProps = dispatch => {
    return {
        deleteStudy: id => dispatch(deleteStudy(id)),
        closeModal: () => dispatch(closeModal())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(StudyDeleteForm)
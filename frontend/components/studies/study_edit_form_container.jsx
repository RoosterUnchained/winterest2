import EditStudyForm from './study_edit_form';
import { connect } from 'react-redux';
import { openModal, closeModal } from '../../actions/modal_actions';
import { fetchStudy, updateStudy, deleteStudy } from '../../actions/study_actions'
import {Link, Route, HashRouter, Switch, withRouter} from 'react-router-dom';

export const mapStateToProps = (state, ownProps) => {
  // let user = state.entities.users[ownProps.match.params.userId] || -0 

  return {
    study: state.entities.studies[ownProps.studyId],
    user: state.entities.users[state.session.currentUser] || -0
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateStudy: (payload) => dispatch(updateStudy(payload)),
    deleteStudy: id => dispatch(deleteStudy(id)),
    fetchStudy: id => dispatch(fetchStudy(id)),
    closeModal: () => dispatch(closeModal()),
    openModal: (id) => dispatch(openModal('deleteStudy', id)),
    openModal2: () => dispatch(openModal('badStudyBook'))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditStudyForm)
import React from 'react';
import {connect} from 'react-redux';
import {login, clearSessionErrors } from '../../actions/session_actions';
import SessionForm from './sessionform';
import { openModal, closeModal } from '../../actions/modal_actions'

export const mapStateToProps = (state) => {
    return {
        errors: state.errors.session,
        formType: 'login',
        loggedin: Boolean(state.session.currentUser), 
        demouser: { email: 'baddude@aol.com', password: 'siqqpuppy123' } 
    }
}

export const mapDispatchToProps = (dispatch) => {
    return {
        clearSessionErrors: () => dispatch(clearSessionErrors()),
        processForm: (user) => dispatch(login(user)),
        otherForm: ()=> dispatch(openModal('signup')),
        closeModal: () => {
            return dispatch(closeModal())
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm)
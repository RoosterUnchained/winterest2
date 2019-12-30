import React from 'react';

class BadStudyBook extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
    return (
        <div className="badstudybook">
            <div id="badstudybook-h">
                Saved!
            </div>
            {/* <button id="badstudybook-b" onClick={this.props.closeModal}>back to studies</button> */}
        </div>
        )
    } 
}


import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions';
import { withRouter } from 'react-router-dom';

export const mapStateToProps = state => {
    return {
        currentUser: state.entities.users[state.session.currentUser]
    }
}

export const mapDispatchToProps = dispatch => {
    return {
        closeModal: () => dispatch(closeModal())
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BadStudyBook))
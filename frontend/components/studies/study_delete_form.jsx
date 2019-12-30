import React from 'react';
import {Link, Route, HashRouter, Switch, withRouter} from 'react-router-dom';

class StudyDeleteForm extends React.Component {
    constructor(props){
        super(props)
        this.handleDelete = this.handleDelete.bind(this)
        this.state = {...this.props.study}
    }



handleDelete(e){
    this.props.deleteStudy(this.state.id)
    .then(this.props.closeModal(),
    this.props.history.push(`/users/${this.props.user.id}/studies`));
}

render(){
    return(
        <div>
            <form className="deleteStudy">
            <div className="deleteStudy-h">Are you sure?</div>
            <div className="deleteStudy-sub-h">Once you delete a study, you can't undo it!</div>
            <div className="delete-buttons">
            <button id="deleteCancel" onClick={this.props.closeModal}>Cancel</button>
            <button id="deleteSubmit" onClick={this.handleDelete}>Delete Study</button>
            </div>
            </form>
        </div>
    )
}


}

export default withRouter(StudyDeleteForm)
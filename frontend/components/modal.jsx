import React from 'react';
import ui_reducer from '../reducers/ui_reducer';
import { closeModal } from '../actions/modal_actions';
import { connect } from 'react-redux';
import LoginContainer from '../components/session/login_container';
import SignupContainer from '../components/session/signup_container';
import BookCreateFormContainer from '../components/books/book_create_form_container';
import StudyEditFormContainer from '../components/studies/study_edit_form_container';
import BookEditFormContainer from '../components/books/book_edit_container';
import StudyToBookContainer from '../components/studies/study_to_book_container';
import StudyDeleteContainer from '../components/studies/study_delete_container';
import BadStudyBook from '../components/studies/bad_study_book';

class Modal extends React.Component { 
constructor (props) {
  super(props)
}
 render () {
   const modal = this.props.modal
  if (!modal) {
    return null;
  }
  let component;
  // 
  switch (modal.type) {
    case 'login':
      // 
      component = <LoginContainer />;
      break;
    case 'signup':
      // 
      component = <SignupContainer />;
      break;
    case 'createBook':
      // 
      component = <BookCreateFormContainer/>;
      break;
    case 'updateBook':
      component = <BookEditFormContainer/>;
      break;  
    case 'saveStudy':
      component = <SaveStudyFormContainer/>;  
      break; 
    case 'saveStudyToBook':
      
      component = <StudyToBookContainer studyId={modal.props}/>; 
      break; 
    case 'editStudy':
      component = <StudyEditFormContainer studyId={modal.props}/>;
      break; 
    case 'deleteStudy':
      component = <StudyDeleteContainer studyId={modal.props}/>;
      break; 
    case 'badStudyBook':
      component = <BadStudyBook/>
      break; 
    default:
      return null;
  }
  return (
    <div id="modal-background" onClick={(e) => {
      
      e.stopPropagation();
      this.props.closeModal(); }}>
      <div className="modal-child" onClick={e => e.stopPropagation()}>
        { component }
      </div>
    </div>
  );
}
}

const mapStateToProps = state => {
  // 
  return {
    modal: state.ui.modal
  };
};

const mapDispatchToProps = dispatch => {
  // 
  return {
    closeModal: () => {
      //  
      return dispatch(closeModal())
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);

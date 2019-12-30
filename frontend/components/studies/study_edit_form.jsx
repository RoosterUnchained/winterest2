import React from 'react';
import {Link, Route, HashRouter, Switch, withRouter} from 'react-router-dom';
import StudyBookContainer from './study_to_book_container';
import StudyDropDownContainer from './study_drop_down_form_container';

class EditStudyForm extends React.Component {
  constructor(props){
    super(props)
    const {study} = this.props; 
    this.state = {
      study: {
        id: study.id,
        book_id: study.book_id, 
        name: study.name,
        link_url: study.link_url || '',
        photoUrl: study.photoUrl, 
      }
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.chooseBook = this.chooseBook.bind(this);
    this.sendToBadStudyBook = this.sendToBadStudyBook.bind(this)
  }


  chooseBook(bookId) {
    this.setState({ bookId })

  }

  componentDidMount() {
    this.props.fetchStudy(this.props.study.id)
  }

 sendToBadStudyBook(){
    this.props.openModal2(),
    setTimeout(this.props.closeModal, 1200)
  }

handleSubmit(e){
  debugger
  e.preventDefault();
  let payload = {study: this.state.study, bookId: this.state.bookId}
  this.props.updateStudy(payload).then(()=> this.props.closeModal())
  .then(()=>this.sendToBadStudyBook())
}

  handleInput(field) {
    return (e) => {
      this.setState({ study: {...this.state.study, [field]: e.target.value} })
    }
  }

  handleCancel(e) {
    e.preventDefault();
    this.props.closeModal()
  }

  // handleDelete(e){
  //   debugger
  //   e.preventDefault();
  //   this.props.deleteStudy(this.state.study.id)
  //   .then(this.props.closeModal())
  //   .then(()=> this.props.history.push(`/users/${this.props.user.id}/studies`));
  // }

  handleDelete(e){
    this.props.openModal(this.state.study.id)
  }

  render(){
    const {study} = this.state;
    if (study) {
    return(
      <form className="edit-study">
        <div id="edit-study-header">Edit this Study</div> 
        <div className="edit-cancel" onClick={this.props.closeModal}>X</div>
        <div className="edit-study-top">
           {/* <div id="study-dd-e"> */}
              <div className="edit-category edit-category-b">Book</div> 
              <StudyDropDownContainer version={"edit"} history={this.props.history.location.pathname.split('/').slice(this.props.history.location.pathname.split('/').length - 1) } chooseBook={this.chooseBook}/> 
           {/* </div> */}
           <img id="edit-photo" src={this.state.study.photoUrl} alt=""/>
           </div>
        <label>
          <div className="edit-title">
          <div className="edit-category edit-category-t">Title</div>
          <input className="edit-name edit-name-title" type="text" value={this.state.study.name} onChange={this.handleInput('name')}/>
         </div>
        </label>
        <label>
        <div className="edit-title">
          <div className="edit-category">Description</div>
           <input className="edit-name edit-name-description" type="text" value={this.state.study.link_url} onChange={this.handleInput('link_url')} />
           </div>
        </label>
        <div className="study-edit-buttons">
            <button className="study-edit-button-1" onClick={this.handleDelete}>Delete</button>
            <button className="hiddenstudy"></button>
            
              <button className="study-edit-button-1" onClick={this.handleCancel}>Cancel</button>
               
               
                <button className="study-edit-button" onClick={this.handleSubmit}>Save</button>
           </div>
      </form>
           
    )

  }
    else {
      return <div></div>
    }
  } 
}

export default withRouter(EditStudyForm)
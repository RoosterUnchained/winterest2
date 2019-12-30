import React from 'react';
import { Link, Route, HashRouter, Switch, withRouter } from 'react-router-dom';
import StudyDropDownContainer from './study_drop_down_form_container';


class StudyToBook extends React.Component {
  constructor(props) {

    super(props);

    // console.log(this.props.currentUser)
    this.state = { ...this.props.study, alert: false };
    debugger
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    // this.handleFile = this.handleFile.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.chooseBook = this.chooseBook.bind(this);
    this.catchErrors = this.catchErrors.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.sendToBadStudyBook = this.sendToBadStudyBook.bind(this);
    this.sendToStudies = this.sendToStudies.bind(this)
  }

  handleInput(field) {
    return (e) => {
      this.setState({ [field]: e.target.value })
    };
  }

  // componentDidMount(){
  //   this.props.fetchStudy(this.props.study.id)
  // }

  chooseBook(bookId) {
    this.setState({ bookId })

  }

  sendToBadStudyBook(){
    this.props.openModal('badStudyBook'),
    setTimeout(this.props.closeModal, 1500)
  }

  sendToStudies(){
    this.props.history.push(`/users/${this.props.user.id}/studies`)
  }

  catchErrors(){
    if (this.props.errors.length === 0) {
      debugger 
    this.sendToBadStudyBook()
   }
   else {
      this.sendToBadStudyBook()
   } 
  }

  closeModal(){
    debugger
    this.catchErrors()
    // this.props.closeModal()
    this.props.history.push(`/users/${this.props.user.id}/studies`)
  }

  handleSubmit(e) {
    debugger
    e.preventDefault();
    let book_study = {study_id: this.props.studyId, book_id: this.state.bookId} 
    debugger
    this.props.createBookStudy(book_study).then(
      () => this.closeModal(),
      () => this.closeModal()
    )
 

    if (this.props.history.location.pathname.split('/').length > 4) {
      debugger
      this.props.history.push(`/users/${this.props.user.id}/studies`)
      
    }
  } 

  // handleFile(e) {

  //   const reader = new FileReader();
  //   const file = e.currentTarget.files[0];
  //   reader.onloadend = () => {
  //     this.setState({ photoUrl: reader.result, photoFile: file });
  //   };
  //   if (file) {
  //     reader.readAsDataURL(file);
  //   } else {
  //     this.setState({ photoUrl: "", photoFile: null });
  //   }
  // }


  handleCancel(e) {
    e.preventDefault();
    this.props.closeModal;
  }


  render() {
    return (
      <div>
        <form className="save-form">
          {/* <div className="box"> */}
          <div id="studybook-title"> Choose Book </div>
          <div id="studybook-cancel" onClick={this.props.closeModal}>X</div>
    
            <div className="save-form-header">
              <div id="save-form-text">Select Book </div>
              <StudyDropDownContainer version={"studybook"} history={this.props.history.location.pathname.split('/').slice(this.props.history.location.pathname.split('/').length - 1) } chooseBook={this.chooseBook} />
            </div>

            <div className="save-form-bottom">
            <img className="grid-item-pb" src={this.props.study.photoUrl} id="save-pic" alt="" />  
            <button className="study-button" onClick={this.handleSubmit}>Save</button>
            </div>
            {/* </div> */}
        </form>
      </div>
    )
  }

}

export default withRouter(StudyToBook);
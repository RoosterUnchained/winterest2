import React from 'react';
import UserShowContainer from '../../components/users/user_showpage_container'
import {Link} from 'react-router-dom'
import StudyIndexItem from '../studies/study_index_item'

class BookShow extends React.Component {
  constructor(props){
    super(props);
    this.state = { hoveredStudyId: null }
    this.setHoveredStudyId = this.setHoveredStudyId.bind(this)
  }

componentDidMount(){
  this.props.fetchBook(this.props.match.params.bookId), 
  this.props.fetchStudies()
}

setHoveredStudyId(id){
  this.setState({hoveredStudyId: id})
}

render(){
  // debugger
  // if (this.props.book === undefined) {
  //   debugger
  //   return null
  // }
  // if(this.props.book.studyPhotos === undefined){
  //   debugger
  //   return null 
  // }
  // let arr = this.props.book.studyPhotos.map(studyPhoto => {
  //   // debugger
  //   return <img className="book-show-item" src={studyPhoto} alt="" />
  //   }) 
  if (this.props.book === undefined) {
    return null
  }
 let array; 
  if (this.props.studies.length === 0 || this.props.studies[0] === undefined) {
    array = <div></div>
  }

   else {
  array = this.props.studies.map(study => {
    // debugger
    return <StudyIndexItem study={study} key={study.id} setHoveredStudyId={this.setHoveredStudyId} hoveredStudyId={this.state.hoveredStudyId}/>
    // return <Link to={`/users/${this.props.user.id}/studies/${study.id}`}><img className="book-show-item" src={study.photoUrl} alt="" /></Link>
  }) 
} 

 return  (
   <div>
     <UserShowContainer /> 
     <ul>
     <div className="book-show-header-container">
          <div className="book-show-header">{this.props.book.name}</div>
          {this.props.book.study_ids.length} <span> Studies </span>
      </div>
      <div className="book-show-pics">
    
      {array}
      </div>
    </ul>
    </div>
  )
 } 
}

export default BookShow

//here i want collection of books that are each grids with tiny versions of their studies inside of them?
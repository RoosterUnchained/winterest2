//here i want each book Item to be a collection of 6 of the images it has in a tiny grid

import React from 'react';
import { withRouter } from 'react-router-dom'
const BookIndexItem = props => {
  // let studiesArr; 
  // if(props.studyIds.length > 0){
  //     studiesArr = props.studyIds.map(studyId => {
  //     return <img src="" alt=""/>
  //     fetchStudy(studyId).photoUrl 
  // })
  // }
  // else {
  //   return ''
  // }
  //let arr = Array.from(props.fetchStudies().filter(study => props.studyIds.includes(study.id)) )
  if(props.book.studyPhotos === undefined){
    return null 
  }
  let arr = props.book.studyPhotos.map((studyPhoto, i) => {
    // debugger
    return <img key={i} className="index-list-item" src={studyPhoto} alt="" />
    }) 

   const sendToBookShow = e => {
        e.preventDefault();
        props.history.push(`/users/${props.currentUser.id}/books/${props.book.id}`)
    }

    const openModal = () => {
      props.openModal()
    }

  return (
  
    
      <div className="books-total">
              <div onClick={sendToBookShow} className="books-index-item">
                  {arr.slice(0,4)}
                </div>
              <div className="bi-title">{props.book.name}</div>
              <div className="bi-title-sub">
              {props.book.study_ids.length} <span> Studies </span>
           </div>
              <br/> 
          {/* <img className="showpage-pencil" src={window.pencil} alt="" onClick={openModal}/> */}
        </div>


  ) 
}
export default withRouter(BookIndexItem);



//what needs to be here besides the actual study itself 

import React from 'react';
import { withRouter } from 'react-router-dom';
import StudyBookContainer from './study_to_book_container'

class StudyShow extends React.Component {
  constructor(props){
    super(props)
    this.sendToStudies = this.sendToStudies.bind(this)
  }

  componentDidMount(){
    this.props.fetchStudy(this.props.match.params.studyId) 
    window.scrollTo(0,0)
  }

  sendToStudies(){
    this.props.history.push(`/users/${this.props.user.id}/studies`)
  }
  


  render(){

    if (this.props.study === undefined) {
      debugger
      return null
    }
    if(this.props.study.photoUrl === undefined){
      debugger
      return null 
    }


  //   if (this.props.books === undefined) {
  //     return null
  //   }
  // //   else { 
     
  // // }
  //   let arr2 = [];
  //   let arr = this.props.books.forEach(book => {
  //     if (!arr2.includes(book)){
  //       arr2.push(book)
  //     }
  //   });

  //    const arr3 = arr2.map(book => {
  //     return <li>{book.name}</li>
  //   }) 
  

    //   if (this.props.books.name === undefined) {
    //     return null
    //   }
    //   else { 

    // } 
    //WORKING
    // let arr2 = []

    let arr = this.props.books.map(book => {
      return book ? <li>{book.name}</li> : null 
    }) 

  //  const arrfill = () => {
  //  for (let i = 0; i < arr.length; i++){
  //    if (!arr2.includes(arr[i])){
  //      arr2.push(arr[i])
  //     } 
  //   }

  //   return arr2
  // } 
  // arrfill()
  //END

    // let arr3 = []
    // let arr = this.props.books.forEach(book => {
    //    arr3.push(book)
    // })

    // arr3.map(book =>
    //   {
    //     return <li>{book.name}</li>
    //   })


    return(


      <div>
        <div className="study-show-big">
        <img onClick={this.sendToStudies} id="arrow" src={window.arrow}></img>
        <img id="study-edit" src={window.pencil} onClick={()=> {this.props.openModal(this.props.study.id)}} alt=""/>
       
        <div id="study-name">{this.props.study.name}</div>
        <div id="study-description">{this.props.study.link_url}</div>
        <img id="study-photo" src={this.props.study.photoUrl} alt=""/>
        {/* <div id="study-dd">
          <StudyBookContainer studyId={this.props.study.id}/> 
          </div> */}
          
          {/* <div id="study-user">{this.props.user.f_name ? 'uploaded by ' + this.props.user.f_name + " " + this.props.user.l_name : null } </div> */}
          <div id="study-books-title">Saved books:</div>
          <div id="study-books">{this.props.books === undefined ?  null : arr }</div>
      </div>
      </div>
    )
  }

}

export default withRouter(StudyShow)
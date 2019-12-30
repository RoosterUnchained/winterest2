// import React from 'react';
// import {Link, Route, HashRouter, Switch, withRouter} from 'react-router-dom';

// class BookEditForm extends React.Component {
//     constructor(props){
//         super(props)
//         this.handleSubmit = this.handleSubmit.bind(this);
//         this.handleCancel = this.handleCancel.bind(this);
//         this.handleInput = this.handleInput.bind(this);
//         this.state = this.props.book 
//     }

// componentDidMount(){
//     this.props.fetchBook(this.props.match.params.bookId) //there is no bookId here
// }

// handleInput(field){
//     return(e) =>{
//         this.setState = ({[field]: e.target.value})
//     }
// }

// handleSubmit(e){
//     e.preventDefault();
//     this.props.updateBook(this.state)
//         .then(() => this.props.closeModal())
// }

// handleCancel(e){
//     e.preventDefault();
//     this.props.closeModal
// }


// render(){
//     return(
//         <div className="edit-book-form">
//          <form id="bookform">
//             <div>Create Book</div>
//             <label>
//                 Name 
//                 <input type="text" placeholder="test" value={this.state.name} onChange={this.handleInput('name')}/>
//             </label>
//             <label>
//                 Description 
//                 <input type="text" placeholder="What's your book about?" value={this.state.description} onChange={this.handleInput('description')}/>
//             </label>
//             <button onClick={this.handleCancel}>Cancel</button>
//             <button onClick={this.handleSubmit}>Save</button>
//             </form>
//         </div>
//     )
// }

// }

// export default BookEditForm
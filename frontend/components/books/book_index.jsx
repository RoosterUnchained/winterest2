
import React from 'react';
import BookIndexItem from './book_index_item';
import { withRouter } from 'react-router-dom';
// import BookShowContainer from './book_show_container'
import UserShowContainer from '../../components/users/user_showpage_container'

class BookIndex extends React.Component {
    constructor(props){
        super(props)
        // this.sendToBookShow = this.sendToBookShow.bind(this)
    }

componentDidMount(){
    this.props.fetchBooks();
    this.props.fetchStudies();
}

    // sendToBookShow(e, book) {
    //     e.preventDefault();
    //     this.props.history.push(`/users/${this.props.currentUser.id}/${book.id}`)
    // }

    componentDidUpdate(prevProps){
        if (prevProps.books.length !== this.props.books.length){
            this.props.fetchBooks();
        }
    }


render(){
    
    let books = this.props.books.map(book=> {
        if(this.props.demoUser === this.props.currentUser) {
            return <BookIndexItem className="bi" book={book} key={book.id} currentUser={this.props.currentUser} openModal={this.props.openModal}/>
        } 
    })
    return(
        <div>
            <UserShowContainer/> 
            <ul>
               
                <div className="book-index">

                {books}
                {/* <BookShowContainer/> */}
                </div>
            </ul>
        </div>
    )


}

}

export default withRouter(BookIndex);
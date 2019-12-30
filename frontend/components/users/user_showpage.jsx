import React from 'react';
import NavBarContainer from '../navbar/nav_bar_container';
import {Link, Route, HashRouter, Switch, withRouter} from 'react-router-dom';
import UserDropDownContainer from './user_drop_down_container';
import BookIndexContainer from '../books/book_index_container'; 
import StudiesIndexContainer from '../studies/study_index_container';


class UserShowPage extends React.Component {
    constructor(props){
        
        super(props)
        this.sendToEdit = this.sendToEdit.bind(this);
        this.sendToBooks = this.sendToBooks.bind(this);
        this.sendToStudies = this.sendToStudies.bind(this);
        this.sendToReaders = this.sendToReaders.bind(this);
        this.sendToReading = this.sendToReading.bind(this);
        this.state = this.props.user 
    }

componentDidMount(){
    
    this.props.fetchUsers()
    // this.props.fetchUser(this.props.match.params.userId)
   
}

sendToEdit(e){
    e.preventDefault();
    this.props.history.push(`/users/${this.props.user.id}/edit`)
}

    sendToBooks(e) {
        
        // e.preventDefault();
        this.props.history.push(`/users/${this.props.user.id}/books`)
    }

    sendToStudies(e) {
        // e.preventDefault();
        this.props.history.push(`/users/${this.props.user.id}/studies`)
    }

    sendToReaders(){
        this.props.history.push(`/users/${this.props.user.id}/readers`)
    }

    sendToReading(){
        this.props.history.push(`/users/${this.props.user.id}/reading`)
    }


render(){
    if(this.props.user === undefined){
        return null 
    }

    // let path = this.props.history.location.pathname.split('/').slice(this.props.history.location.pathname.split.length + 1).toString();
return(
    <div>
        <div className="showpage">
        <div className="showpage-clickable">
            <UserDropDownContainer />
            
            <Link to={`/users/${this.props.user.id}/edit`}>
                <img className="showpage-pencil" src={window.pencil} />
            </Link>
        </div>   
            <h1 id="showpage-header">{this.props.user.f_name} <span>   </span>{ this.props.user.l_name}</h1>
            <div id="s-follows">
            <div className="showpage-follows" onClick={this.sendToFollowers}>followers · </div> &nbsp; <div className="showpage-follows2" onClick={this.sendToFollowing}> following</div>
            </div>
            <div id="showpage-description">{this.props.user.location ? this.props.user.location + " · " + this.props.user.description : ''}</div>
            {this.props.user.photoUrl !== "" ? 
                 <div className="showpage-image2">
                    <img id="user-pic" src={this.props.user.photoUrl}/>
                </div> 
            : <img className="showpage-image" src={window.pinface} />}
            <div className="showpage-bps">
                <Link id="showpage-books" to={`/users/${this.props.user.id}/books`}>Books</Link>
                &nbsp;
                &nbsp; 
                <Link id="showpage-pins" to={`/users/${this.props.user.id}/pins`}>Pins</Link>
            {/* <div id="showpage-books" onClick={this.sendToBooks}>Books</div>  */}
                &nbsp; 
            {/* <div id="showpage-pins" onClick={this.sendToPins}>Pins</div> */}
            </div>
        </div>
   
    {/* <img src={this.props.user.photoUrl} alt=""/> */}
    
    {/* {path === 'pins' ?  <PinsIndexContainer/> : <BookIndexContainer/>}  */}
   
    </div>
)

}


}

export default withRouter(UserShowPage) 
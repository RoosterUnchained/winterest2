import React from 'react';
import { Link } from 'react-router-dom';
import DropDownContainer from './drop_down_container';

export default ({ currentUser, logout, openModal }) => {
    // this.switchClicked = this.switchClicked.bind(this)
    // this.dropdownBar = this.dropdownBar.bind(this)
    // this.state = { clicked: false }


//     const display = currentUser ? (
//         <div>
//             <h2>hello, {currentUser.username}</h2>
//             <button onClick={logout}>Logout</button>

//         </div>
//     ) : (
//         <div>
//             <Link to="/signup">Sign Up</Link>
//             <Link to="/login">Log In</Link>
//         </div>
//     );

//     return (
//         <div>
//             <header className="nav-bar">
//             {display}
//             </header>
//         </div>
//     )
// }
    // dropdownBar() {
    //   if(this.state.clicked === true){
    //     return (
    //       <ul>
    //         <li><button className="visible" onClick={this.props.logout}>Log Out</button></li>
    //       </ul>
    //     )
    //   }
    //   else{
    //     return (null) 
    //   }
    // }

    // switchClicked() {
    //     this.state.clicked = !this.state.clicked,
    //     this.dropdownBar()
    // }

    const signInSignUp = () => {
      return (
        <div>
            <button className="modalbutton" onClick={() => openModal('login')}>Login</button>
            <button className="modalbutton" onClick={() => openModal('signup')}>Signup</button>
        </div>
      ) 
      
    }

  // const pickClass = () => {
  //   if (document.getElementById('modal-background') === null){
  //     return 'nav'
  //   }
  //   else {
  //     return 'hidden'
  //   }
  // }


  const navbar = (currentUser, logout) => {
    return(
      <div className={ (document.getElementById('modal-background') === null) ? "nav" : "hidden"}>
                
                <form className="nav-bar">
          <Link className="navLink" to={`/users/${currentUser.id}/pins`}><img className="image" id="spacethumb" src={window.logo} /></Link>
          {/* <input className="btn spacebar" type="text" placeholder="search..."/> */}
          {/* <button className="btn" onClick={} type="submit">Home</button> */}
            <Link className="navLink" to={`/users/${currentUser.id}/pins`}>Home</Link>
            &nbsp;
            &nbsp; 
            <Link className="navLink" to={`/users/${currentUser.id}`}>{currentUser.email.split("@")[0]}</Link>
            &nbsp;
            <Link className="btn" to={`/users/following`}>Following</Link>
            &nbsp;
          <DropDownContainer/> 
        </form>
       <div className="tryRect"></div>
      </div>
    ) 
    };

    return ( currentUser ?
      navbar(currentUser, logout) :
      signInSignUp()
      );
} 
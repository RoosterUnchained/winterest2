import React from 'react';
// import NavBarContainer from './navbar/nav_bar_container';
import SignupContainer from './session/signup_container';
import LoginContainer from './session/login_container';
import { Route, Redirect, Link, HashRouter, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
// import Modal from '../components/modal';
//import DropDownContainer from './navbar/drop_down_container'
// import Background from './background'
// import UserShowContainer from './users/user_showpage_container'
// import EditFormContainer from './users/user_edit_form_container'
// import BookIndexContainer from './books/book_index_container'
// import StudiesIndexContainer from './studies/study_index_container'
// import BookShowContainer from './books/book_show_container'
// import BookCreateFormContainer from './books/book_create_form_container'
// import StudiesCreateFormContainer from './studies/study_create_form_container'
// import StudyShowContainer from './studies/study_show_container'
// import ReadingContainer from './reads/reading_container'
// import ReadingBooksContainer from './reads/reading_books_container'
// import ReadersContainer from './reads/readers_container'
// import ReadFeedContainer from './reads/read_feed_container'

const App = () => (
 <div>
     {/* <Modal/>  */}
     <header>
        {/* <NavBarContainer/> */}
    </header>
    {/* <Switch> */}
        <AuthRoute exact path="/signup" component={SignupContainer} />
        <AuthRoute exact path="/login" component={LoginContainer} />
            
        {/* <ProtectedRoute path="/users/:userId/books/:bookId" component={BookShowContainer}/>
        <ProtectedRoute path="/users/studyBuilder" component={StudiesCreateFormContainer} /> 
        <ProtectedRoute path="/users/:userId/books/new" component={BookCreateFormContainer}/>
        <ProtectedRoute path="/users/:userId/books" component={BookIndexContainer}/>
            
        <ProtectedRoute path="/users/:userId/readers" component={ReadersContainer}/>
        <ProtectedRoute path="/users/:userId/reading" component={ReadingContainer}/>
        <ProtectedRoute path="/users/:userId/readingbooks" component={ReadingBooksContainer}/>
        <ProtectedRoute path="/users/reading" component={ReadFeedContainer}/>
            
            
        <ProtectedRoute path="/users/:userId/studies/:studyId" component={StudyShowContainer} />
        <ProtectedRoute path="/users/:userId/studies" component={StudiesIndexContainer} />
        <ProtectedRoute path="/users/:userId/edit" component={EditFormContainer} />
        <ProtectedRoute path="/users/:userId" component={UserShowContainer} />
        <ProtectedRoute path="/users/:userId" component={BookIndexContainer} />
    */}
       
    {/* </Switch> */}
</div>
);

export default App;
    

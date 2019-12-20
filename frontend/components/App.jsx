import React from "react";
import { Route } from "react-router-dom";
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';



const App = () => { 
  return (
  <div>
    <header>
      <h1>Winterest</h1>
    </header>
      <Route path="/login" component={LoginFormContainer} />
      <Route path="/signup" component={SignupFormContainer} />
  </div>
)};



export default App;
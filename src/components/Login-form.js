//Criteria: needs to be centered, with username and password input fields 
// h3 that says login with a border; style with css
//ask about what specifically has to be h3??

import React from 'react';
import LoginButton from './Login-button';


export default class LoginForm extends React.Component{
    render(){
        return (
            <form className="form" id="background">
            <div className="form-group">
              <label>
                Username
             </label>
              <input className="form-control" placeholderName="Enter Username"></input>
            </div>
            <div className="form-group">
              <label>
                Password
              </label>
              <input className="form-control" placeholderName="Password"></input>
            </div>
           <div className="button">
            <LoginButton/>
           </div>
          </form> 
       ); 
    }
}
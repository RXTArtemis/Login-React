//Criteria: at top of page and style with some css

import React from 'react';
import LoginForm from './Login-form';
import LoginButton from './Login-button';

//in welcome message ask about using template literal to customize welcome message

export default class Navbar extends React.Component{
    render(){
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand" href="#">Welcome </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <a className="nav-item nav-link active" href="#">Home <span class="sr-only">(current)</span></a>
                <a className="nav-item nav-link" href="#">Profile</a>
                <a className="nav-item nav-link" href="#">Inbox</a>
              </div>
            </div>
          </nav>
          {LoginForm};
          {LoginButton};
        );
//double check on correct placement of login form and login button
    }
}
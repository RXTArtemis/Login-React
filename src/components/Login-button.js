//use CSS to style button
import React from 'react';

export default class LoginButton extends React.Component{
    render(){
        //JSX format
        return (
        <div className="container">
        <button className="btn">Log In</button>
        </div>
        );
    }
}
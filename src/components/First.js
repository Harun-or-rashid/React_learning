import React from 'react';
import ReactDom from 'react-dom'

class First extends React.Component{
    render(){
        return <div>
              <h1>Hi {this.props.name}</h1>
    <p>Your Email: {this.props.email}</p>  
        </div>
    }
}

export default First;


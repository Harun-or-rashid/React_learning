import React from 'react';
import ReactDom from 'react-dom'

class First extends React.Component{
state ={
    lists:["a","b","c"]

};
listz=["a","b","c","d"]

maps(){
return <ul>{this.listz.map(list=><li>{list}</li>)}</ul>
}
    render(){
        return <div>
            {this.maps()}
            <h1></h1>
              <h1>Hi {this.props.name}</h1>
                <p>Your Email: {this.props.email}</p>  
        </div>
    }
}

export default First;


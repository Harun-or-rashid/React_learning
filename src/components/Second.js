import React from 'react';

class Second extends React.Component{
    constructor(props){
        super(props)
        this.state={name:1,
            names:'ringku'
        }
    }
    nameM=()=>{
        this.setState({
            name:this.state.name-1
        })
    }
stateCheck=()=>{
    this.setState({
        names:this.state.names="ndf"
    })   
}
    nameP=()=>{
        this.setState({
            name:this.state.name+1
        }
            )
    }

    alerts=()=>{
        alert("clicked")
    }
    
render(){
  

    return <div>
        <h2 onClick={this.nameP}>Click</h2>
<p onClick={this.nameM}>{this.state.name}</p>
<button onClick={this.alerts}>ALERT</button>
<div><h2 onClick={this.stateCheck}>{this.state.names}</h2></div>
    </div>
   
} 
}


export default Second
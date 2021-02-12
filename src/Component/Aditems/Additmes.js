import React, { Component } from 'react'

export default class Additmes extends Component {
    state={
        input:""
    }
    handelChange=(e)=>{

        this.setState ({
            input:e.target.value })
    }
    render() {
        return (
            <div className="app">
                <input  placeholder="tab here" onChange={this.handelChange}  value={this.state.input}/>
            
                <button onClick={()=>{ this.state.input === '' ? 
   alert("svp ecrire quelque chose") :  this.props.handelAdd(this.state.input) ;this.setState({ input: "" });} }>Add</button>
   
   
            </div>
        )
    }
}

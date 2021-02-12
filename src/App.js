import React, { Component } from 'react'
import './App.css';
import Additmes from './Component/Aditems/Additmes'
import ListItems from './Component/ListItems/ListItems'


export default class App extends Component {
  state={
    listitems:["rami","rami"]
  }

  handelAdd=(element)=>{
this.setState ({listitems:this.state.listitems.concat(element)})
  }
  handelDelete=(indice)=>{
    this.setState ({listitems:this.state.listitems.filter((el,i)=>i!=indice)})
      }
  render() {
    return (
      <div className="app">
        <h1 >App to do </h1>
        <Additmes  handelAdd={this.handelAdd}/>
        <ListItems  listitems={this.state.listitems} handelDelete={this.handelDelete}/>
      </div>
    )
  }
}

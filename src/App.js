import React from 'react';

import Newtodo from './Newtodo'
import ToDoList from './todolist'

import './App.css';

class App extends React.Component {
  state={
    newtodo:"",
    todolist:[]
  }
  newtodo=(newtodo)=>{
    this.setState({newtodo})
  }
  addnewtodo=()=>{
    this.setState({
      todolist:[...this.state.todolist,{todo:this.state.newtodo,isComplete:false}],
      newtodo:""
    })
  }
  removetodo=(index)=>{
this.setState({
  todolist:this.state.todolist.filter((el,i)=>index!==i)
})
  }
  complete=(index)=>{
    this.setState({
    todolist:this.state.todolist.map((el,i)=>index===i? {...el,isComplete:!el.isComplete}:el)
    })
  }
  render(){
  return (
    <>
  <Newtodo newtodo={this.newtodo} addnewtodo={this.addnewtodo} todo={this.state.newtodo}/>
<ToDoList todolist={this.state.todolist} removetodo={this.removetodo} complete={this.complete}/>
    
    </>
  )}
}

export default App;

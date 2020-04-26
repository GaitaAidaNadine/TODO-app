import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import AddNewItem from "./components/AddNewItem";
import ToDos from "./components/ToDos";
import ClearListButton from "./components/ClearListButton";

class App extends Component {
  state = {
    todos: ["check emails","buy bread","learn React","go to doctor"],
    currentItem: '',
    deleteAllFlag: false,
  }

  addItem = () => {
    const newTodos = [...this.state.todos];
    newTodos.unshift(this.state.currentItem);
    this.setState({todos: newTodos, deleteAllFlag: false, currentItem: ''});
  }

  handleInput = (event) => {
    this.setState({currentItem: event.target.value});
  }

  deleteItem = (index) => {
    const newTodos =[...this.state.todos]
    newTodos.splice(index, 1);
    this.setState({todos: newTodos})
  }

  /*handleEditingDone = (index) => {
    const newTodos =[...this.state.todos]
    newTodos[index] = <h6 type="text" className="justify-content-center"> {newTodos[index]} </h6>
    this.setState({todos: newTodos})
  }

  editItem = (index) => {
    const newTodos =[...this.state.todos]
    newTodos[index] = <input type="text" onKeyDown={this.handleEditingDone.bind(this,index)} className="justify-content-center" value={newTodos[index]} /> 
    this.setState({todos: newTodos})
  }*/

  deleteAll = () => {
    let newTodos =[...this.state.todos]
    newTodos = [];
    this.setState({todos: newTodos, deleteAllFlag: true})
  }

  render() {
    return (
        <div>
          <Header />
          <AddNewItem addItem={this.addItem} handleInput={this.handleInput} value={this.state.currentItem}/>
          <ToDos todos={this.state.todos} deleteItem={this.deleteItem} /*editItem={this.editItem}*/ />
          {this.state.deleteAllFlag ?
          <div /> :
          <ClearListButton deleteAll={this.deleteAll}/>}
        </div> 
    );
  }
}

export default App;

import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import AddNewItem from "./components/AddNewItem";
import ToDos from "./components/ToDos";
import ClearListButton from "./components/ClearListButton";

class App extends Component {
  render() {
    return (
      
        <div>
          <Header />
          <AddNewItem />
          <ToDos />
          <ClearListButton />
        </div>
      
    );
  }
}

export default App;

import React, { Component } from 'react';
import AddTodo from "../containers/AddTodo";
import VisibleTodoList from '../component/TodoList';
import Footer from '../component/Footer';

class App extends React.Component {
  render() {
    return (
      <div>
        <AddTodo/>
        <VisibleTodoList/>
        <Footer/>
      </div>
    );
  }
}

export default App;

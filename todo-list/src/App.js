import React, { Component } from 'react'
import Title from './Components/title';
import TodoList from './Components/TodoList';

export default class App extends Component {
  render() {
    return (
      <div>
        <Title>My Todo List</Title>
        <TodoList></TodoList>
      </div>
    )
  }
}

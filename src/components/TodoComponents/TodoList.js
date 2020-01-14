// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React, {Component} from 'react';

import Todo from './Todo';

class TodoList extends Component {
  render() {
    const list = this.props.list.map(todo => <h2> {todo.item}</h2>);

    return (
      <div>
        <Todo list={list} />
      </div>
    );
  }
}

export default TodoList;

import React from 'react';

import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';

class App extends React.Component {
  state = {
    todos: [{item: 'Take out trash'}, {item: 'Take out trash'}, {item: 'Take out trash'}]
  };

  render() {
    return (
      <div className='container'>
        <div className='row'>
          <h2>Welcome to your Todo App!</h2>
          <TodoList list={this.state.todos} />
        </div>
      </div>
    );
  }
}

export default App;

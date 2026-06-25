import { Component } from 'react';
import Count from './Count.jsx';

class ClassInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: ['Just some demo tasks', 'As an example'],
      inputVal: '',
      editingTask: '',
      editInputVal: '',

    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleEditInputVal = this.handleEditInputVal.bind(this);
    this.handleEditSubmit = this.handleEditSubmit.bind(this);
  }

  handleInputChange(e) {
    this.setState((state) => ({
      ...state,
      inputVal: e.target.value,
    }));
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState((state) => ({
      todos: state.todos.concat(state.inputVal),
      inputVal: '',
    }));
  }

  handleDelete(e) {
    e.preventDefault();
    let filtered = this.state.todos.filter(item => item !== e.target.id)
    this.setState((state) => ({
      ...state,
      todos: filtered,
    }));
  }


  handleEditInputVal(e) {
    this.setState((state) => ({
      ...state,
      editInputVal: e.target.value,
    }))
  }

  handleEditSubmit(e) {
    e.preventDefault();
    const newarr = this.state.todos.map((todo) => this.state.editingTask === todo ? this.state.editInputVal : todo)



    this.setState((state) => ({
      todos: newarr,
      editInputVal: '',
      editingTask: '',
    }))
  }

  handleEdit(e) {
    e.preventDefault();
    // let filtered = this.state.todos.filter(item => item !== e.target.id)
    console.log(e.target.id)
    this.setState((state) => ({
      ...state,
      editingTask: e.target.id,
      editInputVal: e.target.id
    }));
  }



  render() {
    return (
      <section>
        <h3>{this.props.name}</h3>
        {/* The input field to enter To-Do's */}
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="task-entry">Enter a task:</label>
          <input
            type="text"
            name="task-entry"
            value={this.state.inputVal}
            onChange={this.handleInputChange}
          />
          <button type="submit">Submit</button>
        </form>
        <h4>All the tasks!</h4>
        <Count count={this.state.todos.length} />
        {/* The list of all the To-Do's, displayed */}
        <ul>
          {this.state.todos.map((todo) => this.state.editingTask === todo ?
            <form onSubmit={this.handleEditSubmit} key={todo}>
              <label htmlFor="task-entry">Enter a task:</label>
              <input
                type="text"
                name="task-entry"
                value={this.state.editInputVal}
                onChange={this.handleEditInputVal}

              />
              <button type="submit">Submit</button>
            </form> : (
              <li key={todo}>{todo}<button id={todo} onClick={this.handleEdit} >Edit</button><button id={todo} onClick={this.handleDelete}>x</button></li>
            ))}
        </ul>
      </section>
    );
  };
}
export default ClassInput;

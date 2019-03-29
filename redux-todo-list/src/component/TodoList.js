import React from 'react';
import Todo from './Todo';
import { connect } from 'react-redux'
import { toggleTodo } from '../actions'
import { VisibilityFilters } from '../actions'

const getVisibleTodos = (todos, filter) => {
    switch (filter) {
        case VisibilityFilters.SHOW_ALL:
            return todos
        case VisibilityFilters.SHOW_COMPLETED:
            return todos.filter(t => t.completed)
        case VisibilityFilters.SHOW_ACTIVE:
            return todos.filter(t => !t.completed)
        default:
            throw new Error('Unknown filter: ' + filter)
    }
};

const mapStateToProps = state => ({
    todos: getVisibleTodos(state.todos, state.visibilityFilter)
});

const mapDispatchToProps = dispatch => ({
    toggleTodo: id => dispatch(toggleTodo(id))
});

class TodoList extends React.Component {
    render() {
        const {todos, toggleTodo} = this.props
        return (
            <ul>
                {todos.map(todo => (
                    <Todo key={todo.id} {...todo} onClick={() => toggleTodo(todo.id)}/>
                ))}
            </ul>
        )
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList)
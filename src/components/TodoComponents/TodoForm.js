import React from 'react';

function TodoForm(props) {
    return (
        <form>
            <input placeholder='...todo' value={props.inputText} onChange={props.handleInput} />
            <button onClick={props.addTodo}>Add Todo</button>
            <button onClick={props.clearCompleted}>Clear Completed</button>
        </form>
    );
}

export default TodoForm;
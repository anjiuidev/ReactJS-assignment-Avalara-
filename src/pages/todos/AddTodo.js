import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Button from '../../components/Button';
import { addTodo } from '../../redux/todos/todo.actions';

const AddTodo = () => {
    const [todo, setTodo] = useState('');
    const dispatch = useDispatch();
    const addTodoItem = (todo) => dispatch(addTodo(todo));

    const onChange = (event) => {
        setTodo(event.target.value);
    };
    const onSubmit = (event) => {
        event.preventDefault();
        if (todo.trim() === '') return;
        addTodoItem({
            id: new Date().getTime(),
            title: todo,
            completed: false,
            createdAt: new Date().toString()
        });
        setTodo('');
    };

    return (
        <form className="col s12" onSubmit={onSubmit}>
            <div className="row">
                <div className="input-field col s9">
                    <input
                        placeholder="Enter todo"
                        id="todo"
                        data-testid="todoinput"
                        type="text"
                        value={todo}
                        onChange={onChange} />
                </div>
                <div className="input-field col s3">
                    <Button type="submit" disabled={!todo.length} onClick={onSubmit} text="Save" />
                </div>
            </div>
        </form>
    );
};

export default AddTodo;

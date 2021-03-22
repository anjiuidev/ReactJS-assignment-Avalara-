import React, { memo } from 'react';
import { formatDate } from '../../utils/date-formatter';

function Todo({ todo, toggleTodo }) {
    return (
        <div className="card" data-testid="todo">
            <div className="card-content">
                <label>
                    <input type="checkbox" className="filled-in" checked={todo.completed} onChange={() => toggleTodo(todo.id)} />
                    <span>{todo.title} - {formatDate(todo.createdAt)}</span>
                </label>
            </div>
        </div>
    );
}

export default memo(Todo);

import React from 'react';

export function Todos({ todos }) {
    return (
        <div>
            {todos.map(function(todo) {
                return (
                    <div>
                        <h1>{todo.title}</h1>
                        <h2>{todo.description}</h2>
                        <button>{todo.completed ? "Complete" : "Mark as Complete"}</button>
                    </div>
                );
            })}
        </div>
    );
}

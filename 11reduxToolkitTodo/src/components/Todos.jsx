import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeTodo, updateTodo } from '../features/todo/todoSlice';

function Todos() {
    const todos = useSelector(state => state.todos);
    const dispatch = useDispatch();
    const [updateTodoId, setUpdateTodoId] = useState('');
    const [newText, setNewText] = useState('');

    const handleUpdateClick = (id, text) => {
        setUpdateTodoId(id);
        setNewText(text)
    };

    const handleUpdateTodo = () => {
        dispatch(updateTodo({
            id: updateTodoId,
            newText
        }));
        setUpdateTodoId('');
        setNewText('');
    };

    return (
        <>
            <div>Todos</div>
            <ul className="list-none">
                {todos.map((todo) => (
                    <li
                        className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded"
                        key={todo.id}
                    >
                        <div className='text-white'>{todo.text}</div>
                        <div className="flex space-x-2">
                            <button
                                onClick={() => handleUpdateClick(todo.id, todo.text)}
                                className="text-white bg-blue-500 border-0 py-1 px-4 focus:outline-none hover:bg-blue-600 rounded text-md"
                            >
                                Update
                            </button>
                            <button
                                onClick={() => dispatch(removeTodo(todo.id))}
                                className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md"
                            >
                                Delete
                            </button>
                        </div>
                    </li>
                ))}
            </ul>

            {updateTodoId && (
                <div className="mt-4">
                    <input
                        type="text"
                        className="border rounded px-2 py-1 mr-2"
                        value={newText}
                        onChange={(e) => setNewText(e.target.value)}
                        placeholder="Enter new text"
                    />
                    <button
                        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                        onClick={handleUpdateTodo}
                    >
                        Save
                    </button>
                </div>
            )}
        </>
    );
}

export default Todos;

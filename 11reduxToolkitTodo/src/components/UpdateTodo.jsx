import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateTodo } from '../features/todo/todoSlice'

const UpdateTodo = ({ todo }) => {
    const dispatch = useDispatch();
    const [newText, setNewText] = useState('');

    const handleUpdate = () => {
        dispatch(updateTodo({ id: todo.id, newText }));
        setNewText(''); // Clear the input after updating
    };

    return (
        <div className="my-4">
            <input
                type="text"
                className="border rounded px-2 py-1 mr-2"
                value={newText}
                onChange={(e) => setNewText(e.target.value)}
                placeholder="Enter new text"
            />
            <button
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                onClick={handleUpdate}
            >
                Update Todo
            </button>
        </div>
    );
};

export default UpdateTodo;

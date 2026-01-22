'use client';
import { useTodoStore } from '@/lib/todo-store';
import { Todo } from '@/types/todo';
import React, { useState } from 'react';



export default function TodoItem({ todo }: { todo: Todo }) {
    const deleteTodo = useTodoStore((state) => state.deleteTodo);
    const toggleTodo = useTodoStore((state) => state.toggleTodo);
    const updateTodo = useTodoStore((state) => state.updateTodo);

    const [isEditing, setIsEditing] = useState(false);

    const [editedText, setEditedText] = useState(todo.text);
    const handleDelete = () => {
        deleteTodo(todo.id);
    }

    const handleToggle = () => {
        toggleTodo(todo.id);

    }

    const handleUpdate = () => {
        if(editedText.trim() === "") return;    
        updateTodo(todo.id, editedText);
        setIsEditing(false);
    }

  return (
    <div className='flex items-center justify-between bg-white p-4 rounded-3xl shadow'>
         
      <div className='flex items-center gap-4'>
        <input
        type="checkbox"
        checked={todo.completed}
        readOnly
        className="h-5 w-5 text-blue-500 rounded"
        onClick={handleToggle}
      />
        {isEditing ? (
          <input
          className='w-full px-2 py-1 border rounded'
            type="text"
            value={editedText}
            onChange={(e) => setEditedText(e.target.value)}
            onBlur={() => setIsEditing(false)}
            onKeyDown={(e) => {
                if (e.key === 'Enter') {
                    handleUpdate();
                }
            }}
            autoFocus
          />
        ) : (
          <p className={`text-black ${todo.completed ? 'line-through' : ''}`}>
            {todo.text}
          </p>
        )}
        <p className="text-gray-500 text-sm">
          Created: {todo.createdAt.toLocaleDateString()}
        </p>
      </div>
      <div className='flex items-center gap-2'>
        <button className="ml-2" onClick={() => setIsEditing(!isEditing)}>✏️</button>
        <button className="text-red-500 hover:text-red-700" onClick={handleDelete}>🗑️</button>
      </div>

     
    </div>
  );
};


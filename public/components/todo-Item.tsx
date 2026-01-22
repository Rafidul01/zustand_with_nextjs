import { Todo } from '@/types/todo';
import React from 'react';



export default function TodoItem({ todo }: { todo: Todo }) {
  return (
    <div className='flex items-center justify-between bg-white p-4 rounded-3xl shadow'>
         
      <div className='flex items-center gap-4'>
        <input
        type="checkbox"
        checked={todo.completed}
        readOnly
        className="h-5 w-5 text-blue-500 rounded"
      />
        <p className={`text-black ${todo.completed ? 'line-through' : ''}`}>
          {todo.text}
        </p>
        <p className="text-gray-500 text-sm">
          Created: {todo.createdAt.toLocaleDateString()}
        </p>
      </div>
      <div className='flex items-center gap-2'>
        <button className="ml-2">✏️</button>
        <button className="text-red-500 hover:text-red-700">🗑️</button>
      </div>

     
    </div>
  );
};


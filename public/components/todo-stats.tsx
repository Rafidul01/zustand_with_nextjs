import { useTodoStore } from '@/lib/todo-store';
import React from 'react';



export default function TodoStats() {
    const getTodoStats = useTodoStore((state) => state.getTodoStats);
    const stats = getTodoStats();
    // const stats = {
    //     total: 10,
    //     completed: 4,
    //     pending: 6
    // }
  return (
	<div className='text-black m-4 text-center' >
        <div className="flex items-center justify-center gap-4 px-4 py-2 "   >
            <div>Total Todos: {stats.total}</div>
            <div>Completed: {stats.completed}</div>
            <div>Pending: {stats.pending}</div>

        </div>
	  {/* Add your todo stats content here */}
	</div>
  );
};


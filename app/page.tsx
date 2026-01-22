'use client'
import { useTodoStore } from "@/lib/todo-store";
import AddTodoForm from "@/public/components/add-todo-form";
import TodoItem from "@/public/components/todo-Item";
import TodoStats from "@/public/components/todo-stats";
import { text } from "stream/consumers";

export default function Home() {
  const todos = useTodoStore((state) => state.todos);
  // const todos = [
    
  // ];
  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-2xl mx-auto px-4" >
        <h1 className="text-3xl font-bold mb-6 text-center text-black" >Todo App</h1>
        <AddTodoForm />
        <TodoStats />
        <div className="space-y-2">
          {
            todos.length === 0 ? (
              <p className="text-center text-black" >No todos available. Please add a todo.</p>
            ) :
            todos.map((todo) => (
              <TodoItem key={todo.id} todo={todo} />
            ))
          }
        </div>
      </div>
    </div>
  );
}

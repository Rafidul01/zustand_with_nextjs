'use client';


import { useTodoStore } from "@/lib/todo-store";
import { KeyboardEvent, MouseEvent, useState } from "react";

export default function AddTodoForm(){
    const [input, setInput] = useState("add todo");

    const addTodo = useTodoStore((state) => state.addTodo);
    
    const handelSubmit = (e: KeyboardEvent<HTMLInputElement>) =>{
        e.preventDefault();
        addTodo(input);
        setInput("");
    }

    const handleButtonClick = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        addTodo(input);
        setInput("");
    }
  return (
    <form className="flex mb-4 text-black">
      <input
        type="text"
        placeholder={input}
        onChange={(e)=> setInput(e.target.value)}
        onKeyDown={(e) => e.key == "Enter" && handelSubmit(e)}
        className="flex-grow p-2 border border-gray-300 rounded-l"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white p-2 rounded-r hover:bg-blue-600"
        onClick={handleButtonClick}
      >
        Add
      </button>
    </form>
  );
}
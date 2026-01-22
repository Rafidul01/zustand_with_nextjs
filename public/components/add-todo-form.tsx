'use client';


import { KeyboardEvent, MouseEvent, useState } from "react";

export default function AddTodoForm(){
    const [input, setInput] = useState("add todo");
    
    const handelSubmit = (e: KeyboardEvent<HTMLInputElement>) =>{
        e.preventDefault();
        
        console.log(input);
    }

    const handleButtonClick = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        console.log(input);
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
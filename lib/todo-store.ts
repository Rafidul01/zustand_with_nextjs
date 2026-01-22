import { Todo } from "@/types/todo";
import { create } from "zustand";

interface TodoStore {
  todos: Todo[];
  addTodo: (text: string) => void;
  
}

export const useTodoStore = create<TodoStore>((set) => ({
  todos: [{
        id: "1",
        text: "Learn React",
        completed: false,
        createdAt: new Date("2026-01-01T10:00:00")
      },
      {
        id: "2",
        text: "Build a Todo App",
        completed: true,
        createdAt: new Date("2026-01-02T12:00:00")
      },
      {
        id: "3",
        text: "Master TypeScript",
        completed: false,
        createdAt: new Date("2026-01-03T14:00:00")
      }
    ],

    // create 
    addTodo: (text: string) =>
        set((state)=>({
            todos: [
                ...state.todos,
                {
                    id: Date.now().toString(),
                    text: text.trim(),
                    completed: false,
                    createdAt: new Date()
                }
            ]
        }))
}));
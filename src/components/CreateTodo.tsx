import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { insertTodo } from "../hooks/contextApi";
import { useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react";


function CreateTodo() {
  const [todo, setTodo] = useState<string>("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if(todo.length !== 0){
      insertTodo({
        url: "http://localhost:3000/todos",
        dispatch: dispatch,
        data: { title: todo },
        useNavigate: navigate,
      });
    }else {
      return;
    }
  }

  return (
    <div className="p-14 space-y-12">
      <h1 className="text-4xl capitalize text-center font-medium text-gray-500 dark:text-white">
        create todo
      </h1>
      <form
        onSubmit={handleSubmit}
        className="bg-gray-300 dark:bg-gray-800 p-2 rounded-md shadow-md"
      >
        <div className="relative">
          <input
            type="text"
            placeholder="type something.."
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
            className="w-full bg-white text-gray-500 px-2 py-2 text-xs placeholder:text-gray-400 rounded-md border-0 focus:border-gray-800 focus:ring-0"
          />
          <button
            type="submit"
            className="absolute inset-y-0 end-0 grid place-content-center text-gray-500 px-2 hover:text-gray-700"
          >
            <Icon icon="mdi:send" />
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreateTodo;

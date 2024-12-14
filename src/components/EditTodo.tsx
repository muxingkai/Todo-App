import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { editTodo } from "../hooks/contextApi";
import { Icon } from "@iconify/react";

function EditTodo() {
  const [todo, setTodo] = useState<string>("");
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchTodo() {
      const response = await axios.get(`http://localhost:3000/todos/${id}`);
      setTodo(response.data.title);
    }

    fetchTodo();
  }, [id]);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if(todo.length !== 0){
      editTodo({url: `http://localhost:3000/todos/${id}`,data: {title: todo}, dispatch: dispatch, useNavigate: navigate})
    }else {
      return;
    }
  }

  return (
    <div className="p-14 space-y-12">
      <h1 className="text-4xl capitalize text-center font-medium text-gray-500 dark:text-white">
        edit todo
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
            <Icon icon="mdi:publish" />
          </button>
        </div>
      </form>
    </div>
  );
}
export default EditTodo;

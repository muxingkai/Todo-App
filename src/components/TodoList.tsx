import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootType } from "../redux/store";
import { Link } from "react-router-dom";
import { deleteOne, getAll } from "../hooks/contextApi";
import { Icon } from "@iconify/react";

function TodoList() {
  let Content;
  const todos = useSelector((state: RootType) => state.todos);
  const loading = useSelector((state: RootType) => state.loading);
  const error = useSelector((state: RootType) => state.error);
  const dispatch = useDispatch();

  useEffect(() => {
    getAll({ url: "http://localhost:3000/todos", dispatch: dispatch });
  }, []);
  function handleDelete(todo: { id: number; title: string }) {
    deleteOne({
      url: "http://localhost:3000/todos",
      data: todo,
      dispatch: dispatch,
    });
  }

  if (todos.length === 0) {
    Content = (
      <p className="text-center text-xs text-gray-500 dark:text-gray-400">You haven't created any todos yet.</p>
    );
  } else {
    Content = (
      <div className="bg-white p-2 shadow-md rounded-md max-h-64 overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-gray-300 [&::-webkit-scrollbar-track]:rounded-md [&::-webkit-scrollbar-thumb]:bg-gray-700 dark:[&::-webkit-scrollbar-thumb]:bg-red-500 [&::-webkit-scrollbar-thumb]:rounded-md">
        <ul className="space-y-1">
          {todos.map((todo) => (
            <li key={todo.id} className="relative group p-2 hover:bg-gray-300 rounded-md">
              <p className="text-gray-500 text-xs hover:text-gray-700">
                {todo.title}
              </p>
              <div className="hidden inset-y-0 h-full end-0 group-hover:grid group-hover:absolute">
                <div className="flex items-center gap-1">
                  <button onClick={() => handleDelete(todo)}>
                    <span className="block bg-red-200 text-red-700 px-1 py-0.5 rounded-full">
                      <Icon icon="mdi:trash" />
                    </span>
                  </button>
                  <Link to={`/edit/${todo.id}`}>
                    <span className="block bg-green-200 text-green-700 px-1 py-0.5 rounded-full">
                      <Icon icon="mdi:circle-edit-outline" />
                    </span>
                  </Link>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  return (
    <div className="p-14 space-y-12">
      <h1 className="text-4xl capitalize text-center font-medium text-gray-500 dark:text-white">
        todo list
      </h1>
      {loading && <p>Loading...</p>}
      {error.message && <p>Error: {error.message}</p>}

      {Content}
    </div>
  );
}

export default TodoList;

import { RouteObject } from "react-router-dom";
import TodoList from "../components/TodoList";
import CreateTodo from "../components/CreateTodo";
import EditTodo from "../components/EditTodo";

const routes: RouteObject[] = [
  { path: "/", element: <TodoList /> },
  { path: "/create", element: <CreateTodo /> },
  { path: "/edit/:id", element: <EditTodo /> },
];

export default routes;

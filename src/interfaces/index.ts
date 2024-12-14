import { AppDispatch } from "../redux/store";
import { NavigateFunction } from "react-router-dom";
interface DeleteTodo {
  url: string;
  data: { id: number; title: string };
  dispatch: AppDispatch;
}
interface GetAll {
  url: string;
  dispatch: AppDispatch;
}

interface InsertTodo {
  url: string;
  data: { title: string };
  dispatch: AppDispatch;
  useNavigate: NavigateFunction;
}
interface EditTodo {
  url: string;
  data: { title: string };
  dispatch: AppDispatch;
  useNavigate: NavigateFunction;
}

interface Todo {
  id: number;
  title: string;
}

interface InitialValue {
  todos: Todo[];
  loading: boolean;
  error: { message: string | null };
}

export type { DeleteTodo, GetAll, InsertTodo, EditTodo, Todo, InitialValue };

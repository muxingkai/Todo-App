import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { InitialValue, Todo } from "../interfaces";

const initialValue: InitialValue = {
  todos: [],
  loading: false,
  error: { message: null },
};

const todoSlice = createSlice({
  name: "todo",
  initialState: initialValue,
  reducers: {
    todoRequest: (state) => {
      return { ...state, loading: true };
    },
    todoSuccess: (state, action: PayloadAction<Todo[]>) => {
      return { ...state, loading: false, todos: action.payload };
    },
    todoFailure: (state, action: PayloadAction<Error>) => {
      return { ...state, loading: false, error: action.payload };
    },
    addTodo: (state, action: PayloadAction<Todo>) => {
      return { ...state, todos: [...state.todos, action.payload] };
    },
    updateTodo: (state, action: PayloadAction<Todo>) => {
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload.id ? action.payload : todo
        ),
      };
    },
    deleteTodo: (state, action: PayloadAction<Todo>) => {
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload.id),
      };
    },
  },
});

export const todoReducer = todoSlice.reducer;
export const {
  todoRequest,
  todoSuccess,
  todoFailure,
  addTodo,
  deleteTodo,
  updateTodo,
} = todoSlice.actions;

import axios from "axios";
import {
  addTodo,
  deleteTodo,
  todoFailure,
  todoRequest,
  todoSuccess,
  updateTodo,
} from "../redux/reducer";
import { DeleteTodo, EditTodo, GetAll, InsertTodo } from "../interfaces";

async function insertTodo({ url, data, dispatch, useNavigate }: InsertTodo) {
  try {
    const response = await axios.post(url, data);
    dispatch(addTodo(response.data));
    useNavigate("/");
  } catch (error) {
    console.log(error);
  }
}

async function editTodo({ url, data, dispatch, useNavigate }: EditTodo) {
  try {
    const response = await axios.put(url, data);
    dispatch(updateTodo(response.data));
    useNavigate("/");
  } catch (error) {
    console.log(error);
  }
}

async function getAll({ url, dispatch }: GetAll) {
  dispatch(todoRequest());
  try {
    const response = await axios.get(url);
    dispatch(todoSuccess(response.data));
  } catch (error) {
    if (error instanceof Error) dispatch(todoFailure(error));
  }
}

async function deleteOne({ url, data, dispatch }: DeleteTodo) {
  try {
    const response = await axios.delete(`${url}/${data.id}`);
    dispatch(deleteTodo(response.data));
  } catch (err) {
    console.log(err);
  }
}
export { deleteOne, getAll, insertTodo, editTodo };

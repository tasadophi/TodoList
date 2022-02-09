import React, { useContext, useReducer, useState } from "react";
import Modal from "./Modal/Modal";
import Navbar from "./Navbar/Navbar";
import TodoForm from "./TodoForm/TodoForm";
import TodoList from "./TodoList/TodoList";
const TodosContext = React.createContext();
const TodosContextDispatcher = React.createContext();
const ModalDependencies = React.createContext();
const ids = [];

const generateId = () => {
  let id = Math.floor(Math.random() * 1000);
  while (ids.includes(id)) {
    id = Math.floor(Math.random() * 1000);
  }
  return id;
};

const setToStorage = (arrey) => {
  localStorage.setItem("todos", JSON.stringify(arrey));
};

export const getAllTodos = () => {
  return localStorage.getItem("todos")
    ? JSON.parse(localStorage.getItem("todos"))
    : [];
};

const reducer = (state, action) => {
  const type = action.type;
  if (type === "add") {
    const newTodo = { text: action.value, id: generateId(), done: false };
    const updatedTodos = [...state, newTodo];
    const allTodos = getAllTodos();
    setToStorage([...allTodos, newTodo]);
    return updatedTodos;
  } else if (type === "delete") {
    const allTodos = getAllTodos();
    const updatedTodos = [...allTodos].filter(
      ({ ...todo }) => todo.id !== parseInt(action.id)
    );
    setToStorage(updatedTodos);
    return updatedTodos;
  } else if (type === "edit") {
    const todos = JSON.parse(localStorage.getItem("todos"));
    const updatedTodos = [...todos].map(({ ...todo }) => {
      if (todo.id === action.todo.id) {
        todo.text = action.todo.text;
      }
      return todo;
    });
    setToStorage(updatedTodos);
    return updatedTodos;
  } else if (type === "check") {
    const allTodos = getAllTodos();
    const updatedTodos = [...allTodos].map(({ ...todo }) => {
      if (todo.id === parseInt(action.id)) {
        todo.done = !todo.done;
      }
      return todo;
    });
    setToStorage(updatedTodos);
    return updatedTodos;
  } else if (type === "filterAll") {
    const allTodos = getAllTodos();
    localStorage.removeItem("filter");
    return allTodos;
  } else if (type === "filterDone") {
    const allTodos = getAllTodos();
    const updatedTodos = allTodos.filter(({ ...todo }) => todo.done);
    return updatedTodos;
  } else if (type === "filterUndone") {
    const allTodos = getAllTodos();
    const updatedTodos = allTodos.filter(({ ...todo }) => !todo.done);
    return updatedTodos;
  }
};

const TodoApp = () => {
  const [todos, dispatch] = useReducer(reducer, []);
  const [showModal, setShowModal] = useState(null);
  if (!localStorage.getItem("filterBy") && !localStorage.getItem("edit"))
    localStorage.setItem("todos", JSON.stringify(todos));
  return (
    <TodosContext.Provider value={todos}>
      <TodosContextDispatcher.Provider value={dispatch}>
        <ModalDependencies.Provider value={{ showModal, setShowModal }}>
          {showModal ? <Modal todo={showModal} /> : ""}
          <Navbar />
          <TodoForm />
          <TodoList />
        </ModalDependencies.Provider>
      </TodosContextDispatcher.Provider>
    </TodosContext.Provider>
  );
};

export default TodoApp;

export const useTodos = () => useContext(TodosContext);
export const useTodosDispatch = () => useContext(TodosContextDispatcher);
export const useModal = () => useContext(ModalDependencies);

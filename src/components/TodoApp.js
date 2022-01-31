import React, { useContext, useReducer } from "react";
const todosContext = React.createContext();
const todosContextDispatcher = React.createContext();

const reducer = (state, action) => {
  const type = action.type;
  console.log(type, state);
};

const Todo = ({ children }) => {
  const [todos, dispatch] = useReducer(reducer, []);
  return (
    <todos.Provider value={todos}>
      <todosDispatcher value={dispatch}>{children}</todosDispatcher>
    </todos.Provider>
  );
};

export default Todo;

export const useTodos = () => useContext(todosContext);
export const useTodosDispatch = () => useContext(todosContextDispatcher);

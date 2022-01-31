import React, { useContext, useReducer } from "react";
const todosContext = React.createContext();
const todosContextDispatcher = React.createContext();

const reducer = (state, action) => {
  const type = action.type;
  console.log(type, state);
};

const TodoApp = ({ children }) => {
  const [todos, dispatch] = useReducer(reducer, []);
  return (
    <todosContext.Provider value={todos}>
      <todosContextDispatcher value={dispatch}>
        {children}
      </todosContextDispatcher>
    </todosContext.Provider>
  );
};

export default TodoApp;

export const useTodos = () => useContext(todosContext);
export const useTodosDispatch = () => useContext(todosContextDispatcher);

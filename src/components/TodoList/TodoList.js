import Todo from "../Todo/Todo";
import { getAllTodos, useTodos } from "../TodoApp";
import styles from "./TodoList.module.css";

const sortDates = (todos) => {
  return todos.sort((a, b) => {
    return (
      (b.updated ? new Date(b.updated) : 0) -
      (a.updated ? new Date(a.updated) : 0)
    );
  });
};

const TodoList = () => {
  let todos = useTodos();
  if (!localStorage.getItem("filter")) {
    todos = getAllTodos();
  }
  todos = sortDates(todos);
  const renderTodos = () =>
    todos.map((todo) => <Todo key={todo.id} todo={todo} />);
  return (
    <section className={`${styles.todos} container`}>
      {todos.length > 0 ? (
        renderTodos()
      ) : (
        <div className={styles.empty}>این لیست خالی می باشد!</div>
      )}
    </section>
  );
};

export default TodoList;

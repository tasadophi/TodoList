import Todo from "../Todo/Todo";
import styles from "./TodoList.module.css";
const TodoList = () => {
  return (
    <section className={`${styles.todos} container`}>
      <Todo />
      <Todo />
      <Todo />
    </section>
  );
};

export default TodoList;

import styles from "./Todo.module.css";
import { FaEdit } from "react-icons/fa";
import { FaEraser } from "react-icons/fa";
import { useModal, useTodosDispatch } from "../TodoApp";
import { toast } from "react-toastify";

const Todo = ({ todo }) => {
  const dispatch = useTodosDispatch();
  const { setShowModal } = useModal();

  const getPersian = (todo) => {
    const created = new Date(todo.created).toLocaleString("fa-IR");
    const updated = new Date(todo.updated).toLocaleString("fa-IR");
    return { created, updated };
  };

  // handlers
  const deleteHandler = (e) => {
    dispatch({ type: "delete", id: e.currentTarget.id });
    if (localStorage.getItem("filterBy"))
      dispatch({ type: localStorage.getItem("filterBy") });
    toast.warn("حذف شد!");
  };

  const editHandler = () => {
    setShowModal(todo);
  };

  const checkHandler = (e) => {
    dispatch({ type: "check", id: e.currentTarget.id });
    if (localStorage.getItem("filterBy"))
      dispatch({ type: localStorage.getItem("filterBy") });
  };

  return (
    <div className={styles.todo}>
      <div className={styles.title}>
        <span
          className={`${styles.todoTitle} ${todo.done ? styles.done : ""}`}
          onClick={checkHandler}
          id={todo.id}
        >
          {todo.text}
        </span>
        <span className={styles.date}>
          اضافه شده در : {getPersian(todo).created}
        </span>
        {!getPersian(todo).updated.includes("Invalid") ? (
          <span className={styles.date}>
            آخرین ویرایش : {getPersian(todo).updated}
          </span>
        ) : (
          ""
        )}
      </div>
      <div className={styles.actions}>
        <span
          className={`${styles.icon} ${styles.delete}`}
          onClick={deleteHandler}
          id={todo.id}
        >
          <FaEraser />
        </span>
        <span
          className={`${styles.icon} ${styles.edit}`}
          onClick={editHandler}
          id={todo.id}
        >
          <FaEdit />
        </span>
      </div>
    </div>
  );
};

export default Todo;

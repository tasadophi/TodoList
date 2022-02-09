import styles from "./Todo.module.css";
import { FaEdit } from "react-icons/fa";
import { FaEraser } from "react-icons/fa";
import { useModal, useTodosDispatch } from "../TodoApp";
import Modal from "../Modal/Modal";
const Todo = ({ todo }) => {
  const dispatch = useTodosDispatch();
  const { showModal, setShowModal } = useModal();

  // handlers
  const deleteHandler = (e) => {
    dispatch({ type: "delete", id: e.currentTarget.id });
    if (localStorage.getItem("filterBy"))
      dispatch({ type: localStorage.getItem("filterBy") });
  };

  const editHandler = (e) => {
    setShowModal((prev) => setShowModal(!prev));
  };

  const checkHandler = (e) => {
    dispatch({ type: "check", id: e.currentTarget.id });
    if (localStorage.getItem("filterBy"))
      dispatch({ type: localStorage.getItem("filterBy") });
  };

  return (
    <div className={styles.todo}>
      {showModal ? <Modal todo={todo} /> : ""}
      <span
        className={`${styles.todoTitle} ${todo.done ? styles.done : ""}`}
        onClick={checkHandler}
        id={todo.id}
      >
        {todo.text}
      </span>
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

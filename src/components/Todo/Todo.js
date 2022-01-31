import styles from "./Todo.module.css";
import { FaEdit } from "react-icons/fa";
import { FaEraser } from "react-icons/fa";
const Todo = () => {
  return (
    <div className={styles.todo}>
      <span className={styles.todoTitle}>انجام همین پروژه</span>
      <div className={styles.actions}>
        <span className={`${styles.icon} ${styles.delete}`}>
          <FaEraser />
        </span>
        <span className={`${styles.icon} ${styles.edit}`}>
          <FaEdit />
        </span>
      </div>
    </div>
  );
};

export default Todo;

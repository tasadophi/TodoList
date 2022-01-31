import styles from "./TodoForm.module.css";
import { FaRegPlusSquare } from "react-icons/fa";
const TodoForm = () => {
  return (
    <form className={`${styles.formContainer} container`}>
      <div>
        <input className={styles.input} placeholder="بنویسید ..."></input>
        <button type="button" className={styles.btn}>
          {<FaRegPlusSquare />}
        </button>
      </div>
    </form>
  );
};

export default TodoForm;

import styles from "./TodoForm.module.css";
import { FaRegPlusSquare } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";
import { useTodosDispatch } from "../TodoApp";
const TodoForm = ({ edit }) => {
  const [input, setInput] = useState("");
  const dispatch = useTodosDispatch();
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, [input]);

  // handlers
  const submitHandler = (e) => {
    e.preventDefault();
  };

  const changeHandler = (e) => {
    setInput(e.target.value);
  };

  const addHandler = () => {
    if (!input) return alert("چیزی بنویسید!");
    if (input.length < 20) {
      dispatch({ type: "add", value: input });
      if (localStorage.getItem("filterBy"))
        dispatch({ type: localStorage.getItem("filterBy") });
      setInput("");
    } else {
      alert("مجاز به ثبت ۲۰ کاراکتر هستید!");
    }
  };

  const editHandler = () => {
    if (input.length < 20) {
      dispatch({ type: "edit", value: input });
      if (localStorage.getItem("filterBy"))
        dispatch({ type: localStorage.getItem("filterBy") });
      setInput("");
    } else {
      alert("مجاز به ثبت ۲۰ کاراکتر هستید!");
    }
  };

  const renderAdd = () => {
    return (
      <form
        className={`${styles.formContainer} container`}
        onSubmit={submitHandler}
      >
        <div>
          <input
            ref={inputRef}
            className={styles.input}
            value={input}
            onChange={changeHandler}
            placeholder="بنویسید ..."
          ></input>
          <button type="submit" className={styles.btn} onClick={addHandler}>
            {<FaRegPlusSquare />}
          </button>
        </div>
      </form>
    );
  };

  const renderEdit = () => {
    return (
      <form
        className={`${styles.formContainer} container`}
        onSubmit={submitHandler}
      >
        <div>
          <input
            ref={inputRef}
            className={styles.input}
            value={input}
            onChange={changeHandler}
            placeholder="مقدار جدید ..."
          ></input>
          <button type="submit" className={styles.btn} onClick={editHandler}>
            {<FaEdit />}
          </button>
        </div>
      </form>
    );
  };
  return edit ? renderEdit() : renderAdd();
};

export default TodoForm;

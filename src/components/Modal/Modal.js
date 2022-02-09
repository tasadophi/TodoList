import { useEffect, useRef, useState } from "react";
import { useModal, useTodosDispatch } from "../TodoApp";
import styles from "./Modal.module.css";
import "animate.css";
const Modal = ({ todo }) => {
  const [input, setInput] = useState("");
  const dispatch = useTodosDispatch();
  const { setShowModal } = useModal();
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, [input]);

  //   handlers
  const editHandler = (e) => {
    e.preventDefault();
    if (!input) return alert("چیزی بنویسید!");
    if (input.length < 20) {
      dispatch({ type: "edit", todo: { ...todo, text: input } });
      setShowModal((prev) => !prev);
      if (localStorage.getItem("filterBy"))
        dispatch({ type: localStorage.getItem("filterBy") });
      setInput("");
    } else {
      alert("مجاز به ثبت ۲۰ کاراکتر هستید!");
    }
  };

  const cancelHandler = (e) => {
    e.preventDefault();
    setShowModal(false);
  };

  return (
    <div className={`${styles.modalContainer} animate__fadeIn`}>
      <div className={`${styles.backdrop}`}></div>
      <form className={`${styles.formContainer} container animate__fadeInDown`}>
        <h5>فرم ویرایش</h5>
        <input
          placeholder="مقدار جدید ..."
          ref={inputRef}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        ></input>
        <div className={styles.btns}>
          <button
            className={`${styles.btn} ${styles.editBtn}`}
            onClick={editHandler}
          >
            ویرایش
          </button>
          <button
            className={`${styles.btn} ${styles.cancelBtn}`}
            onClick={cancelHandler}
          >
            لغو
          </button>
        </div>
      </form>
    </div>
  );
};

export default Modal;

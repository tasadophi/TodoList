import styles from "./Navbar.module.css";
import Select from "react-select";
import { useState } from "react";
import { getAllTodos, useTodos, useTodosDispatch } from "../TodoApp";

const options = [
  { value: "filterAll", label: "همه" },
  { value: "filterDone", label: "انجام شده" },
  { value: "filterUndone", label: "انجام نشده" },
];

const Navbar = () => {
  const [value, setValue] = useState(options[0]);
  const allTodos = getAllTodos();
  const dispatch = useTodosDispatch();
  const all = allTodos.length;
  const done = allTodos.filter((todo) => todo.done).length;
  const undone = allTodos.filter((todo) => !todo.done).length;

  const changeHandler = (e) => {
    setValue(e);
    localStorage.setItem("filter", "true");
    localStorage.setItem("filterBy", e.value);
    dispatch({ type: e.value });
  };

  return (
    <header className={`${styles.header} container`}>
      <h1>یادداشت ها</h1>
      <div className={styles.titles}>
        <Select value={value} onChange={changeHandler} options={options} />
        <span className={styles.title}>تعداد کل : {all}</span>
        <span className={styles.title}>انجام شده : {done}</span>
        <span className={styles.title}>انجام نشده : {undone}</span>
      </div>
    </header>
  );
};

export default Navbar;

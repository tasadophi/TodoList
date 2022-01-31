import styles from "./Navbar.module.css";
import Select from "react-select";
import { useState } from "react";

const options = [
  { value: "all", label: "همه" },
  { value: "done", label: "انجام شده" },
  { value: "undone", label: "انجام نشده" },
];

const Navbar = () => {
  const [value, setValue] = useState(options[0]);
  const changeHandler = (e) => {
    setValue(e);
  };

  return (
    <header className={`${styles.header} container`}>
      <h1>یادداشت ها</h1>
      <div className={styles.titles}>
        <Select value={value} onChange={changeHandler} options={options} />
        <span className={styles.title}>تعداد کل : ۵</span>
        <span className={styles.title}>انجام شده : ۵</span>
        <span className={styles.title}>انجام نشده : ۵</span>
      </div>
    </header>
  );
};

export default Navbar;

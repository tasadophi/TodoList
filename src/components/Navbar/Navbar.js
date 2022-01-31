import styles from "./Navbar.module.css";
const Navbar = () => {
  return (
    <header className={`${styles.header} container`}>
      <h1>یادداشت ها</h1>
      <div className={styles.titles}>
        <span className={styles.title}>تعداد کل : ۵</span>
        <span className={styles.title}>انجام شده : ۵</span>
        <span className={styles.title}>انجام نشده : ۵</span>
      </div>
    </header>
  );
};

export default Navbar;

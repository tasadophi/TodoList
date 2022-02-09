import "./App.css";
import TodoApp from "./components/TodoApp";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const App = () => {
  const styles = {
    color: "#fff",
    width: "20rem",
    fontSize: "1.5rem",
  };
  return (
    <>
      <TodoApp />
      <ToastContainer rtl={true} style={styles} theme="colored" />
    </>
  );
};

export default App;

import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
localStorage.setItem("filterBy", "filterAll");
localStorage.removeItem("filter");
ReactDOM.render(<App />, document.getElementById("root"));

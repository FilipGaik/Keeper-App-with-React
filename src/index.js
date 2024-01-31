import React from "react";
//import ReactDOM from "react-dom"; // Old
import { createRoot } from "react-dom/client"; // New from React 18
import App from "./components/App";

//ReactDOM.render(<App />, document.getElementById("root")); // Old
createRoot(document.getElementById("root")).render(<App />); // New from React 18

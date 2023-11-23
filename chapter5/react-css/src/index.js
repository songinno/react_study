import React from "react";
// import ReactDom from "react-dom";
import * as ReactDom from "react-dom/client";
import { App } from "./App";
import "./index.css";

// ReactDom.render(
//     <React.StrictMode>
//         <App />
//     </React.StrictMode>
//     , document.getElementById("root")
// );
const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<App />);
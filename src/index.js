import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from "./App";
import sum from "@/text";

import { RouterProvider } from "react-router-dom";
import router from "./router";

//导入我们的定制主题的CSS文件
import "./theme.css";
const total = sum(2, 5);
console.log(total);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);

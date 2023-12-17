import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from "./App";
import sum from "@/text";
import { RouterProvider } from "react-router-dom";
import router from "./router";

const total = sum(1, 5);
console.log(total);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);

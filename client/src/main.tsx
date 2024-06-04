import "./index.css";
import React from "react";
import App from "./App.tsx";
import Login from "./pages/Login.tsx";
import ReactDOM from "react-dom/client";
import Register from "./pages/Register.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  { path: "/", element: <h1>Home</h1> },
  { path: "/about", element: <h1>About</h1> },
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App>
      <RouterProvider router={router} />
    </App>
  </React.StrictMode>
);

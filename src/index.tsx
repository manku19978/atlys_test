import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginModal from "./components/modules/LoginModal/LoginModal";
import Library from "./components/modules/Library/Library";
import Layout from "./components/modules/Layout/Layout";
import "./index.scss";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
  },
  {
    path: "/login",
    element: <LoginModal />,
  },
  {
    path: "/library",
    element: <Library />,
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

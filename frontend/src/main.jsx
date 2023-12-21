import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App, { itemsLoader } from "./App";
import AddItem, { postItem } from "./pages/AddItem";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    loader: itemsLoader,
  },
  {
    path: "/add",
    element: <AddItem />,
    action: postItem,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

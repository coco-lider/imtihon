import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import "react-router-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AllUsers from "./AllUsers.jsx";
import User from "./User.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <AllUsers /> },
      { path: "/users/:id", element: <User /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

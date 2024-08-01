import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Authintication from "./Authintication";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/Login",
    element: <Authintication />,
  },
  {
    path: "/SignUp",
    element: <Authintication />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

import './App.css';
import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import {Home} from "./pages/Home/Home";
import {Order} from "./pages/Order/Order";
import {Payment} from "./pages/Payments/Payment";
import {ErrorPage} from "./pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/make-order",
    element: <Order />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/payment",
    element: <Payment />,
    errorElement: <ErrorPage />,
  }
]);

function App() {
  return (
    <React.StrictMode>
       <RouterProvider router={router} />
    </React.StrictMode>
  );
}

export default App;

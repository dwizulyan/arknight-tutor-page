import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./utils/fonts.ts";
import Home from "./routes/home/Home.tsx";
import Stages from "./routes/guide/stages/Stages.tsx";
import Operator from "./routes/guide/operator/Operator.tsx";
import Squad from "./routes/guide/squad/Squad.tsx";
import ErrorPage from "./utils/ErrorPage.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/guide/stages",
        element: <Stages />,
      },
      {
        path: "/guide/operator",
        element: <Operator />,
      },
      {
        path: "/guide/squad",
        element: <Squad />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

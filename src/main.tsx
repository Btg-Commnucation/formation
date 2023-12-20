import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import "@fontsource/cabin";
import "@fontsource/cabin/400.css";
import "@fontsource/cabin/400-italic.css";
import "@fontsource/cabin/700.css";
import "@fontsource/cabin/700-italic.css";
import { store } from "@/app/store.ts";
import { Provider } from "react-redux";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Post from "./layouts/post.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/:slug",
    element: <Post />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
);

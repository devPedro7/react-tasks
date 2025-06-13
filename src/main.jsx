import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import TaskPage from "./pages/TaskPage";

const rota = createBrowserRouter([
  {
    path: "/", //ESSA É A PAGINA INICIAL
    element: <App></App>,
  },
  {
    path: "/detalhes-tarefa", //ESSA É A PAGINA INICIAL
    element: <TaskPage></TaskPage>,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={rota}></RouterProvider>
  </StrictMode>
);

import Login from "./pages/Login/Login.tsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import Dashboard from "./pages/Dashboard/Dashboard.tsx";
import { Provider } from "react-redux";
import { store } from "./redux/Store.ts";

const router = createBrowserRouter([
  {path: "/", element:<Login />},
  {path: "/dashboard", element:<Dashboard />}
]);

export default function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router}></RouterProvider>
    </Provider>
  );
}

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import RootLayout from "./pages/RootLayOut";
import LogInPage from "./pages/logInPage";
import "./App.css";

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [{ path: "/", element: <LogInPage/> }],
    },
    {
      path: "/home",
      element: <RootLayout />,
      children: [{ path: "", element: <HomePage /> }],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;

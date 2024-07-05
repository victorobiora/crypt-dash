import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ChartsPage from "./pages/ChartsPage";
import { ChartsLoader } from "./pages/ChartsPage";
import RootLayout from "./pages/RootLayOut";
import LogInPage from "./pages/logInPage";
import { Provider } from "react-redux";
import store from "./store/cryptStore";

import "./App.css";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [{ path: "/", element: <LogInPage /> }],
    },
    {
      path: "/home",
      element: <RootLayout />,
      children: [
        { path: "", element: <HomePage /> },
        { path: "charts", element: <ChartsPage />, loader: ChartsLoader},
      ],

    },
  ]);
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;

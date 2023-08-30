import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import { homePageLoader } from "./pages/HomePage";
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
      children: [{ path: "", element: <HomePage /> }],
      loader: homePageLoader,
    },
  ]);
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/HomePage';
import RootLayout from './pages/RootLayOut';
import './App.css';

function App() {
  const router = createBrowserRouter([
    {
      path: '/', element: <RootLayout />, children: [
        { path: '/', element: <HomePage /> },
      ]
    }

  ])
  return <RouterProvider router={router} />;
}

export default App;

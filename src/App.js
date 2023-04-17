import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import ErrorPage from './pages/Error';
import Products from './pages/Product';
import Root from './pages/Root';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root/>,
    errorElement: <ErrorPage/>,
    children: [
      {path: '/', element: <Home/>},
      {path: '/products', element: <Products/>}
    ]
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './Root.jsx';
import MenuPage from './pages/MenuPage.jsx';
import CartPage from './pages/CartPage.jsx';
import CheckoutPage from './pages/CheckoutPage.jsx';
import LoginPage from './pages/LoginPage.jsx';
import { checkoutLoader } from './loaders/checkoutLoader.js';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      { index: true, element: <MenuPage /> },
      { path: 'cart', element: <CartPage /> },
      { path: 'checkout', element: <CheckoutPage />, loader: checkoutLoader },
      { path: 'login', element: <LoginPage /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}

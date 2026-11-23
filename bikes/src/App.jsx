import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './Root.jsx';
import BikesPage from './pages/BikesPage.jsx';
import BookingPage from './pages/BookingPage.jsx';
import ConfirmPage from './pages/ConfirmPage.jsx';
import LoginPage from './pages/LoginPage.jsx';
import { confirmLoader } from './loaders/confirmLoader.js';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      { index: true, element: <BikesPage /> },
      { path: 'booking', element: <BookingPage /> },
      { path: 'confirm', element: <ConfirmPage />, loader: confirmLoader },
      { path: 'login', element: <LoginPage /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}

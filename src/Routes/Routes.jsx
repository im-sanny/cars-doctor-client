import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import SignUp from "../pages/signup/SignUp";
import BookService from "../pages/bookService/BookService";
import Bookings from "../pages/bookings/Bookings";
import ProtectedRoute from "./ProtectedRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signUp",
        element: <SignUp></SignUp>,
      },
      {
        path: "/services/:id",
        element: (
          <ProtectedRoute>
            <BookService></BookService>
          </ProtectedRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/services/${params?.id}`),
      },
      {
        path: "/bookings",
        element: (
          <ProtectedRoute>
            <Bookings></Bookings>
          </ProtectedRoute>
        ),
      },
    ],
  },
]);

export default router;
